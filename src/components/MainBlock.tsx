import { block3 } from "../contstants";
import { Title } from "./ui/Title";

const MainBlock = () => {
  return (
    <section id="main-block">
      <div className="wrapper">
        <Title
          title="Автоматизированная система диспетчеризации объектов инженерной
          инфраструктуры"
        />
        <div className="list">
          {block3.map((i) => (
            <div key={i.id}>
              <h4>{i.title}</h4>
              {i.list.map((item) => (
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
                  <p key={item.id}>{item.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBlock;
