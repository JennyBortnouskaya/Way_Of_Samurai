import styles from './Profile.module.css';
import Post from './MyPosts/Post/Post';
import React from "react";


function Profile(props) {
    //create a link to interact with posts
    let newPostElement = React.createRef();

    //if input value changed, save value in props
    let onPostChange = () => {
        let postValue = newPostElement.current.value;
        props.postChange(postValue);
    }
    // get all posts
    const posts = props.posts.map((post) => <Post message={post.message} dispatch={props.dispatch} key={post.id}
                                                  onChange={onPostChange}/>)


    //for button to send input value
    let onAddPost = () => {
        props.addPost();
        newPostElement.current.value = '';
    }

    return (
        <div className={styles.profile}>
            <div className={styles.person}>
                <div className={styles.avatar}>
                    <img
                        src="https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6ba011b74a9f7a5c8322fe75478d9df"
                        alt="avatar"/>
                </div>
                <div className={styles.personal_info}>
                    <div className={styles.name}>Eugienia Bortouskaya</div>
                </div>
            </div>
            <div className={styles.feed}>
                <div className={styles.create_post}>
                    <h3>My posts</h3>
                    <input placeholder="Start typing here" className={styles.newPost} ref={newPostElement}
                           onChange={onPostChange}></input>
                    <button className={styles.postBtn} onClick={onAddPost}>Add post</button>
                </div>
                {posts}
            </div>
        </div>
    )
}

export default Profile;