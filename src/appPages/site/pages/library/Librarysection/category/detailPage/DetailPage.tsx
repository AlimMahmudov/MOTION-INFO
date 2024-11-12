"use client";
import React from "react";
import { useParams } from "next/navigation";
import { libraryData } from "@/LibraryData";
import scss from "./DetailPage.module.scss";
import { useLibraryStore, PackageManager } from "@/stores/UseCodeStore";

const LibraryDetailPage = () => {
  const { id } = useParams();
  const libraryId = Number(id);
  const library = libraryData.find((lib) => lib.id === libraryId);
  const {
    selectedPackageManager,
    selectedLibrary,
    setPackageManager,
    setLibrary,
  } = useLibraryStore();
  if (!library) {
    return <p>Library not found.</p>;
  }
  const codeSnippets: { [key: string]: { [key in PackageManager]: string } } = {
    React: {
      npm: "npm install react",
      pnpm: "pnpm add react",
      yarn: "yarn add react",
    },
    Vue: { npm: "npm install vue", pnpm: "pnpm add vue", yarn: "yarn add vue" },
    Angular: {
      npm: "npm install @angular/core",
      pnpm: "pnpm add @angular/core",
      yarn: "yarn add @angular/core",
    },
    Lodash: {
      npm: "npm install lodash",
      pnpm: "pnpm add lodash",
      yarn: "yarn add lodash",
    },
    "Tailwind CSS": {
      npm: "npm install tailwindcss",
      pnpm: "pnpm add tailwindcss",
      yarn: "yarn add tailwindcss",
    },
    Axios: {
      npm: "npm install axios",
      pnpm: "pnpm add axios",
      yarn: "yarn add axios",
    },
    "D3.js": {
      npm: "npm install d3",
      pnpm: "pnpm add d3",
      yarn: "yarn add d3",
    },
    "Moment.js": {
      npm: "npm install moment",
      pnpm: "pnpm add moment",
      yarn: "yarn add moment",
    },
    Sass: {
      npm: "npm install sass",
      pnpm: "pnpm add sass",
      yarn: "yarn add sass",
    },
    Redux: {
      npm: "npm install redux",
      pnpm: "pnpm add redux",
      yarn: "yarn add redux",
    },
    "RTK Query": {
      npm: "npm install @reduxjs/toolkit",
      pnpm: "pnpm add @reduxjs/toolkit",
      yarn: "yarn add @reduxjs/toolkit",
    },
    Zustand: {
      npm: "npm install zustand",
      pnpm: "pnpm add zustand",
      yarn: "yarn add zustand",
    },
    "Redux Toolkit": {
      npm: "npm install @reduxjs/toolkit",
      pnpm: "pnpm add @reduxjs/toolkit",
      yarn: "yarn add @reduxjs/toolkit",
    },
    createAsyncThunk: {
      npm: "npm install @reduxjs/toolkit",
      pnpm: "pnpm add @reduxjs/toolkit",
      yarn: "yarn add @reduxjs/toolkit",
    },
    "React Hook Form": {
      npm: "npm install react-hook-form",
      pnpm: "pnpm add react-hook-form",
      yarn: "yarn add react-hook-form",
    },
    AOS: { npm: "npm install aos", pnpm: "pnpm add aos", yarn: "yarn add aos" },
    "React Icons": {
      npm: "npm install react-icons",
      pnpm: "pnpm add react-icons",
      yarn: "yarn add react-icons",
    },
    "Next.js": {
      npm: "npx create-next-app",
      pnpm: "pnpx create-next-app",
      yarn: "yarn create next-app",
    },
  };
  return (
    <section className={scss.detailPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.codeSnippet}>
            <div className={scss.buttons}>
              <div className={scss.selectMen}>
                {["npm", "pnpm", "yarn"].map((manager) => (
                  <button
                    key={manager}
                    className={
                      selectedPackageManager === manager ? scss.active : ""
                    }
                    onClick={() => setPackageManager(manager as PackageManager)}
                  >
                    {manager}
                  </button>
                ))}
              </div>
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
            <pre>{codeSnippets[selectedLibrary][selectedPackageManager]}</pre>
          </div>
          <div className={scss.card} onClick={() => setLibrary(library.name)}>
            <h1>{library.name}</h1>
            <p>{library.description}</p>
            <a href={library.link} target="_blank" rel="noopener noreferrer">
              Официальный сайт
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryDetailPage;
