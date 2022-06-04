import React from "react";
import {addNewDialogCreator, updateDialogsCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogReducer.dialogs,
        newDialogs: state.dialogReducer.newDialogs
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        dialogInputChange: (dialogValue) => {
            dispatch(updateDialogsCreator(dialogValue));
        },
        sendDialog: () => {
            dispatch(addNewDialogCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;