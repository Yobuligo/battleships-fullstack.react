import ReactDOM from "react-dom";
import { error } from "../../utils/error";
import { Button } from "../button/Button";
import { Dialog } from "../dialog/Dialog";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalBackdrop}></div>
          <Dialog
            className={styles.modalDialog}
            footer={
              <>
                {props.footer}
                <Button onClick={props.onClose}>Close</Button>
              </>
            }
            title={props.title}
            width={props.width}
          >
            {props.children}
          </Dialog>
        </div>,
        document.getElementById("modalContainer") ??
          error(
            `Error while getting modal container for modal dialog. DOM element 'modalContainer' not available.`
          )
      )}
    </>
  );
};
