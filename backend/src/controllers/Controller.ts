import { Router } from "express";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IRepository } from "../shared/types/IRepository";

export class Controller<T extends IEntity> {
  readonly router = Router();

  constructor(
    private readonly path: string,
    private readonly repository: IRepository<T>
  ) {
    this.add();
    this.findAll();
    this.deleteById();
  }

  private add() {
    this.router.post(this.path, async (req, res) => {
      const body: IEntityDetails<T> = req.body;
      const newEntity = await this.repository.add(body);
      res.status(201).send(newEntity);
    });
  }

  private findAll() {
    this.router.get(this.path, async (_, res) => {
      const entities = await this.repository.findAll();
      res.status(200).send(entities);
    });
  }

  private deleteById() {
    this.router.delete(`${this.path}/:id`, async (req, res) => {
      const success = await this.repository.deleteById(parseInt(req.params.id));
      if (success) {
        res.status(200).send(true);
      } else {
        res.status(404).send(false);
      }
    });
  }
}
