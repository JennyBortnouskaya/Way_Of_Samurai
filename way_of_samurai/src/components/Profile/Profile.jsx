import styles from './Profile.module.css';
import Post from './MyPosts/Post/Post';
import React from "react";
import ProfileInfo from "./ProfileInfo";


function Profile(props) {
    //create a link to interact with posts
    let newPostElement = React.createRef();

    // get all posts
    const posts = props.posts.map((post) => (
        <Post
            message={post.message}
            dispatch={props.dispatch}
            key={post.message}
            onChange={props.onPostChange}
        />
    ));


    return (
        <div>
            <div className={styles.profile}>
            <ProfileInfo profile={props.profile}/>
                <div className="feed">
                    <div className={styles.create_post}>
                        <h3>My posts</h3>
                        <input
                            placeholder="Start typing here"
                            className={styles.newPost}
                            ref={newPostElement}
                            onChange={(e) => props.onPostChange(e.target.value)}
                        />
                        <button className={styles.postBtn}
                                onClick={() => {
                                    props.onAddPost(newPostElement.current.value);
                                    newPostElement.current.value = '';
                                }}
                        >
                            Add post
                        </button>
                    </div>
                    {posts}
                </div>
            </div>
        </div>

    )
}

export default Profile;