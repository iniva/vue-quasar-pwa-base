/* eslint-disable no-unused-vars, no-restricted-globals */
import { register } from 'register-service-worker';
import { Notify } from 'quasar';

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready() {
    console.log('App is being served from cache by a service worker.');
  },

  registered(registration) {
    console.log('Service worker has been registered.');
  },

  cached(registration) {
    console.log('Content has been cached for offline use.');
  },

  updatefound(registration) {
    console.log('New content is downloading.');
  },

  updated(registration) {
    console.log('New content is available; please refresh.');
    Notify.create({
      color: 'green',
      textColor: 'white',
      message: `New version of ${process.env.APP_NAME} is available!`,
      icon: 'cloud_download',
      position: 'center',
      timeout: 5000,
      actions: [{
        label: 'Refresh',
        icon: 'refresh',
        color: 'white',
        handler: () => {
          location.reload(true);
        },
      }],
      onDismiss: () => {
        location.reload(true);
      },
    });
  },

  offline() {
    console.log('No internet connection found. App is running in offline mode.');
    Notify.create({
      color: 'orange',
      textColor: 'white',
      message: `No internet connection found. ${process.env.APP_NAME} is running in offline mode.`,
      icon: 'cloud_off',
      position: 'center',
      timeout: 2500,
    });
  },

  error(err) {
    console.error('Error during service worker registration:', err);
  },
});
