import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productEdit: undefined,
};

const btFormSlice = createSlice({
  name: "btForm",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productList.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.productList = state.productList.filter(
        (prd) => prd.ma != action.payload
      );
    },

    editProduct: (state, action) => {
      state.productEdit = action.payload;
    },

    updateProduct: (state, action) => {
      // action.payload là 1 obj product edit
      state.productList = state.productList.map((prd) => {
        if (prd.ma === action.payload.ma) {
          return action.payload;
        }
        return prd;
      });

      // sau khi update thành công
      state.productEdit = undefined;
    },
  },
});

export const { actions: btFormAction, reducer: btFormReducer } = btFormSlice;
