import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../firebase";

const handleGoogleLogin = () => {
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
        //Isso fornece um token de acesso do Google. Você pode usá-lo para acessar a API do Google.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
        // As informações do usuário conectado.
    const user = result.user;
        // Dados do IdP disponíveis usando getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Lide com erros aqui..
    const errorCode = error.code;
    const errorMessage = error.message;
        // O e-mail da conta do usuário utilizado.
    const email = error.customData.email;
        // O tipo AuthCredential que foi usado.
    const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    })};

    export default handleGoogleLogin;