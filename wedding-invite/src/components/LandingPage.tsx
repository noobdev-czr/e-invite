import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageViewer from "./ImageViewer";
import {
  hero,
  ceremony,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  ceremonyBg,
  footer,
  gifts
} from "../assets/images";
import ImageBox from "./ImageBox";
import { useState } from "react";



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
  const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}>
            <div
                className="h-56 sm:h-72 md:h-96 rounded-2xl bg-center bg-cover"
                style={{ backgroundImage: `url(${hero})` }}
              />
        </motion.div>
      <div className="text-center">
        <h1 className="text-3xl font-serif text-[#5C5C5C] text-3xl tracking-wide"> 
          We request the pleasure of your company aboard a yacht reception.
        </h1>
        <p className="text-[#8A7F72] font-body text-3xl italic">Friday March 06, 2026</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {showRSVP && (
          <a
            href="https://forms.office.com/r/FgdcjeWQpA?origin=lprLink"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3
              bg-[#C9A24D]
              text-white
              rounded-full
              font-medium
              transition
              hover:bg-[#b18d3f]
              hover:scale-105
              shadow-lg
            "
          >
            RSVP
          </a>
        )}
      </div>

<div
  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl overflow-hidden"
  style={{
    backgroundImage: `url(${ceremonyBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100% auto"
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* LEFT: Dress code image */}
  <div className="relative z-10 flex flex-col items-center justify-center p-6">
    <span className="mb-2 text-2xl tracking-widest text-white uppercase">
      Dress Code
    </span>
    <span className="mb-2 text-md tracking-widest text-white uppercase">
      Timeless Elegance:
    </span>
     <p className="relative z-10 text-white text-sm max-w-md">
        Think classic silhouettes, muted tones, and refined sophistication.
     </p>
     <span className="mb-2 text-md tracking-widest text-white uppercase">
       Old Money style: 
    </span>
     <p className="relative z-10 text-white text-sm max-w-md">
        Pearls, Tailored Suits, Chic Dresses, and Understated Luxury.
     </p>
    <span className="mb-2 text-md tracking-widest text-white uppercase">
       Colour Palette: 
    </span>
     <p className="relative z-10 text-white text-sm max-w-md pb-2">
         Champagne Beige, Muted Blush, Soft Sage, Antique Gold
     </p>
    <div
      onClick={() => setActiveImage(ceremony)}
      className="
        h-40 md:h-48
        w-full max-w-xs
        rounded-xl
        bg-cover bg-center
        shadow-lg
        cursor-pointer
        hover:scale-105
        transition
        pt-2
      "
      style={{ backgroundImage: `url(${ceremony})` }}
    />
  </div>

  {/* RIGHT: Info */}
  <div className="relative z-10 text-white space-y-3 p-6">
    <h2 className="font-serif text-2xl">Yacht Reception</h2>

    <p className="text-md">
      📅 March 06, 2026  
      <br />
      ⏰ 4:15 PM  - 8:00 PM
      <br />
      📍 Dubai Marina Yacht Club
    </p>

    <p className="text-md italic">
      Champagne Beige · Muted Blush · Soft Sage
    </p>

    <p className="text-md">
      Kindly arrive 30 minutes early for boarding. 
      For the comfort and safety of all guests, we kindly request a shoes-off policy while on board. 
      Please avoid stilettos and heeled footwear; barefoot or soft, non-marking shoes are recommended
    </p>

    {/* Map */}
    <div className="rounded-lg overflow-hidden border border-white/30">
      <iframe
        title="Ceremony Location"
        className="w-full h-32"
        loading="lazy"
        src="https://www.google.com/maps?q=Dubai%20Marina&output=embed"
      />
    </div>
  </div>
</div>



<div
  className="relative flex flex-col items-center justify-center gap-6 text-center rounded-2xl py-12 px-6"
  style={{
    backgroundImage: `url(${gifts})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }}
>
  {/* Optional overlay */}
  <div className="absolute inset-0 bg-black/30 rounded-2xl" />

  <p className="relative font-serif tracking-wide z-10 text-white text-2xl max-w-md">
    While your presence is more than enough, we graciously accept monetary gifts via bank transfer.
    Physical gifts are also warmly welcomed.
  </p>

  <Link
    to="/gifts"
    className="
      relative z-10
      px-8 py-3
      rounded-full
      bg-[#C9A24D]
      text-white
      font-medium
      transition
      hover:bg-[#b18d3f]
      hover:scale-105
      shadow-lg
    "
  >
    Digital Gifts
  </Link>
</div>



      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map(
          (img, i) => (
            <ImageBox
              key={i}
              src={img}
              onClick={() => setActiveImage(img)}
            />
          )
        )}
      </div>

      <footer
        className="mt-20 h-48 sm:h-64 bg-cover bg-center rounded-t-2xl flex items-center justify-center"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <p className="font-serif tracking-wide text-white text-2xl bg-black/40 px-4 py-2 rounded-full">
          From where it all began to where we celebrate.
        </p>
      </footer>

      {activeImage && (
        <ImageViewer
          src={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
    
  );
  
}
