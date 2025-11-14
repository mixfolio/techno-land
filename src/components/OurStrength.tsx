import { ourStrength } from "../contstants";

const OurStrength = () => {
  return (
    <section id="our-strength" className="py-20">
      <div className="container mx-auto">
        <h2>Наша сила</h2>
        <div className="grid gap-x-6 lg:grid-cols-4 mt-6">
          {ourStrength.map((s) => (
            <div id={s.id}>
              <h4 className="text-yellow-300">{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStrength;
