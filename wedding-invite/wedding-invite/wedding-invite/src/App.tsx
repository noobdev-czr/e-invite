import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnvelopeFlow from "./pages/EnvelopeFlow";
import PublicLanding from "./pages/PublicLanding";
import Gifts from "./pages/Gifts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnvelopeFlow />} />
        <Route path="/public" element={<PublicLanding />} />
        <Route path="/gifts" element={<Gifts />} />
      </Routes>
    </BrowserRouter>
  );
}
