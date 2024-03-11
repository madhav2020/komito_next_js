import React from "react";
import hS from "./heading.module.css";
const Heading = ({ message, title }) => {
  return (
    <div className={hS.heading}>
      <span>_____</span>
      <h4 className="text-red-600 font-semibold">{title}</h4>
      <h2 className="">{message}</h2>
    </div>
  );
};

export default Heading;
