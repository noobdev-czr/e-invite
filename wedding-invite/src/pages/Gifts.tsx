import { useState } from "react";
import { Qr1, Qr2 } from "../assets/images";
import ImageViewer from "../components/ImageViewer";
import { useNavigate } from "react-router-dom";

export default function Gifts() {
    const [activeImage, setActiveImage] = useState<string | null>(null);
     const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">

      <button
        onClick={() => navigate("/public")}
        className="mb-6 self-start px-5 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-serif text-center">
        With Love & Gratitude
      </h1>

      <div className="bg-[#F3E9DF] p-6 rounded-xl">
        <h2 className="font-semibold">Bank Details</h2>
        <p>Bank: First Abu Dhabi Bank PJSC</p>
        <p>Account Name: JULIE MAY DOYO TUDAS</p>
        <p>Account Number: 1656004001712018</p>
        <p>Savings Account: NBADAEAAXXX</p>
        <p>IBAN: AE250351656004001712018</p>
        <p>SWIFT  CODE: NBADAEAAXXX</p>
        <p>Currency: NBADAEAAXXX</p>
      </div>

      <div className="bg-[#E6D3C2] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">QR CODE for PH ACCOUNTS</h2>
        {/* <div className="w-48 h-48 mx-auto bg-white rounded-xl flex items-center justify-center">
          QR CODE
        </div> */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6">
          <div
              onClick={() => setActiveImage(Qr1)}
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
              style={{ backgroundImage: `url(${Qr1})` }}
            />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center p-6">
          <div
            onClick={() => setActiveImage(Qr2)}
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
            style={{ backgroundImage: `url(${Qr2})` }}
          />
        </div>
      </div>
      
            {activeImage && (
              <ImageViewer
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
    </div>
  );
}