import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profileReducer";
import Profile from "./Profile";


function ProfileContainer(props) {

    let state = props.store.getState();

    //if input value changed, save value in props
    let postChange = (postValue) => {
        let action = updatePostActionCreator(postValue);
        props.store.dispatch(action);
    }

    //for button to send input value
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return (
        <Profile postChange={postChange} addPost={addPost} posts={state.profileReducer.posts} newPosts={state.profileReducer.newPosts}/>
    )
}

export default ProfileContainer;