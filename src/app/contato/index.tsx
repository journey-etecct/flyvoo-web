import { reverse } from "@/components/navbar";
import { motion } from "framer-motion";

export default function Contato() {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
    >
      contato works!
    </motion.div>
  );
}
