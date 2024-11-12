"use client";
import React from "react";
import scss from "./category.module.scss";
import { useParams, useRouter } from "next/navigation";
import { libraryData } from "@/LibraryData";
import { useSearchStore } from "@/stores/useSearchStore";

const CategoryPage = () => {
  const nav = useRouter();
  const { searchQuery, setSearchQuery } = useSearchStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const { category: categoryParam } = useParams();

  const filteredLibraries = libraryData
    .filter((lib) => (categoryParam ? lib.category === categoryParam : true))
    .filter((lib) =>
      lib.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className={scss.CategoryPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.search}>
            <input
              type="text"
              placeholder="Поиск по библиотекам"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button onClick={() => console.log("Search query: ", searchQuery)}>
              Найти
            </button>
          </div>
          <div className={scss.cards}>
            {filteredLibraries.map((item) => (
              <div
                key={item.id}
                className={scss.card}
                onClick={() =>
                  nav.push(`/library/category/${categoryParam}/${item.id}`)
                }
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className={scss.card_btn}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
