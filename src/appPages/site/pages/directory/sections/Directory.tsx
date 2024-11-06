"use client";
import React, { useState } from "react";
import scss from "./Directory.module.scss";
import { useRouter } from "next/navigation";

const Directory = () => {
  const [currentData, setCurrentData] = useState("HTML");

  const js = [
    {
      text: "тип данных",
      number: "number",
      string: "string",
      boolean: "boolean",
      bigint: "bigint",
      null: "null",
      undefined: "undefined",
      symbol: "symbol",
      object: "object",
    },
  ];

  const html = [
    {
      h1: "h1 заголовок",
      h2: "h2 заголовок",
      h3: "h3 заголовок",
      h4: "h4 заголовок",
      h5: "h5 заголовок",
      h6: "h6 заголовок",
    },
  ];

  const css = [
    {
      red: "red",
      blue: "blue",
      yellow: "yellow",
    },
  ];

  const router = useRouter();

  const renderData = () => {
    switch (currentData) {
      case "HTML":
        return html;
      case "CSS":
        return css;
      case "JavaScript":
        return js;
      default:
        return [];
    }
  };

  return (
    <div id={scss.Directory}>
      <div className="container">
        <div className={scss.directory}>
          <div className={scss.buttons}>
            <button onClick={() => setCurrentData("HTML")}>HTML</button>
            <button onClick={() => setCurrentData("CSS")}>CSS/SCSS</button>
            <button onClick={() => setCurrentData("JavaScript")}>
              JavaScript
            </button>
            <button onClick={() => setCurrentData("TypeScript")}>
              TypeScript
            </button>
            <button onClick={() => setCurrentData("React")}>React</button>
            <button onClick={() => setCurrentData("REDUX")}>REDUX</button>
            <button onClick={() => setCurrentData("Redux-Toolkit")}>
              Redux-Toolkit
            </button>
            <button onClick={() => setCurrentData("React-Vite")}>
              React-Vite
            </button>
            <button onClick={() => setCurrentData("Next JS")}>Next JS</button>
          </div>
          <div className={scss.directory_text}>
            <div className={scss.text}>
              <h1>
                Справочник по <br /> Front-end разработке
              </h1>
              <p>
                В этом справочнике есть краткое инструкция, правила и способы
                использование разных методов в Front-end разработке
              </p>
            </div>
          </div>
          <div className="">
            {renderData().map((el, index) => (
              <div key={index} className={scss.card}>
                {Object.values(el).map((value, idx) => (
                  <h1 key={idx}>{value}</h1>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
