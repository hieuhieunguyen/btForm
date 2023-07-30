import { HANDLE_CHAIR_BOOKINGS, PAY } from "./actionType";

const initialState = {
  chairBookings: [],
  chairBookeds: [],
};

export const btDatVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_CHAIR_BOOKINGS: {
      const data = [...state.chairBookings];
      const index = data.findIndex((value) => value.soGhe === payload.soGhe);
      if (index === -1) {
        data.push(payload);
      } else {
        data.splice(index, 1);
      }
      return { ...state, chairBookings: data };
    }

    case PAY: {
      const data = [...state.chairBookeds, ...state.chairBookings];
      return { ...state, chairBookeds: data, chairBookings: [] };
    }

    default:
      return state;
  }
};

export default btDatVeReducer;
