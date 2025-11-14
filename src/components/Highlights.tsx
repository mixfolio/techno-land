import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top top",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="highlights">
      <h2>Кейсы</h2>
      {/* <h3>Возможно, какой-то текст</h3> */}

      <div className="masonry">
        <div className="left-column">
          <div>
            {/* <img src="/laptop.png" alt="Laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p> */}
          </div>
          <div>
            <img src="./water-icon-48.svg" alt="Водоснабжение" />
            <p>
              Разработана и внедрена система мониторинга для 10 газовых
              водогрейных котельных
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="./radiator-icon-48.svg" alt="AI" />
            {/* <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p> */}
            <p>
              Разработана и внедрена система мониторинга для 10 газовых
              водогрейных котельных
            </p>
          </div>
          <div>
            <img src="./clear-icon-48.svg" alt="Водоотведение" />
            {/* <p>
              Up to <span className="green-gradient">14 more hours</span>{" "}
              battery life.{" "}
              <span className="text-dark-100">(Up to 24 hours total.)</span>
            </p> */}
            <p>Водоотведение</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
