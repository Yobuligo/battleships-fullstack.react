import { Router } from "express";
import { IEntityMeta } from "../shared/types/IEntityMeta";

export abstract class Controller {
  readonly router = Router();
  protected readonly path: string;
  
  constructor(path: string | IEntityMeta) {
    if (typeof path === "string") {
      this.path = path;
    } else {
      this.path = path.path;
    }
  }
}
