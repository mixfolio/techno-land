import { tools } from "../contstants";

const Tools = () => {
  return (
    <section id="tools">
      <div className="wrapper">
        <div className="title">
          <svg>
            <use href="./circle-bullet.svg" />
          </svg>
          <h2>Технологии и инструменты</h2>
        </div>
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
