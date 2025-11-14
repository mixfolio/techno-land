import { block3 } from "../contstants";

const Tools = () => {
  return (
    <section id="facts" className="border py-20">
      <div className="container mx-auto">
        <h2>Технологии и инструменты</h2>
        {/* <div className="grid gap-x-6 lg:grid-cols-2 mt-6">
          {block3.map((i) => (
            <div key={i.id}>
              <h4 className="text-2xl text-cyan-800 mb-2">{i.title}</h4>
              {i.list.map((item) => (
                <div key={item.id} className="flex items-center gap-2 mt-2">
                  <div className="w-4 h-4 bg-primary"></div>
                  <p className="text-xl text-gray-500 " key={item.id}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Tools;
