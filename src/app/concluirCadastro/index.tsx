import React, { useState } from "react";
import styles from "./index.module.css";
import ConcluirCadastro2 from "../concluirCadastro2"; 
import { georama800 } from "../inicio";

export default function ConcluirCadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitarNotificacoes, setAceitarNotificacoes] = useState(false);
  const [step, setStep] = useState<number>(1); // Acompanhe a etapa atual

  const handleNextStep = () => {
    // Valida os inputs
    if (step === 1 && (!nome || !telefone || !senha || !confirmarSenha)) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    // Lógica de validação adicional para outras steps dever ser adicionada aqui
    if (step === 1 && !aceitarNotificacoes) {
      alert("Você precisa aceitar receber notificações e atualizações.");
      return;
    }

    // Movendo para o próximo step
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className={styles.container}>
      {step === 1 && (
        // Step 1: Coleta nome, telefone, senha, e confirmarSenha
        <div>
          <h1 className={styles.txt} style={georama800.style}>
            Conclua seu Cadastro
          </h1>

          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              <label htmlFor="nome" className={styles.label}>
                *Nome Completo:
              </label>
              <input
                type="text"
                id="nome"
                className={styles.input}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              <label htmlFor="telefone" className={styles.label}>
                *Telefone (DDD e número):
              </label>
              <input
                type="tel"
                id="telefone"
                className={styles.input}
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              <label htmlFor="senha" className={styles.label}>
                *Senha:
              </label>
              <input
                type="password"
                id="senha"
                className={styles.input}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              <label htmlFor="confirmarSenha" className={styles.label}>
                *Confirmar Senha:
              </label>
              <input
                type="password"
                id="confirmarSenha"
                className={styles.input}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.checkoutContainer}>
            <input
              type="checkbox"
              id="aceitarNotificacoes"
              className={styles.checkbox}
              checked={aceitarNotificacoes}
              onChange={() => setAceitarNotificacoes(!aceitarNotificacoes)}
            />
            <label htmlFor="aceitarNotificacoes">
              Eu aceito receber notificações e atualizações
            </label>
          </div>

          <p className={styles.smallText}>
            Ao clicar em Concluir, você concorda com nossos Termos de Uso.
          </p>
        <div style={{display:"flex", justifyContent:"center"}}>
          <button className={styles.enviarButton} onClick={handleNextStep}>
            Próximo
          </button>
          </div>
        </div>
      )}

      {step === 2 && (
        // Step 2: Passa o telefone para ConcluirCadastro2
        <ConcluirCadastro2 telefone={telefone} />
      )}
    </div>
  );
}
