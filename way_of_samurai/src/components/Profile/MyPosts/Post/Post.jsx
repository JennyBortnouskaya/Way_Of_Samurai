import styles from './Post.module.css';

function Post(props) {
    return (
        <div className={styles.posts}>
            <div className={styles.post}>
               {props.message}
            </div>
        </div>
    )
}

export default Post;