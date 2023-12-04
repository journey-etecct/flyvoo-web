import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";
import firebaseApp from "@/services/firebase";

export const logarMicrosoft = () => {
    const auth = getAuth(firebaseApp);
    const provider = new OAuthProvider("microsoft.com");

    signInWithPopup(auth, provider)
        .then((userCredential) => {
            // Verifique a estrutura do objeto userCredential.user e ajuste conforme necessário
            const user = userCredential.user.email;
            console.log(user);

            // Set cookie
            document.cookie = "logado=true; path=/";

            // Redirect to "/"
            location.href = "/";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Erros: ${errorCode} com a seguinte mensagem: ${errorMessage}`);
        });
};
