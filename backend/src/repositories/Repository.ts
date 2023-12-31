import { IdGenerator } from "../services/IdGenerator";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IEnvelope } from "../shared/types/IEnvelope";
import { print } from "../shared/utils/print";

export class Repository<T extends IEntity> implements IRepository<T> {
  protected _version = new Date();
  protected data: T[] = [];

  add(entity: IEntityDetails<T>): Promise<T> {
    return new Promise((resolve) => {
      print(entity, "Entity was added");
      const newEntity: T = { id: IdGenerator.next(), ...entity } as T;
      this.data.push(newEntity);
      this.updateVersion();
      resolve(newEntity);
    });
  }

  deleteById(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      const index = this.data.findIndex((element) => element.id === id);
      if (index !== -1) {
        this.data.splice(index, 1);
        this.updateVersion();
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  findAll(): Promise<IEnvelope<T[]>> {
    return new Promise((resolve) => {
      resolve({ version: this._version, data: this.data });
    });
  }

  get version(): Promise<Date> {
    return new Promise((resolve) => {
      resolve(this._version);
    });
  }

  private updateVersion() {
    this._version = new Date();
  }
}
