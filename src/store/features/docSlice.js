import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  docs: [],
};

const docSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {
    addDoc: (state, action) => {
      const newDocs = Array.isArray(action?.payload)
        ? action?.payload
        : [action?.payload];

      state.docs.push(...newDocs);
    },
    removeDoc: (state, action) => {
      const index = action?.payload;
      if (index >= 0 && index < state.docs.length) {
        state.docs.splice(index, 1);
      }
    },
    removeAllDocs: (state, action) => {
      state.docs = [];
    },
  },
});

export const { addDoc, removeDoc, removeAllDocs } = docSlice.actions;
export default docSlice.reducer;
