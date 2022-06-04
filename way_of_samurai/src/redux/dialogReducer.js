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

let initialState = {
    dialogs: [
        {
            name: 'Alex',
            message: 'Hello, how are you?'
        },
        {
            name: 'John',
            message: 'Okay, bye'
        },
        {
            name: 'Jane',
            message: 'See you later'
        }
    ],
    newDialogs: ''
};
export const dialogReducer = (store = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let dialogValue = store.newDialogs;
            let storeCopy = {...store};
            storeCopy.dialogs = [...store.dialogs];
            storeCopy.newDialogs = '';
            storeCopy.dialogs.push({name: 'Jenny', message: dialogValue});
            return storeCopy;
        }
        case UPDATE_NEW_DIALOG_DATA: {
            let storeCopy = {...store};
            storeCopy.newDialogs = action.dialogValue;
            return storeCopy;
        }
        default:
            return store;
    }

}