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

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: store.newPosts
            }
            let storeCopy = {...store};
            storeCopy.posts = [...store.posts];
            storeCopy.posts.push(newPost);
            storeCopy.newPosts = '';
            return storeCopy;
        }
        case UPDATE_NEW_POST_DATA: {

            let storeCopy = {...store};
            storeCopy.newPosts = action.postValue;
            return storeCopy;
        }
        default:
            return store;
    }
}
