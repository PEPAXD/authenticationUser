import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js';

const githubButton = document.querySelector('#githubLogin');

githubButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    githubButton.disabled = true;

    try {
        const result = await signInWithPopup(auth, provider);
        window.location.href = "./userValidated.html";
        

    } catch (error) {
        console.error('Error:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
    
        if (error.code === 'auth/unauthorized-domain') {
            console.log('Dominio no autorizado');
        } else if (error.code === 'auth/popup-closed-by-user') {
            console.log('Ventana emergente cerrada por el usuario');
        }

    } finally {
        githubButton.disabled = false;
    }
});