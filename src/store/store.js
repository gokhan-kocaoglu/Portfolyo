import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import dataReducers from "./reducers/dataReducers";

export const store=createStore(dataReducers,applyMiddleware(thunk));