import { CSSProperties } from "react";
import { style } from "../../utils/style";
import { Card } from "../card/Card";
import styles from "./Dialog.module.css";
import { IDialogProps } from "./IDialogProps";

export const Dialog: React.FC<IDialogProps> = (props) => {
  const styleConfig = {
    "--dialogWidth": `${props.width}rem`,
  } as CSSProperties;

  return (
    <Card className={style(styles.dialog, props.className)} style={styleConfig}>
      <header className={styles.dialogHeader}>
        <h3>{props.title}</h3>
      </header>
      <main>{props.children}</main>
      <footer className={styles.dialogFooter}>{props.footer}</footer>
    </Card>
  );
};
