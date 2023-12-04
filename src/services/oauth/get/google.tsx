import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "@/services/firebase";

export const logarGoogle = () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
  
            // Set email in localStorage
            localStorage.setItem('userEmail', user.displayName || '');

            // Ajusta o cookie
            document.cookie = "logado=true; path=/";

            // Redireciona para a home
            location.href = "/"; 
        })
        .catch((error) => {
            // Handle Google authentication error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Erros: ${errorCode} com a seguinte mensagem: ${errorMessage}`);
        });
};