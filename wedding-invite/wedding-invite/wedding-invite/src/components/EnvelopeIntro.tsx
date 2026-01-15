import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onOpen: () => void;
}

export default function EnvelopeIntro({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    const audio = new Audio("/src/assets/sounds/open.mp3");
    audio.play().catch(() => {});

    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-champagne">
      <div className="relative w-80 h-56 perspective-1000">

        {/* Envelope Body */}
        <div className="absolute inset-0 bg-blush rounded-2xl shadow-xl" />

        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-gold rounded-t-2xl origin-top"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: opening ? -140 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Letter */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 h-40 bg-white rounded-lg shadow-md"
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: opening ? -60 : 40,
            opacity: opening ? 1 : 0
          }}
          transition={{ delay: 0.6, duration: 1 }}
        />

        {/* Wax Seal */}
        <AnimatePresence>
          {!opening && (
            <motion.button
              onClick={handleOpen}
              className="absolute inset-0 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-14 h-14 bg-gold rounded-full shadow-lg" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
