import React from "react";
import {addNewDialogCreator, updateDialogsCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";


function DialogsContainer(props) {

    let state = props.store.getState();

    //if input value changed, save value in props
    let dialogInputChange = (dialogValue) => {
        props.store.dispatch(updateDialogsCreator(dialogValue));
    }

    //for button to send input value
    let sendDialog = () => {
        props.store.dispatch(addNewDialogCreator());
    }

    return (
        <Dialogs dialogInputChange={dialogInputChange} sendDialog={sendDialog} dialogs={state.dialogReducer.dialogs}
                 newDialogs={state.dialogReducer.newDialogs}/>
    )
}

export default DialogsContainer;