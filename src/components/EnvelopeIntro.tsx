// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface Props {
//   onOpen: () => void;
// }

// export default function EnvelopeIntro({ onOpen }: Props) {
//   const [opening, setOpening] = useState(false);
//   const letterVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visibleMobile: { opacity: 1, y: 0 },
//     visibleDesktop: { opacity: 1, y: -60 },
//   };

//   const handleOpen = () => {
//     if (opening) return;

//     setOpening(true);

//     const audio = new Audio("/src/assets/sounds/open.mp3");
//     audio.play().catch(() => {});

//     setTimeout(() => {
//       onOpen();
//     }, 2200);
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-champagne">
//       <div className="relative w-80 h-56 perspective-1000">
//         {/* Envelope Body */}
//         <div className="absolute inset-0 bg-blush rounded-2xl shadow-xl" />

//         {/* Flap */}
//         <motion.div
//           className="absolute top-0 left-0 w-full h-1/2 bg-gold rounded-t-2xl origin-top"
//           initial={{ rotateX: 0 }}
//           animate={{ rotateX: opening ? -140 : 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           style={{ transformStyle: "preserve-3d" }}
//         />

//         {/* Letter */}
//         {/*   <motion.div
//           className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 h-40 bg-white rounded-lg shadow-md flex items-center justify-center"
//           initial={{ y: 40, opacity: 0 }}
//           animate={{
//             y: opening ? -60 : 40,
//             opacity: opening ? 1 : 0
//           }}
//           transition={{ delay: 0.6, duration: 1 }}
//         >*/}
//         <motion.div
//           className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 h-40 bg-white rounded-lg shadow-md flex items-center justify-center"
//           initial={{ y: 40, opacity: 0 }}
//           animate={{
//             opacity: opening ? 1 : 0,
//             y: opening ? 0 : 40,
//           }}
//           transition={{ delay: 0.6, duration: 1 }}
//         >
//           {/* Letter Text */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: opening ? 1 : 0 }}
//             transition={{ delay: 1.1 }}
//             className="text-center px-4"
//           >
//             <h1 className="text-2xl text-[#5C5C5C] mb-3">You are Invited</h1>
//             <div className="w-12 h-[2px] bg-[#C9A24D] mx-auto my-4" />
//             <p className="text-sm text-[#8A7F72] italic">
//               To celebrate our love and journey together
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Wax Seal */}
//         <AnimatePresence>
//           {!opening && (
//             <motion.button
//               onClick={handleOpen}
//               className="absolute inset-0 flex items-center justify-center"
//               whileTap={{ scale: 0.9 }}
//               exit={{ opacity: 0 }}
//             >
//               <div className="w-14 h-14 bg-gold rounded-full shadow-lg" />
//             </motion.button>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
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
          className="
    absolute
    left-1/2
    -translate-x-1/2

    /* Mobile & tablet: vertically centered */
    top-1/2
    -translate-y-1/2

    /* Desktop: position near bottom */
    lg:top-auto
    lg:translate-y-0
    lg:bottom-6

    w-64 h-40
    bg-white
    rounded-lg
    shadow-md
    flex items-center justify-center
  "
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: opening ? 1 : 0,
            y: opening ? (window.innerWidth >= 1024 ? -60 : 0) : 40,
          }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* Letter Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: opening ? 1 : 0 }}
            transition={{ delay: 1.1 }}
            className="text-center px-4"
          >
            <h1 className="text-2xl text-[#5C5C5C] mb-3">You are Invited</h1>

            <div className="w-12 h-[2px] bg-[#C9A24D] mx-auto my-4" />

            <p className="text-sm text-[#8A7F72] italic">
              To celebrate our love and journey together
            </p>
          </motion.div>
        </motion.div>

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
