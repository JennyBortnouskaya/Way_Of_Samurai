import React from "react";
import {addPost, setUsersProfile, updatePost} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";

class ProfileContainer extends React.Component {

    componentDidMount() {
        //get server data
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                    this.props.setUsersProfile(response.data);
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
        debugger
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
export default connect(mapStateToProps, {
    addPost,
    updatePost,
    setUsersProfile
})(ProfileContainer);