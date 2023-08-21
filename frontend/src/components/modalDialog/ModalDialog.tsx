import { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { error } from "../../utils/error";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  const style = {
    "--modalDialogWidth": `${props.width}rem`,
  } as CSSProperties;

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalBackdrop}></div>
          <Card className={styles.modalDialog} style={style}>
            <section className={styles.modalDialogHeader}>
              <h3>{props.title}</h3>
            </section>
            <section>{props.children}</section>
            <section className={styles.modalDialogFooter}>
              <Button onClick={props.onClose}>Close</Button>
            </section>
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
