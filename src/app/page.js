// pages/index.js
import OverlappingCards from "../app/components/Overlapping6Cards";
import StepsToWealth from "./components/StepsToWealth";
import StepsToWealth6 from "./components/StepsToWealth6";

export default function Home() {
  return (
    <div>
      <StepsToWealth />
      <StepsToWealth6 />
    </div>
  );
}