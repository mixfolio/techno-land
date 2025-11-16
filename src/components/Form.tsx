import { Title } from "./ui/Title";

const Form = () => {
  return (
    <section id="form">
      <div className="wrapper">
        <Title title="Оставьте заявку на проект" />

        <div className="flex items-center justify-center mt-6 lg:mt-12">
          <img src="./form.svg" alt="Форма" />
        </div>
      </div>
    </section>
  );
};

export default Form;
