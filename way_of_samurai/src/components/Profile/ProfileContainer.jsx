import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{

    return{
        posts: state.profileReducer.posts,
        newPosts: state.profileReducer.newPosts
    }
}
export let mapDispatchToProps = (dispatch) =>{

    return{
        postChange: (postValue) => {
            dispatch(updatePostActionCreator(postValue));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;