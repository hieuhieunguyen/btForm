import React from "react";
import Chair from "./Chair";

const ChairList = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-3 chairList">
      {data.map((hangGhe) => {
        return (
          <div className="d-flex mt-3" style={{ gap: "10px" }}>
            <div
              className="text-center"
              style={{ width: "40px", lineHeight: "34px" }}
            >
              {hangGhe.hang}
            </div>
            <div className="d-flex" style={{ gap: "10px" }}>
              {hangGhe.danhSachGhe.map((ghe) => (
                <Chair ghe={ghe} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChairList;
