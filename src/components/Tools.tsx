import { tools } from "../contstants";

const Tools = () => {
  return (
    <section id="tools">
      <div className="wrapper">
        <h2>Технологии и инструменты</h2>
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
