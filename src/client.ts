import 'vinxi/client';

import { createApp } from './main';

declare global {
  interface Window {
    vueInitialData: any;
  }
}

import { sayHello } from './actions/actions'; //'./actions';

console.log(await sayHello());

const [app, router] = createApp(false, window.vueInitialData);

router.isReady().then(() => {
  //router is ready. hydrate vue client
  app.mount('#app');
});
