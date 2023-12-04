import { Curso } from "@/app/page";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

const db = getDatabase();
const cursosRef = ref(db, "/cursos/");
let listaDeCursosDB: DataSnapshot[] = [];
let listaDeCursos: Curso[] = [];

export function iniciar(setLista: Dispatch<SetStateAction<Curso[]>>) {
  onValue(cursosRef, (snapshot) => {
    listaDeCursosDB = [];
    snapshot.forEach((cursoSnapshot) => {
      listaDeCursosDB.push(cursoSnapshot);
    });

    listaDeCursosDB.forEach((valor) => {
      listaDeCursos.push({
        nome: valor.key!,
        "faculdade(s)": valor.child("faculdade(s)").val(),
      });
    });

    console.log(listaDeCursos);
    /* setLista(listaDeCursos); */
  });
}
