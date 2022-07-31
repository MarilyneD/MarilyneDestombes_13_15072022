import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counterSlice";
import signReducer from "../feature/signSlice";

export default configureStore({
  reducer: { counter: counterReducer, sign: signReducer },
});
