import React from "react";
import scss from "./Directory.module.scss";

const Directory = () => {
  return (
    <div id={scss.Directory}>
      <div className="container">
        <div className={scss.directory}>
          <h1>Directory</h1>
        </div>
      </div>
    </div>
  );
};

export default Directory;
