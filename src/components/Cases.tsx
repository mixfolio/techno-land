// import { useGSAP } from "@gsap/react";
// import { useMediaQuery } from "react-responsive";
// import gsap from "gsap";

const Cases = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 1024px" });

  // useGSAP(() => {
  //   gsap.to([".left-column", ".right-column"], {
  //     scrollTrigger: {
  //       trigger: "#highlights",
  //       start: isMobile ? "bottom bottom" : "top top",
  //     },
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.5,
  //     duration: 1,
  //     ease: "power1.inOut",
  //   });
  // });

  return (
    <section id="cases">
      <div className="wrapper">
        <h4>Кейсы</h4>
        {/* <h3>Возможно, какой-то текст</h3> */}
        <div className="bento">
          <div className="case">
            <img src="./case-1.jpg" alt="Кейс-1" />
            <div className="text">
              <p>
                Разработана и внедрена система мониторинга для 10 газовых
                водогрейных котельных
              </p>
            </div>
          </div>
          <div className="case">
            <img src="./case-2.jpg" alt="Кейс-2" />
            <div className="text">
              <p>
                Разработано и внедрено решение для мониторинга удалённых
                объектов в рамках единого диспетчерского центра
              </p>
            </div>
          </div>
          <div className="case col-span-2">
            <img
              src="./case-3.jpg"
              alt="Кейс-3"
              style={{ objectPosition: "center center" }}
            />
            <div className="text">
              <p>
                Разработана и внедрена автоматизированная системы
                диспетчеризации и управления для 20 распределительных подстанций
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
