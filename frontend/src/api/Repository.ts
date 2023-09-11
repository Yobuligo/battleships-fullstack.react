import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IEnvelope } from "../shared/types/IEnvelope";
import { RESTApi } from "./RESTApi";
import { IPollRepository } from "./types/IPollRepository";

export class Repository<T extends IEntity>
  extends RESTApi
  implements IPollRepository<T>
{
  private _version = new Date();

  add(entity: IEntityDetails<T>): Promise<T> {
    return this.createPromise(async (resolve) => {
      const response = await this.post(this.url, entity);
      const data = await response.json();
      resolve(data);
    });
  }

  deleteById(id: number): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      const response = await this.delete(`${this.url}/${id}`);
      const data = response.json();
      resolve(data);
    });
  }

  findAll(): Promise<IEnvelope<T[]>> {
    return this.createPromise(async (resolve) => {
      const response = await this.get(this.url);
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
      const response = await this.get(`${this.url}/version`);
      const data = await response.json();
      resolve(data);
    });
  }

  poll(id: number){
    this.startPolling()
  }

  private startPolling(){}
}
