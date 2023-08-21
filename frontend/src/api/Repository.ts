import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IEnvelope } from "../shared/types/IEnvelope";
import { Request } from "./Request";
import { IPollRepository } from "./types/IPollRepository";

export class Repository<T extends IEntity>
  extends Request
  implements IPollRepository<T>
{
  private _version = new Date();

  add(entity: IEntityDetails<T>): Promise<T> {
    return this.createPromise(async (resolve) => {
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
    return this.createPromise(async (resolve) => {
      const response = await fetch(`${this.url}/${id}`, {
        mode: "cors",
        method: "DELETE",
      });
      const data = response.json();
      resolve(data);
    });
  }

  findAll(): Promise<IEnvelope<T[]>> {
    return this.createPromise(async (resolve) => {
      const response = await fetch(this.url, {
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      const data: IEnvelope<T[]> = await response.json();
      this._version = data.version;
      resolve(data);
    });
  }

  get isOutdated(): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      const version = await this.version;
      resolve(version !== this._version);
    });
  }

  get version(): Promise<Date> {
    return this.createPromise(async (resolve) => {
      const response = await fetch(`${this.url}/version`, {
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      resolve(data);
    });
  }
}
