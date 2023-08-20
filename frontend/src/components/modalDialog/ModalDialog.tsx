import ReactDOM from "react-dom";
import { error } from "../../utils/error";
import { Card } from "../card/Card";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalBackdrop} onClick={props.onClose}></div>
          <Card className={styles.modalDialog}>
            <div>
              <h3>{props.title}</h3>
            </div>
            <div>{props.children}</div>
          </Card>
        </div>,
        document.getElementById("modalContainer") ??
          error(
            `Error while getting modal container for modal dialog. DOM element 'modalContainer' not available.`
          )
      )}
    </>
  );
};
