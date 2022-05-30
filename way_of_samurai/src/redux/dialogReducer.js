const UPDATE_NEW_DIALOG_DATA = 'UPDATE-NEW-DIALOG-DATA';
const SEND_MESSAGE = 'SEND-MESSAGE';

//action creator for new dialog value
export const addNewDialogCreator = () => ({
    type: SEND_MESSAGE,
});

//action creator for update dialog value
export const updateDialogsCreator = (dialogValue) => ({
    type: UPDATE_NEW_DIALOG_DATA,
    dialogValue: dialogValue
});


export const dialogReducer = (store, action) => {
    //render and get dialogs value if there is new dialog
    const sendMessage = () => {
        let dialogValue = store.newDialogs;
        store.newDialogs = ' ';
        store.dialogs.push({name: 'Jenny', message: dialogValue});
    };

//get and store new dialog value
    const updateNewMessageData = (newDialogs) =>{
        store.newDialogs = newDialogs;
    };

    switch (action.type) {
        case SEND_MESSAGE:
            sendMessage()
            return store;
        case UPDATE_NEW_DIALOG_DATA:
            updateNewMessageData(action.dialogValue);
            return store;
    }
    return store;
}