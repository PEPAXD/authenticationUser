import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

import { auth } from './firebase.js';

const signupForm = document.querySelector("#SignUpForm")

signupForm.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = signupForm['SingUpEmail'].value
    const password = signupForm['SingUpPassword'].value

    console.log(email, password)

    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    } catch (error) {
        console.log(error)
    }

})