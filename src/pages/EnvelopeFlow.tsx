import { useState } from "react";
import EnvelopeIntro from "../components/EnvelopeIntro";
import LandingPage from "../components/LandingPage";

export default function EnvelopeFlow() {
  const [opened, setOpened] = useState(false);

  return !opened ? (
    <EnvelopeIntro onOpen={() => setOpened(true)} />
  ) : (
    <LandingPage showRSVP={true} />
  );
}
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Letter from "../components/Envelope/Letter";

// export default function EnvelopeFlow() {
//   const [opened, setOpened] = useState(false);
//   const navigate = useNavigate();

//   const handleOpen = () => {
//     setOpened(true);

//     setTimeout(() => {
//       navigate("/invite");
//     }, 2500);
//   };

//   return (
//     <div
//       className="relative min-h-screen flex items-center justify-center bg-[#EDE1D1]"
//       onClick={handleOpen}
//     >
//       {/* Envelope graphic here */}

//       {opened && <Letter />}
//     </div>
//   );
// }
