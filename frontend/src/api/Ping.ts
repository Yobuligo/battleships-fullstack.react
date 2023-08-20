import { IPing, PingMeta } from "../shared/model/IPing";
import { Request } from "./Request";

class PingDefault extends Request implements IPing {
  constructor() {
    super(PingMeta.path);
  }

  run(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(this.url, {
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        });
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
