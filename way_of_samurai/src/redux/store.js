const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA';
const UPDATE_NEW_DIALOG_DATA = 'UPDATE-NEW-DIALOG-DATA';
const SEND_MESSAGE = 'SEND-MESSAGE';

//action creator for new post value
export const addPostActionCreator = () => ({type: ADD_POST});

//action creator for update post value
export const updatePostActionCreator = (postValue) => ({
    type: UPDATE_NEW_POST_DATA,
    postValue: postValue
});

//action creator for new dialog value
export const addNewDialogCreator = () => ({
    type: SEND_MESSAGE,
});

//action creator for update dialog value
export const updateDialogsCreator = (dialogValue) => ({
    type: UPDATE_NEW_DIALOG_DATA,
    dialogValue: dialogValue
});


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

    //render and get posts value if there is new post
    _addPost() {
        let newPost = {
            message: this._state.postData.newPosts
        }
        this._state.postData.posts.push(newPost);
        this.renderEntireTree(this._state);
    },
    //get and store new post value
    _updateNewPostData(newData) {
        this._state.postData.newPosts = newData;
        this.renderEntireTree(this._state);

    },
    //render and get dialogs value if there is new dialog
    _sendMessage(){
        let dialogValue = this._state.dialogsData.newDialogs;
        this._state.dialogsData.newDialogs = ' ';
        this._state.dialogsData.dialogs.push({name: 'Jenny', message: dialogValue});
        this.renderEntireTree(this._state);
    },

    //get and store new dialog value
    _updateNewMessageData(newDialogs){
        this._state.dialogsData.newDialogs = newDialogs;
        this.renderEntireTree(this._state);
    },
    //observer pattern
    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_DATA) {
            this._updateNewPostData(action.postValue)
        } else if (action.type === SEND_MESSAGE){
            this._sendMessage()
        } else if (action.type === UPDATE_NEW_DIALOG_DATA) {
            this._updateNewMessageData(action.dialogValue);
        }
    }
};

window.store = store;

export default store;

