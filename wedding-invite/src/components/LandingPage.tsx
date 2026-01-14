import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GalleryCarousel from "./GalleryCarousel";

interface Props {
  showRSVP: boolean;
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 }
  })
};

export default function LandingPage({ showRSVP }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}>
            <div className="h-56 bg-[#F3E9DF] rounded-2xl" />
        </motion.div>
      <div className="text-center">
        <h1 className="text-3xl font-serif text-[#5C5C5C]">
          We Joyfully Invite You
        </h1>
        <p className="text-[#8A7F72]">To celebrate our special day</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {showRSVP && (
          <button className="px-6 py-3 bg-[#C9A24D] text-white rounded-full">
            RSVP
          </button>
        )}
        <Link
          to="/gifts"
          className="px-6 py-3 border border-[#C9A24D] rounded-full text-center"
        >
          Digital Gifts
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-40 bg-[#E6D3C2] rounded-xl" />
        <div>
          <h2 className="font-semibold">Ceremony & Reception</h2>
          <p>Date · Time · Venue</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-24 bg-[#D9E3D4] rounded-xl" />
        ))}
      </div>
      <GalleryCarousel />
    </div>
  );
}
