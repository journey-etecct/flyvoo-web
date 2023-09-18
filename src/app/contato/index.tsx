import { reverse } from "@/components/navbar";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import React, { useEffect } from "react";
import { georama } from "../inicio";
import Image from "next/image";

let jaFoi: boolean = false;

export default function Contato() {
  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  const loadGoogleMapsScript = () => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDi-DZdD0eMnngY6rVKOB-dhLy6GPwCfEA&libraries=places&callback=Function.prototype`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;

    googleMapsScript.onload = initializeMap;

    if (!jaFoi) {
      document.body.appendChild(googleMapsScript);
      jaFoi = true;
    } else {
      initializeMap();
    }
  };

  const initializeMap = () => {
    setTimeout(() => {
      if (
        typeof window.google === "object" &&
        typeof window.google.maps === "object"
      ) {
        const mapOptions = {
          center: { lat: -23.59340353478936, lng: -46.40796951505325 },
          zoom: 19,
          zoomControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          keyboardShortcuts: false,
        };

        const mapElement = document.getElementById("google-map")!;
        const map = new window.google.maps.Map(mapElement, mapOptions);
      }
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
      className="animacao"
      style={{ flexDirection: "column" }}
    >
      <h1 className={styles.titulo} style={georama.style}>
        Contate-nos
      </h1>
      <div className={styles.pageContainer}>
        <div className={styles.contatoContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="nome" className={styles.label}>
                Nome
              </label>
              <input type="text" id="nome" className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                autoComplete="email"
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="mensagem" className={styles.label}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                className={styles.textarea}
                rows={8}
              ></textarea>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.enviarButton}>Enviar</button>
            </div>
          </div>
          <div className={styles.mapaContainer}>
            <svg
              className={styles.spinner}
              width="65px"
              height="65px"
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={styles.path}
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                cx="33"
                cy="33"
                r="30"
              ></circle>
            </svg>
            <div id="google-map" className={styles.mapa}></div>
          </div>
        </div>
        <div className={styles.imagemContainer}>
          <Image
            src="/img/contato.svg"
            alt="Descrição da imagem"
            fill
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
