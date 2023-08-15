import { IdGenerator } from "../services/IdGenerator";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IRepository } from "../shared/types/IRepository";

export class Repository<T extends IEntity> implements IRepository<T> {
  private data: T[] = [];

  add(entity: IEntityDetails<T>): Promise<T> {
    return new Promise((resolve) => {
      const newEntity: T = { id: IdGenerator.next(), ...entity } as T;
      this.data.push(newEntity);
      resolve(newEntity);
    });
  }

  deleteById(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      const index = this.data.findIndex((element) => element.id === id);
      if (index !== -1) {
        this.data.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  findAll(): Promise<T[]> {
    return new Promise((resolve) => {
      resolve(this.data);
    });
  }
}
