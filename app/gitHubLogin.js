import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showErrorToast } from './showError.js'

const githubButton = document.querySelector('#githubLogin');

githubButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    githubButton.disabled = true;

    try {
        const result = await signInWithPopup(auth, provider);
        window.location.href = "./userValidated.html";
        

    } catch (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
            window.location.href = "./userValidated.html";
        } else {
            showErrorToast('Ocurrió un error durante el registro');
        }

    } finally {
        githubButton.disabled = false;
    }
});