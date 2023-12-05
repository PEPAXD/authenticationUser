import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showErrorToast } from './showError.js'

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const provider = new FacebookAuthProvider();
    facebookButton.disabled = true;

    try {
        const result = await signInWithPopup(auth, provider);
        window.location.href = "./userValidated.html";
        

    } catch (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
            window.location.href = "./userValidated.html";

        } else {
            showErrorToast('Ocurrió un error durante el registro');
            console.log(error);
        }

    } finally {
        facebookButton.disabled = false;
    }
});