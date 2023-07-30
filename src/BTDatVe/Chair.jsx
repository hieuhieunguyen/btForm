import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chairBookingsAction } from "../store/btDatVe/action";
import cn from "classnames";
import "./style.scss";

const Chair = ({ ghe }) => {
  const dispatch = useDispatch();
  const { chairBookings, chairBookeds } = useSelector((state) => state.btDatVe);
  return (
    <button
      onClick={() => {
        dispatch(chairBookingsAction(ghe));
      }}
      style={{ width: "50px" }}
      className={cn("btn btn-outline-warning Chair", {
        booking: chairBookings.find((e) => e.soGhe === ghe.soGhe),
        booked: chairBookeds.find((e) => e.soGhe === ghe.soGhe),
      })}
    >
      {ghe.soGhe}
    </button>
  );
};

export default Chair;
