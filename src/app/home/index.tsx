import { useEffect } from "react";
import { motion } from "framer-motion";
import { reverse } from "@/components/navbar_home";

export default function Home() {
  useEffect(() => {
    document.title = "Início";
  });

  return (
    <motion.div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
    >
      NOSSA
    </motion.div>
  );
}
