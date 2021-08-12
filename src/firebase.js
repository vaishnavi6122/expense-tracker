import firebase  from 'firebase/app';
import 'firebase/auth';
const app=firebase.initializeApp({
    apiKey: "AIzaSyCsJvpR6BAwziCsskgDOWdkcdK_5e08JRY",
    authDomain: "auth-tahaan.firebaseapp.com",
    projectId: "auth-tahaan",
    storageBucket: "auth-tahaan.appspot.com",
    messagingSenderId: "982152146594",
    appId: "1:982152146594:web:36bb873ee2cdd987eeb1fb"
})

export const auth=app.auth();
export default app;