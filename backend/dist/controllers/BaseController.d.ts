export declare abstract class BaseController {
    protected readonly path: string;
    readonly router: import("express-serve-static-core").Router;
    constructor(path: string);
}
