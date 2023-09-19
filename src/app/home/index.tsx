import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Início";
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      NOSSA
    </div>
  );
}
