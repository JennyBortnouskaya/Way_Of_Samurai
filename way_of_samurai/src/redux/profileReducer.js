const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

//action creator for new post value
export const addPost = (newvalue) => ({type: ADD_POST, payload: newvalue});

//action creator for update post value
export const updatePost = (postValue) => ({
    type: UPDATE_NEW_POST_DATA,
    payload: postValue
});

//action creator for users
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, payload: profile});

let initialState = {
    posts: [
        {message: 'Hello everyone'},
        {message: 'This is my second post'},
        {message: 'Forever young'},
        {message: 'It is nice day'}
    ],
    newPostValue: '',
    profile: null
};

export const profileReducer = (store = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Date.now(),
                message: action.payload
            }
            return {
                ...store,
                posts: [...store.posts, newPost],
                newPosts: ''
            };

        case UPDATE_NEW_POST_DATA:

            return {
                ...store,
                newPosts: action.payload
            };
        case SET_USER_PROFILE:

            return {
                ...store,
                profile: action.payload
            };

        default:
            return store;
    }
}
