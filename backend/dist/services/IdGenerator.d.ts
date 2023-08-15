import { IIdGenerator } from "./IIdGenerator";
declare class IdGeneratorDefault implements IIdGenerator {
    private cursor;
    next(): number;
}
export declare const IdGenerator: IdGeneratorDefault;
export {};
