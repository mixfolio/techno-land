import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Progress = () => {
  const preloaderImages = gsap.utils.toArray(".preloader-images .img");

  const tl = gsap.timeline({ delay: 0 });

  useGSAP(() => {
    tl.to(".progress-bar", {
      scaleX: 1,
      duration: 4,
      ease: "power3.inOut",
    })
      .set(".progress-bar", { transformOrigin: "right" })
      .to(".progress-bar", {
        scaleX: 0,
        duration: 1,
        ease: "power#.in",
      });
  }, []);
  return (
    <>
      <div className="preloader">
        <div className="progress-bar" />
        <div className="preloader-images">
          <div className="img">
            <img src="./display-1.jpg" alt="Картинка-1" />
          </div>
          <div className="img">
            <img src="./display-2.jpg" alt="Картинка-2" />
          </div>
          <div className="img">
            <img src="./display-3.jpg" alt="Картинка-3" />
          </div>
          <div className="img">
            <img src="./display-6.jpg" alt="Картинка-4" />
          </div>
        </div>
        <div className="preloader-copy">
          <p>
            Наши решения позволяют в реальном времени контролировать состояние
            оборудования, оптимизировать энергопотребление и повышать надёжность
            систем.
          </p>
        </div>
      </div>

      <div className="preloader-header">
        <a href="#">МосСтройИнформ</a>
      </div>
      <section className="hero">
        <div className="header-row">
          <div className="divider">
            <h2>Агентство</h2>
          </div>
          <div className="divider">
            <h2>Перспективного</h2>
          </div>
          <div className="divider">
            <h2>Развития</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Progress;
