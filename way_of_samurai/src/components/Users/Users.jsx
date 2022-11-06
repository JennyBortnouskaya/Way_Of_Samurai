import styles from "./Users.module.css";
import React from "react";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className='pageDiv'
                 {...pages.map(p => {
                     debugger;

                     return <span className={props.currentPage === p && styles.selectedPage}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}>{p}</span>;
                 })}
            >
            </div>
            {props.users.map(user =>

                <div key={user.id}>

                    <span>
                        <div><img
                            src={user.photos.small != null ? user.photos.small : "https://i.pinimg.com/564x/73/bb/3c/73bb3c20168614bcafe98d781c8fbef6.jpg"}
                            className={styles.userPhoto}/></div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}> Follow </button>
                            }
                        </div>
                                </span>
                    <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                </span>
                </div>
            )}
        </div>
    )
}
export default Users;