import { reverse } from "@/components/navbar_home";
import { motion } from "framer-motion";

export default function Cursos() {
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
      cursos
    </motion.div>
  );
}
