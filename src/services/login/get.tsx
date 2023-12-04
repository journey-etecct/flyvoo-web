import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MouseEventHandler } from "react";

export const logar: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const emailElement = document.getElementById("emailLogin") as HTMLInputElement;
    const senhaElement = document.getElementById("senhaLogin") as HTMLInputElement;
    const email: string = emailElement.value;
    const password: string = senhaElement.value; 
        
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            // Signed in 
            const user = userCredential.user;
      
            // Set email in localStorage
            localStorage.setItem('userEmail', user.displayName || '');

            // Set cookie
            document.cookie = "logado=true; path=/";

            // Redirect to "/"
            window.location.href = "/";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Erros: ${errorCode} com a seguinte mensagem: ${errorMessage}`);
        });
};

