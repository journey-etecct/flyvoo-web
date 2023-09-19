import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Início";
  });

  return <div></div>;
}
