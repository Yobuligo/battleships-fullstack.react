import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IEntityMeta } from "../shared/types/IEntityMeta";
import { Controller } from "./Controller";

export class RepositoryController<T extends IEntity> extends Controller {
  constructor(
    path: string | IEntityMeta,
    private readonly repository: IRepository<T>
  ) {
    super(path);
    this.add();
    this.findAll();
    this.deleteById();
    this.version();
  }

  private add() {
    this.router.post(this.path, async (req, res) => {
      const body: IEntityDetails<T> = req.body;
      const newEntity = await this.repository.add(body);
      res.status(201).send(newEntity);
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

  private findAll() {
    this.router.get(this.path, async (_, res) => {
      const entities = await this.repository.findAll();
      res.status(200).send(entities);
    });
  }

  private version() {
    this.router.get(`${this.path}/version`, async (_, res) => {
      const version = await this.repository.version;
      res.status(200).send(version);
    });
  }
}
