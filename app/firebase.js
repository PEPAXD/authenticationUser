    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries



    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDFQu8YSl8QHqJitcPrFaguDVRvlZdtmTg",
    authDomain: "fir-userbackend.firebaseapp.com",
    projectId: "fir-userbackend",
    storageBucket: "fir-userbackend.appspot.com",
    messagingSenderId: "881590666215",
    appId: "1:881590666215:web:c3da7eb8631f65a3f57342"
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);