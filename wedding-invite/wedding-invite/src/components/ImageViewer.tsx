import { motion } from "framer-motion";

interface Props {
  src: string;
  onClose: () => void;
}

export default function ImageViewer({ src, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.img
        src={src}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-h-[90vh] max-w-[90vw] rounded-xl"
      />
    </div>
  );
}
