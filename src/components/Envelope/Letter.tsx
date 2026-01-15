import { motion } from "framer-motion";

export default function Letter() {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        absolute top-8 left-1/2 -translate-x-1/2
        w-[85%] max-w-sm
        bg-[#FBF6F1]
        rounded-xl
        shadow-xl
        px-6 py-10
        text-center
        font-serif
      ">
        
      <h1 className="text-2xl text-[#5C5C5C] mb-3">
        You are Invited
      </h1>
      <div className="w-12 h-[2px] bg-[#C9A24D] mx-auto my-4" />
      <p className="text-sm text-[#8A7F72] italic">
        To celebrate our love and journey together
      </p>
    </motion.div>
  );
}
