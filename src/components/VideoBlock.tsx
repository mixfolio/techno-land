const VideoBlock = () => {
  return (
    <section>
      <div className="container mx-auto">
        <video
          // style={{ w}}
          // id="schema"

          src="./videos/hud.mp4"
          loop
          muted
          autoPlay
          playsInline
        />
      </div>
    </section>
  );
};

export default VideoBlock;
