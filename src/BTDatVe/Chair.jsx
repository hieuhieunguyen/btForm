import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Chair = ({ ghe }) => {
  return (
    <button style={{ width: "50px" }} className="btn btn-outline-warning">
      {ghe.soGhe}
    </button>
  );
};

export default Chair;
