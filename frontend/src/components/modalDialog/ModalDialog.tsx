import ReactDOM from "react-dom";
import { error } from "../../utils/error";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalBackdrop}></div>
          <div className={styles.modalDialog}>{props.children}</div>
        </div>,
        document.getElementById("modalContainer") ??
          error(
            `Error while getting modal container for modal dialog. DOM element 'modalContainer' not available.`
          )
      )}
    </>
  );
};
