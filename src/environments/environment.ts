// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'pa-fhs',
    appId: '1:227491645310:web:ddad074b5a6cde6164552f',
    storageBucket: 'pa-fhs.appspot.com',
    apiKey: 'AIzaSyDC-zmkxySJI-_QA-K40xFYOQkM1kEW_JA',
    authDomain: 'pa-fhs.firebaseapp.com',
    messagingSenderId: '227491645310',
    measurementId: 'G-TGYPYMDYE3',
  },
  production: false,
  baseUrl: 'http://localhost:8080/',
  apiRoot: '/fhs-frontend/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
