import { getDatabase, onValue, ref } from "firebase/database";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faPeopleCarryBox,
  faSquareRootVariable,
  faHeadphonesSimple,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

const db = getDatabase();
const carreirasRef = ref(db, "/carreiras/");
let listaDeCarreirasDB: Carreira[] = [];

export function iniciar(setLista: Dispatch<SetStateAction<Carreira[]>>) {
  onValue(carreirasRef, (snapshot) => {
    listaDeCarreirasDB = [];
    snapshot.forEach((carreiraSnapshot) => {
      listaDeCarreirasDB.push(carreiraSnapshot.val());
    });

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
      return (
        <span className="material-symbols-rounded iconeCarreira">
          sports_tennis
        </span>
      );
    case Area.existencial:
      return <i className="bx bxs-brain iconeCarreira"></i>;
    case Area.intrapessoal:
      return <FontAwesomeIcon className="iconeCarreira" icon={faPerson} />;
    case Area.espacial:
      return (
        <span className="material-symbols-rounded iconeCarreira">globe</span>
      );
    case Area.interpessoal:
      return (
        <FontAwesomeIcon className="iconeCarreira" icon={faPeopleCarryBox} />
      );
    case Area.linguistica:
      return (
        <span className="material-symbols-rounded iconeCarreira">
          translate
        </span>
      );
    case Area.logicoMat:
      return (
        <FontAwesomeIcon
          className="iconeCarreira"
          icon={faSquareRootVariable}
        />
      );
    case Area.musical:
      return (
        <FontAwesomeIcon className="iconeCarreira" icon={faHeadphonesSimple} />
      );
    default: /* naturalista */
      return <FontAwesomeIcon className="iconeCarreira" icon={faTree} />;
  }
}
