import { Curso } from "@/app/page";
import { getDatabase, onValue, ref } from "firebase/database";

const db = getDatabase();
const cursosRef = ref(db, "/cursos/");
let listaDeCursos: Curso[] = [];

export function iniciar() {
  onValue(cursosRef, (snapshot) => {
    snapshot.forEach((cursoSnapshot) => {
      listaDeCursos += cursoSnapshot.val();
    });
  });
}

export { listaDeCursos };
