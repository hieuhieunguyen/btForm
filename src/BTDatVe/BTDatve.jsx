import React from "react";
import ChairList from "./ChairList";
import data from "./data.json";
import "./style.scss";
import Result from "./Result";

const BTDatve = () => {
  return (
    <div className="btDatVe text-white">
      <h1 className="text-center">BTDatve</h1>
      <div className="container btDatVe-container">
        <div className="heading">
          <p className="title">
            Fill The Required Details Below And Select Your Seats
          </p>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <label>
                Name
                <span className="text-danger m-1">*</span>
              </label>
              <input type="text" />
            </div>
            <div className="d-flex">
              <label>
                Number of seat
                <span className="text-danger m-1">*</span>
              </label>
              <input type="number" />
            </div>
          </div>
        </div>
        <button className="btn btn-light mt-4 mb-4">Bắt đầu chọn</button>
        <ChairList data={data} />
        <div className="text-center bg-warning p-4 manHinh">
          SCREEN THIS WAY
        </div>

        <div className="d-flex justify-content-center mt-4 mb-4">
          <button className="btn btn-light">Confirm selection</button>
        </div>
        <Result />
      </div>
      <p className="text-center m-5">
        © 2018 Movie Seat Selection . All Rights Reserved | Design by W3layouts
      </p>
    </div>
  );
};

export default BTDatve;
