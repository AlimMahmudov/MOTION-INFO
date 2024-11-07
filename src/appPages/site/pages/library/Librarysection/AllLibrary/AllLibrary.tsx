"use client";
import React from "react";
import scss from "./AllLibrary.module.scss";
import { useLibraryStore, PackageManager } from "@/stores/UseCodeStore";

const libraryData = [
  {
    id: 1,
    name: "React",
    description: "React is a JavaScript library...",
    link: "https://reactjs.org/",
  },
  {
    id: 2,
    name: "Vue",
    description: "Vue is a progressive JavaScript...",
    link: "https://vuejs.org/",
  },
  {
    id: 3,
    name: "Angular",
    description: "Angular is a platform...",
    link: "https://angular.io/",
  },
  // Add more libraries as needed
];

const AllLibrary = () => {
  const {
    selectedPackageManager,
    selectedLibrary,
    setPackageManager,
    setLibrary,
  } = useLibraryStore();

  const codeSnippets: { [key: string]: { [key in PackageManager]: string } } = {
    React: {
      npm: "npm install react",
      pnpm: "pnpm add react",
      yarn: "yarn add react",
    },
    Vue: {
      npm: "npm install vue",
      pnpm: "pnpm add vue",
      yarn: "yarn add vue",
    },
    Angular: {
      npm: "npm install @angular/core",
      pnpm: "pnpm add @angular/core",
      yarn: "yarn add @angular/core",
    },
  };

  return (
    <section className={scss.AllLibrary}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.buttons}>
            <select
              onChange={(e) =>
                setPackageManager(e.target.value as PackageManager)
              }
              value={selectedPackageManager}
            >
              <option value="npm">npm</option>
              <option value="pnpm">pnpm</option>
              <option value="yarn">yarn</option>
            </select>
          </div>
          <div className={scss.codeSnippet}>
            <p>Код для копирования:</p>
            <pre>{codeSnippets[selectedLibrary][selectedPackageManager]}</pre>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  codeSnippets[selectedLibrary][selectedPackageManager]
                )
              }
            >
              Копировать
            </button>
          </div>
          <div className={scss.cards}>
            {libraryData.map((item) => (
              <div
                key={item.id}
                className={scss.card}
                onClick={() => setLibrary(item.name)}
              >
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Подробнее
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllLibrary;
