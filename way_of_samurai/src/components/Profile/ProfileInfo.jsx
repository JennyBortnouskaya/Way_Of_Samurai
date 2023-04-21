import styles from "./Profile.module.css";
import React from "react";
import Loading from "../common/loading/Loding";

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Loading/>
    }
    return(
        <div>
            <div className={styles.person}>
                <div className={styles.avatar}>
                    <img
                        src={"https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6ba011b74a9f7a5c8322fe75478d9df" ||
                        props.profile.photos.large}
                        alt="avatar"/>
                </div>
                <div className={styles.personal_info}>
                    <div className={styles.name}>Eugienia Bortouskaya</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;