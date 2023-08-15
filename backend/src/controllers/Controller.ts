import { Router } from "express";
import { IEntity } from "../shared/types/IEntity";

export class Controller<T extends IEntity> {
  readonly router = Router();

  constructor(private readonly path: string) {
    this.add();
    this.findAll();
    this.delete();
  }

  private add() {
    this.router.post(this.path, (req, res) => {});
  }

  private findAll() {}

  private delete() {}
}
