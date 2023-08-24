import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import { cookies } from "next/headers";
import "./globals.css";

function Background() {
  return cookies().get("dark")?.value ?? true ? (
    <video
      autoPlay
      loop
      src="/background/dark.webm"
      className="videoFundo"
    ></video>
  ) : (
    <video
      autoPlay
      loop
      src="/background/light.webm"
      controls={false}
      className="videoFundo"
    ></video>
  );
}

export default function Home() {
  return (
    <>
      <Background />
      {cookies().get("cadastrado")?.value ?? true ? <Navbar /> : <></>}
    </>
  );
}
