import { achievements } from "../contstants";

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="wrapper">
        <div className="list">
          {achievements.map((a) => (
            <div key={a.id}>
              <h4>{a.title}</h4>
              {a.list.map((item) => (
                <div key={item.id} className="ulist">
                  <svg>
                    <use href="./bullet-1.svg" />
                  </svg>
                  <p key={item.id}>{item.title}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
