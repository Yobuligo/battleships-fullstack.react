import { CSSProperties } from "react";
import { AppTileDefaultColor } from "../../context/AppContext";
import { ITileProps } from "./ITileProps";
import styles from "./Tile.module.css";

export const Tile: React.FC<ITileProps> = (props) => {
  const styleExtension = {
    "--backgroundColor": props.color ?? AppTileDefaultColor,
  } as CSSProperties;

  return (
    <div
      className={styles.tile}
      style={styleExtension}
      onClick={props.onClick}
    ></div>
  );
};
