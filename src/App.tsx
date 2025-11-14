import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Facts,
  Footer,
  Hero,
  Highlights,
  MainBlock,
  Navbar,
  OurStrength,
  VideoBlock,
} from "./components";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoBlock />
      <Facts />
      <OurStrength />
      <MainBlock />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
