import {renderEntireTree} from "../render";

let store = {

    postData: [
        {message: 'Hello everyone'}, 
        {message: 'This is my second post'}, 
        {message: 'Forever young'}, 
        {message: 'It is nice day'}
      ], 
      
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

export let addPost = (postMessage) => {
    let newPost = {
        message: postMessage
    }
    store.postData.push(newPost);
    renderEntireTree(store);
};

export default store; 

