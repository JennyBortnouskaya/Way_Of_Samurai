import Dialog from './Dialog/Dialog';
import styles from "./Dialog/Dialog.module.css";
import {addNewDialogCreator, updateDialogsCreator} from "../../redux/store";
import React from "react";


const Dialogs = (props) => {
    const dialog_item = props.dialogs.map((dialog) => {
        return <Dialog name={dialog.names} message={dialog.message}/>
    })

    let newDialogBody = props.dialogs.newDialogs;

    let onDialogInputChange = (e) => {
        let dialogValue = e.target.value;
        props.dispatch(updateDialogsCreator(dialogValue));
    };

    let onSendDialogClick = () => {
        props.dispatch(addNewDialogCreator());
        props.dialogs.newDialogs = '';
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
                              onChange={onDialogInputChange}></textarea></div>
                <div>
                    <button className={styles.sendDialogBtn} onClick={onSendDialogClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;