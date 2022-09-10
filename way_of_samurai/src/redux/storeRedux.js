import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {combineReducers, createStore} from "redux";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

