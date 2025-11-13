import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Progress } from "./components";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Progress />
    </main>
  );
};

export default App;
