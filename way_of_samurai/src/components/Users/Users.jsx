import React from "react";
import styles from "./Users.module.css";
import axios from "axios";


//user page layout
const Users = (props) => {

    //get server data
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(
                response.data.items
            ));
    }

    return (
        <div>
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