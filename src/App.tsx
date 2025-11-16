import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Achievements,
  Cases,
  Digits,
  Facts,
  Footer,
  Hero,
  MainBlock,
  Navbar,
  OurStrength,
  Tools,
  // VideoBlock,
} from "./components";
import Form from "./components/Form";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <VideoBlock /> */}
      <Facts />
      <OurStrength />
      <MainBlock />
      <Cases />
      <Digits />
      <Achievements />
      <Tools />
      <Form />
      <Footer />
    </main>
  );
};

export default App;
