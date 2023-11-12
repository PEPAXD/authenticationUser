import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from './firebase.js';

const signupForm = document.querySelector("#SignUpForm");

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['SingUpEmail'].value;
    const password = signupForm['SingUpPassword'].value;

    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = "./userValidated.html";

    } catch (error) {

        if (error.code === 'auth/invalid-email') {
            alert('Invalid email format. Please enter a valid email address.');
        } else if (error.code === 'auth/weak-password') {
            alert('Password is too weak. Please choose a stronger password (6 > characters).');
        } else if (error.code === 'auth/email-already-in-use') {
            alert('The email address is already in use by another account.');
        } else {
            alert('An error occurred during registration. Please try again.');
        }
    }
});

