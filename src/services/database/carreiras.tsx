import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import { Dispatch, ReactElement, SetStateAction } from "react";

const db = getDatabase();
const carreirasRef = ref(db, "/carreiras/");
let listaDeCarreirasDB: Carreira[] = [];

export function iniciar(setLista: Dispatch<SetStateAction<Carreira[]>>) {
  onValue(carreirasRef, (snapshot) => {
    listaDeCarreirasDB = [];
    snapshot.forEach((carreiraSnapshot) => {
      listaDeCarreirasDB.push(carreiraSnapshot.val());
    });

    console.log(listaDeCarreirasDB);
    setLista(listaDeCarreirasDB);
  });
}

export { listaDeCarreirasDB as listaDeCarreiras };

export type Carreira = {
  cargaHoraria: string;
  carreira: string;
  desc: string;
  inteligencia: InteligenciasLista;
  obs: string;
  salario: {
    max: string;
    min: string;
  };
};

export enum Area {
  naturalista = "Naturalista",
  logicoMat = "Lógico Matemática",
  existencial = "Existencial",
  intrapessoal = "Intrapessoal",
  linguistica = "Linguística",
  corporalCin = "Corporal Cinestética",
  interpessoal = "Interpessoal",
  musical = "Musical",
  espacial = "Espacial",
}

export type InteligenciasLista = {
  interpessoal?: number;
  logicoMat?: number;
  naturalista?: number;
  existencial?: number;
  intrapessoal?: number;
  linguistica?: number;
  corporalCin?: number;
  musical?: number;
  espacial?: number;
};

export function iconeArea(area: Area): ReactElement {
  switch (area) {
    case Area.corporalCin:
      return <div></div>;
    case Area.existencial:
      return <div></div>;
    case Area.intrapessoal:
      return <div></div>;
    case Area.espacial:
      return <div></div>;
    case Area.interpessoal:
      return <div></div>;
    case Area.linguistica:
      return <div></div>;
    case Area.logicoMat:
      return <div></div>;
    case Area.musical:
      return <div></div>;
    default: /* naturalista */
      return <div></div>;
  }
}
