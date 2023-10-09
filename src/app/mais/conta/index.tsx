import { reverse } from "@/components/navbar_mais";
import { motion } from "framer-motion";

export default function Conta() {
  return (
    <motion.div
      style={{
        display: "flex",
        width: "72.5%",
        height: "100%",
        position: "absolute",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
    >
      conta
    </motion.div>
  );
}
