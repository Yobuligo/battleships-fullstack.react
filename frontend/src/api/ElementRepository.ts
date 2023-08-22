import { ElementMeta, IElement } from "../shared/model/IElement";
import { Repository } from "./Repository";

class ElementRepositoryDefault extends Repository<IElement> {
  constructor() {
    super(ElementMeta.path);
  }
}

export const ElementRepository = new ElementRepositoryDefault();
