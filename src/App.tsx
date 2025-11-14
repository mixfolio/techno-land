import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Facts, Footer, Hero, Navbar, OurStrength } from "./components";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Facts />
      <OurStrength />
      <Footer />
    </main>
  );
};

export default App;
