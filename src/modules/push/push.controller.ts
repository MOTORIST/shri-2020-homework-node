import { Request, Response, NextFunction } from 'express';
import webpush from 'web-push';
import {
  NOTIFICATION_EMAIL,
  NOTIFICATION_VAPID_PRIVATE_KEY,
  NOTIFICATION_VAPID_PUBLIC_KEY,
} from '../../config';
import SubscriptionsStore from './subscriptions-store.service';

export async function subscribe(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { body } = req;

  try {
    await SubscriptionsStore.add(body);
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
}

export async function unsubscribe(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await SubscriptionsStore.clear();
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
}

export async function send(req: Request, res: Response, next: NextFunction): Promise<void> {
  const {
    body: { title, message },
  } = req;

  try {
    if (!NOTIFICATION_EMAIL || !NOTIFICATION_VAPID_PUBLIC_KEY || !NOTIFICATION_VAPID_PRIVATE_KEY) {
      throw new Error(
        'NOTIFICATION_EMAIL or NOTIFICATION_VAPID_PUBLIC_KEY or NOTIFICATION_VAPID_PRIVATE_KEY environment constants not set'
      );
    }

    webpush.setVapidDetails(
      `mailto:${NOTIFICATION_EMAIL}`,
      NOTIFICATION_VAPID_PUBLIC_KEY,
      NOTIFICATION_VAPID_PRIVATE_KEY
    );

    const subscriptionsData = await SubscriptionsStore.getAll();

    if (subscriptionsData) {
      const payload = JSON.stringify({
        title,
        body: message,
      });

      const subscriptionsArr = Object.values(subscriptionsData);

      for (const subscriptionData of subscriptionsArr) {
        await webpush.sendNotification(subscriptionData, payload);
      }
    }

    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
}
