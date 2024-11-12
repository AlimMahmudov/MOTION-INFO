"use client";
import React from "react";
import scss from "./Welcome.module.scss";
import { useSearchStore } from "@/stores/useSearchStore";

const Welcome = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Search query: ", searchQuery);
  };

  return (
    <section id="welcome" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>Найди и используй любую библиотеку или фреймворк</h1>
          <p>
            Мы поможем вам найти и использовать любую библиотеку или фреймворк,
            которая подходит для вашего проекта.
          </p>
          
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
