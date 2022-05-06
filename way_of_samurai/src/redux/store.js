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

    getState(){
        debugger
        return this._state;
    },

    renderEntireTree() {
    },

    //render and get posts value if there is new post
    addPost() {
        debugger;
        let newPost = {
            message: this._state.postData.newPosts
        }
        this._state.postData.posts.push(newPost);
        this.renderEntireTree(this._state);
    },
    //get and store new post value
    updateNewPostData(newData) {
        this._state.postData.newPosts = newData;
        this.renderEntireTree(this._state);

    },
    //observer pattern
    subscribe(observer) {
        this.renderEntireTree = observer;
    }


}
window.store = store;

export default store;

