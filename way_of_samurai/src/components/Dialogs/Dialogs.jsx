import Dialog from './Dialog/Dialog';
import styles from './Dialogs.module.css';


const Dialogs = (props) => {
    const dialog_item = props.dialogs.map((dialog) => {
        return <Dialog name={dialog.name} message={dialog.message} />
    })
    return (
        <div>
            {dialog_item}
        </div>
    )
}

export default Dialogs;