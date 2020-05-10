import fs from 'fs';
import { PushSubscription } from 'web-push';
import { NOTIFICATION_SUBSCRIPTIONS_STORE_FILE } from '../../config';

class SubscriptionsStore {
  static async add(subscription: PushSubscription): Promise<void> {
    try {
      if (fs.existsSync(NOTIFICATION_SUBSCRIPTIONS_STORE_FILE)) {
        
        const subscriptions = await SubscriptionsStore.getAll();

        if (subscriptions && !subscriptions[subscription.endpoint]) {
          subscriptions[subscription.endpoint] = subscription;
          await SubscriptionsStore.save(subscriptions);
        }
      } else {
        const subscriptions = {
          [subscription.endpoint]: subscription,
        };

        await SubscriptionsStore.save(subscriptions);
      }
    } catch (error) {
        console.error(`Failed to add notification subscription to store`, error);
    }
  }

  static async getAll(): Promise<Record<string, PushSubscription>> {
    try {
      const data = await fs.promises.readFile(NOTIFICATION_SUBSCRIPTIONS_STORE_FILE, {
        encoding: 'utf8',
      });

      return JSON.parse(data);
    } catch (error) {
      console.error(
        `Failed to read subscriptions file: ${NOTIFICATION_SUBSCRIPTIONS_STORE_FILE}`,
        error
      );

      throw error;
    }
  }

  static async clear(): Promise<void> {
    try {
       await fs.promises.unlink(NOTIFICATION_SUBSCRIPTIONS_STORE_FILE);
    } catch (error) {
      console.error(`Failed to clear subscriptions store ${NOTIFICATION_SUBSCRIPTIONS_STORE_FILE}`, error);
      throw error;
    }
  }

  private static async save(subscriptions: Record<string, PushSubscription>): Promise<void> {
    try {
        await fs.promises.writeFile(NOTIFICATION_SUBSCRIPTIONS_STORE_FILE, JSON.stringify(subscriptions), {
          encoding: 'utf8',
        });
      } catch (error) {
        console.error(
          `Failed to save subscriptions in file: ${NOTIFICATION_SUBSCRIPTIONS_STORE_FILE}`,
          error
        );
  
        throw error;
      }
  }
}

export default SubscriptionsStore;
