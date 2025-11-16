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
                  <svg>
                    <use href="./bullet-1.svg" />
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
