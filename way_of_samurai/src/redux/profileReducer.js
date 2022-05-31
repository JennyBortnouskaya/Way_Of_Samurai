const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA';

//action creator for new post value
export const addPostActionCreator = () => ({type: ADD_POST});

//action creator for update post value
export const updatePostActionCreator = (postValue) => ({
    type: UPDATE_NEW_POST_DATA,
    postValue: postValue
});

let initialState = {
    posts: [
        {message: 'Hello everyone'},
        {message: 'This is my second post'},
        {message: 'Forever young'},
        {message: 'It is nice day'}
    ],
    newPosts: ''
};

export const profileReducer = (store = initialState, action) => {
//render and get posts value if there is new post
    const addPost = () => {
        let newPost = {
            message: store.newPosts
        }
        store.posts.push(newPost);
    };

//get and store new post value
    const updateNewPostData = (newData) => {
        store.newPosts = newData;
    };

    switch (action.type) {
        case ADD_POST:
            addPost()
            return store;
        case UPDATE_NEW_POST_DATA:
            updateNewPostData(action.postValue)
            return store;
        default:
            return store;
    }
}
