import { tools } from "../contstants";

const Tools = () => {
  return (
    <section id="tools" className="border py-20">
      <div className="container mx-auto">
        <h2>Технологии и инструменты</h2>
        <div className="grid gap-6 lg:grid-cols-7 mt-12">
          {tools.map((i) => (
            <div
              key={i.href}
              className="col-center g-2 bg-gray-100 rounded-2xl p-6"
            >
              <svg className="w-16 h-16">
                <use href={`./sprite.svg#${i.href}`} />
              </svg>
              <p className=" text-cyan-800">{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
