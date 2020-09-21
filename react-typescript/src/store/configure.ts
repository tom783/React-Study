import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux";

const configure = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

export default configure;
