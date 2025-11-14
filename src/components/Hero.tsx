const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto relative">
        <video
          // style={{ w}}
          // id="schema"

          src="./videos/hud.mp4"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="bg-black inset-0" />
        <div className="absolute bg-black/40 inset-0 w-full p-20">
          <h1>
            Создаем инновационные цифровые решения, открывающие новые
            возможности для роста бизнеса
          </h1>
          <p>
            Автоматизированная система диспетчеризации объектов инженерной
            инфраструктуры
          </p>
          <button>Скачать презентацию</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
