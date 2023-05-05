import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {combineReducers, createStore} from "redux";
import {usersReducer} from "./usersReducer";
import {authReducer} from './authReducer';

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    usersReducer,
    authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

