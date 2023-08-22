import { IPing, PingMeta } from "../shared/api/IPing";
import { Request } from "./Request";

class PingDefault extends Request implements IPing {
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

export const Ping = new PingDefault();
