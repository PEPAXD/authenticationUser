import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from './firebase.js';
import { showErrorToast } from './showError.js'

const signupForm = document.querySelector("#SignUpForm");

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['SingUpEmail'].value;
    const password = signupForm['SingUpPassword'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = "./userValidated.html";

    } catch (error) {

        if (error.code === 'auth/invalid-email') {
            showErrorToast('Invalid email format. Please enter a valid email address.');
        } else if (error.code === 'auth/weak-password') {
            showErrorToast('Password is too weak. Please choose a stronger password.');
        } else if (error.code === 'auth/email-already-in-use') {
            showErrorToast('The email address is already in use by another account.');
        } else if (error.code === 'auth/user-not-found') {
            showErrorToast('User not found. Please check your email address or sign up for a new account.');
        } else if (error.code === 'auth/wrong-password') {
            showErrorToast('Incorrect password. Please enter the correct password.');
        } else {
            showErrorToast('An error occurred during registration. Please try again.');
        }
    }
});
