import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "sign",
  initialState: { response: "", profile :"" },
  reducers: {
    addSignInResponse: (state, action) => {
      state.response = action.payload;
    },

    addProfile: (state, action) => {
      state.profile = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { addSignInResponse,addProfile } = signSlice.actions;

export default signSlice.reducer;
