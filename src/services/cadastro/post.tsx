
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { MouseEventHandler } from "react";

export const criarConta: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const emailElement = document.getElementById("emailCadastro") as HTMLInputElement;
    const email: string = emailElement.value; 
    const auth = getAuth();

    if (!isValidEmail(email)) {
        alert("Por favor, coloque um endereço de email válido.");
        return; // Impede que o código continue se o email for inválido.
    }

     // Verifica o estado do checkbox
     const checado = (document.querySelector('input[type="checkbox"]') as HTMLInputElement).checked;

     if (!checado) {
         alert("Você deve aceitar os Termos de Uso e Política de Privacidade para prosseguir.");
         return; // Impede que o código continue se o checkbox não estiver marcado.
     }

    const actionCodeSettings = {
        url: '/verificaçãoEmail',
        handleCodeInApp: true,
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            alert("Link enviado com sucesso!");
            window.localStorage.setItem("emailForSignIn", email);

        })
        .catch((error) => {
            const errorCode: string = error.code; 
            const errorMessage: string = error.message; 

            console.log("Error Code: ", errorCode);
            console.log("Error Message: ", errorMessage);
        });
};

function isValidEmail(email: string) { 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
