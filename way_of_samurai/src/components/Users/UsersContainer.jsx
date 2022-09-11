import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";


//get store content
let mapStateToProps = (state) =>{
    return{
        users: state.usersReducer.users,
    }
}

//get actions
let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);