import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export const criarConta = () => {
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
        alert("link enviado com sucesso");
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Erro: ", errorCode);
        console.log("Erro: ", errorMessage);
    })};
