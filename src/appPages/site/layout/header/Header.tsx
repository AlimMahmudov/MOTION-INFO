import React from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <img
            src="https://m.media-amazon.com/images/I/61PfTEf47aL.jpg"
            alt=""
          />
          <div className={scss.a_tegs}>
            <Link href="/">Home</Link>
            <Link href="directory">справочник</Link>
            <Link href="/">тест</Link>
            <Link href="/library">библиотеки</Link>
          </div>
          <button>войти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
