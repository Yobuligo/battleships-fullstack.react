import { IIdGenerator } from "./IIdGenerator";

class IdGeneratorDefault implements IIdGenerator {
  private cursor = 0;

  next(): number {
    this.cursor++;
    return this.cursor;
  }
}

export const IdGenerator = new IdGeneratorDefault();
