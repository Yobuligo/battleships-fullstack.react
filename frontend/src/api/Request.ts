export abstract class Request {
  constructor(protected readonly path: string) {}

  protected get url(): string {
    if (!process.env.REACT_APP_BACKEND_HOST) {
      throw new Error(
        `Environment parameter 'REACT_APP_BACKEND_HOST' not found.`
      );
    }
    return `${process.env.REACT_APP_BACKEND_HOST}${this.path}`;
  }

  protected createPromise<T>(
    block: (resolve: (value: T | PromiseLike<T>) => void) => void
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        await block(resolve);
      } catch (error) {
        reject(error);
      }
    });
  }
}