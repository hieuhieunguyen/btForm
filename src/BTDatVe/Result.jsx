import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { payAction } from "../store/btDatVe/action";

const Result = () => {
  const { chairBookings } = useSelector((state) => state.btDatVe);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="d-flex justify-content-center mt-4 mb-4">
        <button
          onClick={() => {
            dispatch(payAction());
          }}
          className="btn btn-light"
        >
          Confirm selection
        </button>
      </div>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Gía ghế</th>
          </tr>
        </thead>
        {chairBookings.map((ghe) => {
          return (
            <tr>
              <td>{ghe.soGhe}</td>
              <td>{ghe.gia}</td>
            </tr>
          );
        })}

        <tr>
          <td>Tổng tiền</td>
          <td>{chairBookings.reduce((total, ghe) => (total += ghe.gia), 0)}</td>
        </tr>
      </table>
    </div>
  );
};

export default Result;
