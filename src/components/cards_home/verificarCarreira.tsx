import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "@/services/firebase";

// Função para verificar se o usuário está tentando chamar a carreira favorita
const verificarChamadaCarreiraFavorita = (usuarioId: string, carreiraFavorita: string) => {
  const database = getDatabase(firebaseApp);
  const usuarioRef = ref(database, `users/${usuarioId}/area`);

  // Monitora as mudanças na área favorita do usuário
  onValue(usuarioRef, (snapshot) => {
    const areaFavoritaUsuario = snapshot.val();

    // Verifica se a área favorita do usuário coincide com a carreira que está sendo chamada
    if (areaFavoritaUsuario === carreiraFavorita) {
      console.log("O usuário está tentando chamar a carreira favorita!");
      // Faça aqui o que deseja fazer quando o usuário chamar a carreira favorita
    } else {
      console.log("O usuário não está chamando a carreira favorita.");
      // Faça aqui o que deseja fazer quando o usuário não chamar a carreira favorita
    }
  });
};
