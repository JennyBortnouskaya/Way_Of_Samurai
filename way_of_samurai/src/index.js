import React from 'react';
import './index.css';
import store, {addPost, subscribe, updateNewPostData} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";

let renderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} addPost={addPost} updateNewPostData={updateNewPostData}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);

subscribe(renderEntireTree);