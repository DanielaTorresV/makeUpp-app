import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/User.reducer";
import { boxReducer } from "./reducers/Box.reducer";

const rootReducer = combineReducers({ userReducer, boxReducer });

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
