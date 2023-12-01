// CardsInteresse.tsx
import { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft, FaRegStar } from 'react-icons/fa6';
import Image from 'next/image';
import { Carreira, carreiraData } from './carreiraData';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseApp from '@/services/firebase';
import styles from '@/app/home/index.module.css';

interface Props {
  userId: string;
}

export const CardsInteresse: React.FC<Props> = ({ userId }) => {
  const [startIndex, setStartIndex] = useState(0);
  const numVisibleCards = 3;
  const [selectedCareers, setSelectedCareers] = useState<Carreira[]>([]);

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const userRef = ref(database, `users/${userId}/area`);

    const unsubscribe = onValue(userRef, (snapshot) => {
      const userArea = snapshot.val();
      console.log('User Area:', userArea);

      // Busca todas as carreiras correspondentes ao nome da inteligência
      const userCareers = findMatchingCareers(userArea);

      setSelectedCareers(userCareers || []);
    });

    return () => {
      unsubscribe();
    };
  }, [userId]);

  const findMatchingCareers = (userArea: string): Carreira[] => {
    const userIntelligence = userArea.toLowerCase();
    const matchingCareers: Carreira[] = [];

    carreiraData.forEach((carreira) => {
      carreira.tipo.forEach((tipo) => {
        const typeIntelligence = tipo.inteligencia.toLowerCase();

        // Verifica a correspondência da inteligência
        if (userIntelligence.includes(typeIntelligence)) {
          matchingCareers.push(carreira);
        }
      });
    });

    return matchingCareers;
  };

  const nextCard = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % selectedCareers.length);
  };

  const prevCard = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? selectedCareers.length - numVisibleCards : prevIndex - 1
    );
  };

  return (
    <div className={styles.cardContainer}>
      <button className={styles.Left} onClick={prevCard}>
        <FaAngleLeft style={{ fill: '#000000' }} className={styles.Icons} />
      </button>
      <div className={styles.cards}>
        {selectedCareers.slice(startIndex, startIndex + numVisibleCards).map((selectedCareer, index) => (
          <div key={index} className={styles.card}>
            {selectedCareer && (
              <>
                <Image
                  className={styles.img}
                  width={90}
                  height={90}
                  src={selectedCareer.imgSrc}
                  alt={selectedCareer.titulo}
                />
                <p className={styles.tituloCard}>{selectedCareer.titulo}</p>
                <p>
                  {[...Array(selectedCareer.estrelas)].map((_, i) => (
                    <FaRegStar key={i} style={{ fill: 'yellow', width: 25, height: 25 }} />
                  ))}
                </p>
                <button className={styles.btnCard}>Iniciar</button>
              </>
            )}
          </div>
        ))}
      </div>
      <button className={styles.Right} onClick={nextCard}>
        <FaAngleRight style={{ fill: '#000000' }} className={styles.Icons} />
      </button>
    </div>
  );
};
