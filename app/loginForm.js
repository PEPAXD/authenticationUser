import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showErrorToast } from './showError.js'

const signupForm = document.querySelector("#LoginForm");

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['loginEmail'].value;
    const password = signupForm['LoginPassword'].value;

    try{
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        window.location.href = "./userValidated.html";
    } catch (error) {

        if (error.code === 'auth/invalid-email') {
            showErrorToast('Invalid email format. Please enter a valid email address.');
        } else if (error.code === 'auth/invalid-login-credentials') {
            showErrorToast('Invalid email or Incorrect password. Double-check and try again.');
        } else {
            showErrorToast('Login error. Check your inputs and try again.');
        }
    }
    
});
