import { cookies } from "next/headers";

export function Background() {
  return cookies().get("dark")?.value ?? true ? (
    <video
      autoPlay
      loop
      controls={false}
      style={{ pointerEvents: "none" }}
      src="/background/dark.webm"
      className="videoFundo"
    ></video>
  ) : (
    <video
      autoPlay
      loop
      src="/background/light.webm"
      controls={false}
      style={{ pointerEvents: "none" }}
      className="videoFundo"
    ></video>
  );
}
