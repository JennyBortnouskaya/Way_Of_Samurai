import React from "react";
import {addNewDialogCreator, updateDialogsCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 // let state = store.getState();
//
//                 //if input value changed, save value in props
//                 let dialogInputChange = (dialogValue) => {
//                     store.dispatch(updateDialogsCreator(dialogValue));
//                 }
//
//                 //for button to send input value
//                 let sendDialog = () => {
//                     store.dispatch(addNewDialogCreator());
//                 }
//                 return <Dialogs dialogInputChange={dialogInputChange} sendDialog={sendDialog}
//                                 dialogs={store.dialogReducer.dialogs}
//                                 newDialogs={store.dialogReducer.newDialogs}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }
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