import { digitals } from "../contstants";

const Digits = () => {
  return (
    <section id="digits">
      <div className="wrapper">
        <div className="list">
          {digitals.map((i) => (
            <div className="card" key={i.id}>
              <h4>{i.title}</h4>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Digits;
