import { createStore } from "redux";
import modules from "./modules";

const configure = () => {
  // 리덕스 스토어 생성
  const store = createStore(modules);
  return store;
};

export default configure;
