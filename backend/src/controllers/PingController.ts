import { PingMeta } from "../shared/api/IPing";
import { Controller } from "./Controller";

class PingControllerDefault extends Controller {
  constructor() {
    super(PingMeta);
    this.ping();
  }

  private ping() {
    this.router.get(this.path, (_, res) => {
      res.status(200).send(true);
    });
  }
}

export const PingController = new PingControllerDefault();
