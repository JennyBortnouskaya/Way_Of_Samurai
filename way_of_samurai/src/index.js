import React from 'react';
import './index.css';
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";

let renderEntireTree = (state) => {
    debugger
    ReactDOM.render(
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 updateNewPostData={store.updateNewPostData.bind(store)}/>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);