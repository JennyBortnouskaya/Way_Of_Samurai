import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    profileReducer,
    dialogReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

