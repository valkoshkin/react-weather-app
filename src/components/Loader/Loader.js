import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
