import styles from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div>
            <div className={styles.messages}>
                <div className={styles.user}>
                    <div className={styles.user_avatar}>
                        <img
                            src="https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6ba011b74a9f7a5c8322fe75478d9df"
                            alt=""/>
                    </div>
                </div>
                <div className={styles.dialog}>
                    <div className={styles.dialog_name}>{props.name} </div>
                    <div className={styles.message}>
                        {props.message}.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog;
