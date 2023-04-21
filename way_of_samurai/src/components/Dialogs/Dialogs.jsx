import Dialog from './Dialog/Dialog';
import styles from "./Dialog/Dialog.module.css";
import React from "react";


const Dialogs = (props) => {
    const dialog_item = props.dialogs.map((dialog) => {
        return <Dialog name={dialog.names} message={dialog.message} key={dialog.message}/>
    })

    let newDialogBody = props.dialogs.newDialogs;

    //create a link to interact with dialogs
    let newDialogElement = React.createRef();

    let onDialogInputChange = () => {
        let dialogValue = newDialogElement.current.value;
        props.dialogInputChange(dialogValue);
    };

    let onSendDialogClick = () => {
        props.sendDialog();
        newDialogElement.current.value = '';
    };


    return (
        <div>
            <div>
                {dialog_item}
            </div>
            <div className={styles.dialogContainer}>
                <div className={styles.dialogInputContainer}>
                    <textarea className={styles.dialogInput}
                              placeholder='Please enter your message'
                              value={newDialogBody}
                              onChange={onDialogInputChange}
                              ref={newDialogElement}/>
                </div>
                <div>
                    <button className={styles.sendDialogBtn} onClick={onSendDialogClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;