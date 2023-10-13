"use client";
import { useCookies } from "next-client-cookies";

export default function Background() {
  const cookies = useCookies();

  return cookies.get("dark") == "true" ?? true ? (
    <video
      playsInline
      autoPlay
      muted
      loop
      controls={false}
      style={{ pointerEvents: "none" }}
      src="/background/dark.webm"
      className="videoFundo"
    ></video>
  ) : (
    <video
      playsInline
      autoPlay
      muted
      loop
      src="/background/light.webm"
      controls={false}
      style={{ pointerEvents: "none" }}
      className="videoFundo"
    ></video>
  );
}
