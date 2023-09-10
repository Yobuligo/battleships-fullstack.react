import { IPing, PingMeta } from "../shared/api/IPing";
import { RESTApi } from "./RESTApi";

class PingApiDefault extends RESTApi implements IPing {
  constructor() {
    super(PingMeta.path);
  }

  run(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.get(this.url);
        if (response.ok) {
          resolve(true);
        } else {
          resolve(false);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}

export const PingApi = new PingApiDefault();
