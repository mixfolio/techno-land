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
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      rx="2"
                      x="5"
                      y="1"
                      width="14"
                      height="14"
                      stroke="gray"
                      strokeWidth="2"
                    />
                    <rect
                      rx="2"
                      x="1"
                      y="5"
                      width="14"
                      height="14"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                    />
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
