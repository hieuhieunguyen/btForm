import { HANDLE_CHAIR_BOOKINGS, PAY } from "./actionType";

export const chairBookingsAction = (payload) => {
  return {
    type: HANDLE_CHAIR_BOOKINGS,
    payload,
  };
};

export const payAction = (payload) => {
  return {
    type: PAY,
    payload,
  };
};
