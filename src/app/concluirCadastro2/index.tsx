import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./index.module.css";
import { georama800 } from "../inicio";
import {
  getDatabase,
  ref,
  push,
  set
} from "firebase/database";
import firebaseApp from "@/services/firebase";

interface UserData {
  area: string;
  nascimento: string;
  pronomes: string;
  sexo: string;
}

interface concluirCadastro2Props {
  telefone: string;
}

const formatPhoneNumber = (phoneNumber: string) => {
  // Certifica-se de que apenas os dígitos sejam mantidos
  const cleaned = phoneNumber.replace(/\D/g, "");
  
  // Check se o input é um número válido
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  // Se o input não for um número válido, retorna o valor inicial
  return phoneNumber;

}

const concluirCadastro2: React.FC<concluirCadastro2Props> = ({ telefone }) => {
  const [area, setArea] = useState<string>("");
  const [nascimento, setNascimento] = useState<string>("");
  const [pronomes, setPronomes] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");

  const database = getDatabase(firebaseApp);
  const usersRef = ref(database, "users");

  async function criarDado() {
    if (!area || !nascimento || !pronomes || !sexo || !telefone) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const parsedDate = new Date(nascimento);

      // Formata a data para "dd;MM;yyyy"
      const formattedDate = `${parsedDate.getDate() + 1};${parsedDate.getMonth() + 1};${parsedDate.getFullYear()}`;

      const newUserRef = push(usersRef);
      await set(newUserRef, {
        area,
        nascimento: formattedDate,
        pronomes,
        sexo,
        telefone: formatPhoneNumber(telefone),
      });
      alert("dados salvos com sucesso");
      setArea("");
      setNascimento("");
      setPronomes("");
      setSexo("");
    } catch (e) {
      console.error("Error adding data: ", e);
    }
  }

  return (
    <motion.div className={styles.container}
    initial={{ opacity: 0, left: reverse ? -50 : 50 }}
    animate={{ opacity: 1, left: 0 }}
    style={{ position: "absolute" }}>
      <h1 className={styles.txt} style={georama800.style}>
        Conclua seu Cadastro
      </h1>

      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <label htmlFor="carreira" className={styles.label}>
            *Carreiras:
          </label>
          <select
            id="carreira"
            className={styles.selectInput}
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="Nenhuma">Selecione</option>
            <option value="carreira1">Carreira1</option>
            <option value="carreira2">Carreira2</option>
            <option value="carreira3">Carreira3</option>
            <option value="carreira4">Carreira4</option>
            <option value="carreira5">Carreira5</option>
            <option value="carreira6">Carreira6</option>
          </select>
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <label htmlFor="sexo" className={styles.label}>
            *Sexo:
          </label>
          <select
            id="sexo"
            className={styles.selectInput}
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <option value="Nenhum">Selecione</option>
            <option value="Prefiro não dizer">Prefiro não dizer</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <label htmlFor="Data de Nascimento" className={styles.label}>
            *Data de Nascimento (m/d/a):
          </label>
          <input
            type="date"
            id="Data de Nascimento"
            className={styles.input}
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <label htmlFor="pronome" className={styles.label}>
            *Pronome (Opcional):
          </label>
          <select
            id="pronome"
            className={styles.selectInput}
            value={pronomes}
            onChange={(e) => setPronomes(e.target.value)}
          >
            <option value="Nenhum">Selecione</option>
            <option value="Nenhum">Nenhum</option>
            <option value="ele/dele">ele/dele</option>
            <option value="ela/dela">ela/dela</option>
          </select>
        </div>
      </div>

      <button className={styles.enviarButton} onClick={criarDado}>Próximo</button>
    </motion.div>
  );
}

export default concluirCadastro2