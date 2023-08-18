import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class Repository<T extends IEntity> implements IRepository<T> {
  private _lastVersion = new Date();

  constructor(private readonly path: string) {}

  add(entity: IEntityDetails<T>): Promise<T> {
    return new Promise(async (resolve) => {
      const response = await fetch(this.url, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(entity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      resolve(data);
    });
  }

  deleteById(id: number): Promise<boolean> {
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.url}/${id}`, {
        mode: "cors",
        method: "DELETE",
      });
      const data = response.json();
      resolve(data);
    });
  }

  findAll(): Promise<T[]> {
    return new Promise(async (resolve) => {
      const response = await fetch(this.url, {
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      resolve(data);
    });
  }

  get isOutdated(): Promise<boolean> {
    return new Promise(async (resolve) => {
      const version = await this.version;
      resolve(version !== this._lastVersion);
    });
  }

  get version(): Promise<Date> {
    return new Promise(async (resolve) => {
      const response = await fetch(`${this.url}/version`, {
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      resolve(data);
    });
  }

  private get url(): string {
    if (!process.env.REACT_APP_BACKEND_HOST) {
      throw new Error(
        `Environment parameter 'REACT_APP_BACKEND_HOST' not found.`
      );
    }
    return `${process.env.REACT_APP_BACKEND_HOST}${this.path}`;
  }
}
