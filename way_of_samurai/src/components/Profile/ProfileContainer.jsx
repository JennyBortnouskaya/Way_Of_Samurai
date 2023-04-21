import React, {useState} from "react";
import {addPost, setUsersProfile, updatePost} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {

        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;

        //get server data
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                    this.props.setUsersProfile(response.data);
                    this.setState({profile: response.data})
                }
            );
    }

    //if input value changed, save value in props
    onPostChange = (value) => {
        this.setState({
            newPostValue: value
        });
    }

    //for button to send input value
    onAddPost = () => {
        this.props.updatePost(this.state.newPostValue);
        this.props.addPost(this.state.newPostValue);
    }

    render() {
        return (
            <Profile
                posts={this.props.posts}
                onPostChange={this.onPostChange}
                onAddPost={this.onAddPost}
                profile={this.props.profile}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    posts: state.profileReducer.posts,
    profile: state.profileReducer.profile

})

let containerComponentWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    addPost,
    updatePost,
    setUsersProfile
})(containerComponentWithUrlData);