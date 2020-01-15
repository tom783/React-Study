import { createStore, applyMiddleware } from "redux";
import modules from "store/modules";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const configure = () => {
  const store = createStore(modules, applyMiddleware(...middleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configure;
