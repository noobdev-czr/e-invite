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