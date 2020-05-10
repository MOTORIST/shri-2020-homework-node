function urlB64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  // eslint-disable-next-line no-useless-escape
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

function subscribeUser(sw: ServiceWorkerRegistration): void {
  if (!sw.pushManager) return;

  if (!process.env.REACT_APP_VAPID_PUBLIC_KEY) {
    throw new Error('REACT_APP_VAPID_PUBLIC_KEY not set in app environment');
  }

  sw.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(process.env.REACT_APP_VAPID_PUBLIC_KEY),
    })
    .then((subscription) => {
      fetch(`${process.env.REACT_APP_API_URL}push/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            localStorage.setItem('isSubscriptionNotification', 'true');
            console.info('register notification success');
          }
        })
        .catch((error) => console.error('error fetching subscribe', error));
    })
    .catch(function (error) {
      console.log('Failed to subscribe the user: ', error);
    });
}

function init(sw: ServiceWorkerRegistration): void {
  if (!localStorage.getItem('isSubscriptionNotification')) {
    try {
      subscribeUser(sw);
    } catch (error) {
      console.error('Failed to subscribe user notification', error);
    }
  }
}

export default init;
