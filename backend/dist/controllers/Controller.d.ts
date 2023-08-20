import { IEntityMeta } from "../shared/types/IEntityMeta";
export declare abstract class Controller {
    readonly router: import("express-serve-static-core").Router;
    protected readonly path: string;
    constructor(path: string | IEntityMeta);
}
