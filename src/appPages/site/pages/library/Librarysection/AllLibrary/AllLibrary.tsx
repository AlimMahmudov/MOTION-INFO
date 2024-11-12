"use client";
import React from "react";
import scss from "./AllLibrary.module.scss";
import Image from "next/image";
import Lap from "@/assets/i.webp";
import { useRouter } from "next/navigation";
const libraryData = [
  { category: "framework" },
  { category: "utility" },
  { category: "styling" },
  { category: "networking" },
  { category: "data visualization" },
  { category: "state management" },
  { category: "forms" },
  { category: "animation" },
  { category: "icons" },
];

const AllLibrary = () => {
  const nav = useRouter();
  return (
    <section className={scss.CategoryCards}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {libraryData.map((item, index) => (
              <div
                key={index}
                className={scss.card}
                onClick={() => nav.push(`library/category/${item.category}`)}
              >
                <Image src={Lap} alt="img" />
                <h1>{item.category}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllLibrary;
