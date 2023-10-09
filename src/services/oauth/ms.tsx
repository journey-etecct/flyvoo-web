import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import firebaseApp from '../firebase';

const provider = new OAuthProvider('microsoft.com');

const handleMicrosoftLogin = () => {
  const auth = getAuth(firebaseApp);

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = result.credential;
      const accessToken = credential.accessToken;
      const user = result.user;
      console.log('Usuário autenticado com a Microsoft:', user);
    })
    .catch((error) => {
      console.error('Erro ao autenticar com a Microsoft:', error);
    });
};

export default handleMicrosoftLogin;



