import { cookies } from "next/headers";

export function Background() {
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
