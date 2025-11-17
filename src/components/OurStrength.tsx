import { useGSAP } from "@gsap/react";
import { ourStrength } from "../contstants";
import { Title } from "./ui/Title";
import gsap from "gsap";
import { useRef } from "react";

const svgNS = "http://www.w3.org/2000/svg";

function grid(rows: number, cols: number, svgRef: SVGSVGElement) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("class", "rect");
      rect.setAttribute("fill", "black");
      rect.setAttribute("width", "24");
      rect.setAttribute("height", "24");
      rect.setAttribute("x", (c * 24).toString());
      rect.setAttribute("y", (r * 24).toString());
      // gsap.set(rect, {
      //   attr: {
      //     fill: "cyan",
      //     width: String(49),
      //     height: String(49),
      //     x: (c * 50).toString(),
      //     y: (r * 50).toString(),
      //   },
      // });
      svgRef.appendChild(rect);
    }
  }
}

function weightedRandom(collection: string[], ease: string) {
  return gsap.utils.pipe(
    Math.random, //random number between 0 and 1
    gsap.parseEase(ease), //apply the ease
    gsap.utils.mapRange(0, 1, -0.5, collection.length - 0.5), //map to the index range of the array, stretched by 0.5 each direction because we'll round and want to keep distribution (otherwise linear distribution would be center-weighted slightly)
    gsap.utils.snap(1), //snap to the closest integer
    (i) => collection[i] //return that element from the array
  );
}

// const colors = ["#7a992b", "#45474d", "#dbd962"];
const colors = ["#313131", "#191919", "#000000"];

const OurStrength = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (svgRef.current) {
        grid(25, 80, svgRef.current);
        // console.log(svgRef.current);

        gsap.to(".rect", {
          fill: weightedRandom(colors, "none"),
          rx: 12,
          repeat: -1,
          yoyo: true,
          duration: 10,
        });
      }
    },
    { scope: svgRef }
  );
  return (
    <section id="our-strength" className="relative overflow-hidden">
      <div className="wrapper">
        <svg
          className="top-0 left-0 absolute w-full hidden"
          ref={svgRef}
          id="grid"
          viewBox="0 0 1920 600"
        ></svg>
        <Title title="Наша сила" />
        <div className="list">
          {ourStrength.map((s) => (
            <div key={s.id} id={s.id}>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStrength;
