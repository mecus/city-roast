import { AngularFireModule, AuthMethods, AuthProviders, FIREBASE_PROVIDERS } from 'angularfire2';
  // Initialize Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyBZYu-le-v0_1NuB0exuYJmJcsZqSJ-EKM",
    authDomain: "city-roast.firebaseapp.com",
    databaseURL: "https://city-roast.firebaseio.com",
    storageBucket: "city-roast.appspot.com",
    messagingSenderId: "798903411161"
  };
  
  export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  };
