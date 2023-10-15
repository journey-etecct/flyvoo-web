"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Background({ dark }: { dark: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {dark && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <video
            playsInline
            autoPlay
            muted
            loop
            controls={false}
            style={{ pointerEvents: "none" }}
            src="/background/dark.webm"
            className="videoFundo"
          />
        </motion.div>
      )}
      {!dark && (
        <motion.video
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          playsInline
          autoPlay
          muted
          loop
          src="/background/light.webm"
          controls={false}
          style={{ pointerEvents: "none" }}
          className="videoFundo"
        />
      )}
    </AnimatePresence>
  );
}
