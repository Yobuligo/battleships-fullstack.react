import { createContext } from "react";
import { IAppContext } from "./IAppContext";

export const AppContext = createContext<IAppContext>(null!);

export const AppNumberElementsX = 10;
export const AppNumberElementsY = 10;
export const AppTileDefaultColor = "rgba(128, 128, 128, 0.425)";
