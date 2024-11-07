"use client";
import React from "react";
import scss from "./AllLibrary.module.scss";
import { useLibraryStore, PackageManager } from "@/stores/UseCodeStore";
import { useSearchStore } from "@/stores/useSearchStore";

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
];

const AllLibrary = () => {
  const { selectedPackageManager, selectedLibrary, setPackageManager, setLibrary } = useLibraryStore();
  const { searchQuery } = useSearchStore(); // Get search query from Zustand

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

  // Filter libraries based on the search query from Zustand store
  const filteredLibraries = libraryData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={scss.AllLibrary}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.codeSnippet}>
            <div className={scss.buttons}>
              <div className={scss.selectMen}>
                <button
                  className={selectedPackageManager === "npm" ? scss.active : ""}
                  onClick={() => setPackageManager("npm")}
                >
                  npm
                </button>
                <button
                  className={selectedPackageManager === "pnpm" ? scss.active : ""}
                  onClick={() => setPackageManager("pnpm")}
                >
                  pnpm
                </button>
                <button
                  className={selectedPackageManager === "yarn" ? scss.active : ""}
                  onClick={() => setPackageManager("yarn")}
                >
                  yarn
                </button>
              </div>
              <div className={scss.copy}>
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
            </div>
            <pre>{codeSnippets[selectedLibrary][selectedPackageManager]}</pre>
          </div>
          <div className={scss.cards}>
            {filteredLibraries.map((item) => (
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
