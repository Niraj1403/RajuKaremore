import React from "react";
import { BsCheckLg } from "react-icons/bs";

export const StandItem = ({ title, details }) => {
  return (
    <>
      {" "}
      <div className="title-stand">
        <h2 className="tick">
          <BsCheckLg /> &nbsp;
        </h2>
        <h2>{title}</h2>
      </div>
      <p>{details}</p>
    </>
  );
};
