import { IHaveCoordinate } from "../../types/IHaveCoordinate";

export interface ITileProps extends IHaveCoordinate {
  color?: string;
  onClick?: () => void;
}
