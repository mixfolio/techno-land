import { facts } from "../contstants";
import { Title } from "./ui/Title";

const Facts = () => {
  return (
    <section id="facts">
      <div className="wrapper">
        <Title title="Факты о нас" />
        <div className="list">
          {facts.map((f) => (
            <div key={f.id}>
              <h4>{f.title}</h4>
              <h5>{f.subtitle}</h5>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
