import { PingMeta } from "../shared/model/IPing";
import { Controller } from "./Controller";

export class PingController extends Controller {
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
