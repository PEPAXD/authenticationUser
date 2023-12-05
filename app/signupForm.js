import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
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
        switch (error.code) {
            case 'auth/invalid-email':
                showErrorToast('Formato de correo electrónico inválido. Por favor, introduce una dirección de correo electrónico válida.');
                break;
            case 'auth/weak-password':
                showErrorToast('Contraseña débil. Por favor, introduce una contraseña de al menos 6 caracteres.');
                break;
            default:
                showErrorToast('Ocurrió un error durante el registro. Por favor, inténtalo de nuevo.');
                console.log(error.code);
        }
    }
});
