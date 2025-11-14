import { achievements } from "../contstants";

const Achievements = () => {
  return (
    <section id="facts" className="border  py-20 bg-gray-800">
      <div className="container mx-auto">
        <div className="grid gap-y-6 lg:grid-cols-1 mt-6 w-[840px]">
          {achievements.map((a) => (
            <div key={a.id}>
              <h4 className="text-2xl text-white mb-4">{a.title}</h4>
              {a.list.map((item) => (
                <div key={item.id} className="flex items-center gap-2 mt-2">
                  <div className="w-4 h-4 bg-yellow-300"></div>
                  <p className="text-xl text text-gray-400 " key={item.id}>
                    {item.title}
                  </p>
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
