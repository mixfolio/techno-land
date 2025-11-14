import { facts } from "../contstants";

const Facts = () => {
  return (
    <section id="facts" className="border py-20">
      <div className="container mx-auto">
        <h2>Факты о нас</h2>
        <div className="grid gap-x-6 lg:grid-cols-3 mt-6">
          {facts.map((f) => (
            <div key={f.id}>
              <h4 className="text-cyan-800 mb-2">{f.title}</h4>
              <h5 className="text-2xl mb-2 font-semibold">{f.subtitle}</h5>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
