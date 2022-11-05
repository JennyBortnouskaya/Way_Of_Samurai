import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";


//get store content
let mapStateToProps = (state) =>{
    return{
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
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
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(pageCount) => {
            dispatch(setTotalUsersCountAC(pageCount));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);