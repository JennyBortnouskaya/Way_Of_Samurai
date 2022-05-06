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

        dialogsData: [
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
        ]
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
    //observer pattern
    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-DATA') {
            this._updateNewPostData(action.postValue)
        }

    }


}
window.store = store;

export default store;

