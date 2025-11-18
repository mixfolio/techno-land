import { useRef } from "react";
import { Title } from "./ui/Title";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = () => {};

  return (
    <section id="form">
      <div className="wrapper">
        <Title title="Назначить встречу, обсудить, задать вопрос" />

        <div className="flex items-center justify-center mt-6 lg:mt-12">
          <div className="bg-gray-300 p-6 rounded-xl w-[640px]">
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Имя
                </label>
                <div className="mt-1">
                  <input
                    // value={coordX}
                    // onChange={(e) => setCoordX(+e.target.value)}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Компания
                </label>
                <div className="mt-1">
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Компания"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Телефон
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Телефон"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Сообщение
                </label>
                <div className="mt-1">
                  <input
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Сообщение"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Загрузить файл
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="mx-auto size-12 text-gray-300"
                    >
                      <path
                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-transparent font-semibold text-primary focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-secondary hover:text-secondary"
                      >
                        <span>Загрузите файл</span>
                        <input
                          id="file-upload"
                          type="file"
                          name="file-upload"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">или перетащите</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">
                      Можно загрузить один файл размером максимум 15 Мб
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p></p>
              </div>
              <p className="text-sm text-gray-700">
                Я прочитал
                <span className="text-primary">
                  политику обработки персональных данных
                </span>{" "}
                и даю согласие на обработку своих данных
              </p>

              <div className="text-center">
                <button
                  type="submit"
                  className="flex-none rounded-md bg-primary  px-6 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
