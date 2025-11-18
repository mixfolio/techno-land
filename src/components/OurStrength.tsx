import { useGSAP } from "@gsap/react";
import { ourStrength } from "../contstants";
import { Title } from "./ui/Title";
import gsap from "gsap";
import { useRef } from "react";

const OurStrength = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".list", {
        duration: 10,
        x: "-50vw",
        opacity: 0,
        // repeat: -1,
        // yoyo: true,
        scrollTrigger: {
          trigger: ".list",
          markers: true,
          start: "top 75%",
          end: "bottom 20%",
          // events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse reset",
        },
      });
    },
    { scope: "#our-strength" }
  );
  return (
    <section id="our-strength">
      <div className="wrapper">
        <Title ref={titleRef} title="Наша сила" id="our-strength" />
        <div className="list">
          {ourStrength.map((s) => (
            <div id={s.id}>
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
