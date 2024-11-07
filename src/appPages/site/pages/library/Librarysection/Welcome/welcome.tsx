import React from "react";
import scss from "./Welcome.module.scss";
const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>Найди и используй любую библиотеку или фреймворк</h1>
          <p>
            Мы поможем вам найти и использовать любую библиотеку или фреймворк,
            которая подходит для вашего проекта.
          </p>
          <div className={scss.search}>
            <input type="text" placeholder="Поиск по библиотекам" />
            <button>Найти</button>
          </div>
          <div className={scss.install}>
            <h2>Установка</h2>
            <p>
              Вы можете установить любую библиотеку или фреймворк с помощью npm
              или yarn.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
