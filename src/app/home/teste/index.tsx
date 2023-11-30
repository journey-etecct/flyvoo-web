import React, { useState } from 'react';
import styles from './index.module.css';

export default function Teste() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    console.log('proxima questão');
    // Lugar para fazer o calculo dos pontos 
  };

  const getColor = (option) => {
    return option === 'Concordo Plenamente' || option === 'Concordo' ? 'green' : option === 'Neutro' ? 'grey' : 'red';
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.questionContainer}>
          <div className={styles.questionText}>Esta é a pergunta?</div>

          <div className={styles.optionsContainer}>
            <OptionButton id="concordoPlenamente" option="Concordo Plenamente" selected={selectedOption === 'Concordo Plenamente'} onClick={() => handleOptionSelect('Concordo Plenamente')} getColor={getColor} />
            <OptionButton id="concordo" option="Concordo" selected={selectedOption === 'Concordo'} onClick={() => handleOptionSelect('Concordo')} getColor={getColor} />
            <OptionButton id="neutro" option="Neutro" selected={selectedOption === 'Neutro'} onClick={() => handleOptionSelect('Neutro')} getColor={getColor} />
            <OptionButton id="discordo" option="Discordo" selected={selectedOption === 'Discordo'} onClick={() => handleOptionSelect('Discordo')} getColor={getColor} />
            <OptionButton id="discordoPlenamente" option="Discordo Plenamente" selected={selectedOption === 'Discordo Plenamente'} onClick={() => handleOptionSelect('Discordo Plenamente')} getColor={getColor} />
          </div>

          {selectedOption && (
            <button className={styles.nextButton} onClick={handleNextButtonClick}>
              Próximo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const OptionButton = ({ id, option, selected, onClick, getColor }) => {
  const circleBorderColor = getColor(option);
  const circleFillColor = selected ? getColor(option) : 'transparent';

  return (
    <div id={id} className={styles.option} onClick={onClick}>
      <div className={styles.circle} style={{ border: `3px solid ${circleBorderColor}`, backgroundColor: circleFillColor }}></div>
      <div className={styles.optionText}>{option}</div>
    </div>
  );
};
