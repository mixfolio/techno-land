import { ourStrength } from "../contstants";
import { Title } from "./ui/Title";

const OurStrength = () => {
  return (
    <section id="our-strength" className="relative overflow-hidden">
      <div className="wrapper">
        <Title title="Наша сила" />
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
