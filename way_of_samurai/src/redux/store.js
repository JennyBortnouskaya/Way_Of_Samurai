import {renderEntireTree} from "../render";



let store = {

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
}
window.store = store;

//render and get posts value if there is new post
export let addPost = () => {
    let newPost = {
        message: store.postData.newPosts
    }
    store.postData.posts.push(newPost);
    renderEntireTree(store);
};

//get and store new post value
export let updateNewPostData = (newData) => {
    store.postData.newPosts = newData;
    renderEntireTree(store);
};

export default store; 

