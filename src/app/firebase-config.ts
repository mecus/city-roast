import { AngularFireModule, AuthMethods, AuthProviders, FIREBASE_PROVIDERS } from 'angularfire2';
import { FIREBASEAPI } from './shared/secret';
  // Initialize Firebase
  export const firebaseConfig = {
    apiKey: FIREBASEAPI,
    authDomain: "city-roast.firebaseapp.com",
    databaseURL: "https://city-roast.firebaseio.com",
    storageBucket: "city-roast.appspot.com",
    messagingSenderId: "798903411161"
  };
  
  export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  };