import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Achievements,
  Facts,
  Footer,
  Hero,
  Highlights,
  MainBlock,
  Navbar,
  OurStrength,
  Tools,
  VideoBlock,
} from "./components";
import Form from "./components/Form";

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
      <Achievements />
      <Tools />
      <Form />
      <Footer />
    </main>
  );
};

export default App;
