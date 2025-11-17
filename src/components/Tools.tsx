import { tools } from "../contstants";
import { Title } from "./ui/Title";

const Tools = () => {
  return (
    <section id="tools">
      <div className="wrapper">
        <Title title="Технологии и инструменты" />
        <div className="list">
          {tools.map((i) => (
            <div key={i.href} className="card">
              <svg>
                <use href={`./sprite.svg#${i.href}`} />
              </svg>
              <p>{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
