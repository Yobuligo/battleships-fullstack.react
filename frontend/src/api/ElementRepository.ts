import { ElementMeta, IElement } from "../shared/model/IElement";
import { Repository } from "./Repository";

class ElementRepositoryImpl extends Repository<IElement> {
  constructor() {
    super(ElementMeta.path);
  }
}

export const ElementRepository = new ElementRepositoryImpl();
