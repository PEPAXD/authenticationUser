import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showErrorToast } from './showError.js'

const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    googleButton.disabled = true;

    try {
        const result = await signInWithPopup(auth, provider);
        window.location.href = "./userValidated.html";

    } catch (error) {
        showErrorToast('Ocurrió un error durante el registro');

    } finally {
        googleButton.disabled = false;
    }
});