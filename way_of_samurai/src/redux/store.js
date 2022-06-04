import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";

let store = {

    _state: {
        postData: {
            posts: [
                {message: 'Hello everyone'},
                {message: 'This is my second post'},
                {message: 'Forever young'},
                {message: 'It is nice day'}
            ],
            newPosts: ''
        },

        dialogsData: {
            dialogs: [
                {
                    name: 'Alex',
                    message: 'Hello, how are you?'
                },
                {
                    name: 'John',
                    message: 'Okay, bye'
                },
                {
                    name: 'Jane',
                    message: 'See you later'
                }
            ],
            newDialogs: ''
        },

    },

    getState() {
        return this._state;
    },

    renderEntireTree() {
    },

    //observer pattern
    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    dispatch(action) {
        this. _state.postData = profileReducer(this._state.postData, action)
        this._state.dialogsData = dialogReducer(this._state.dialogsData, action)
        this.renderEntireTree(this._state);
    }
};

window.store = store;

export default store;

