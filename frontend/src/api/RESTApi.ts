export abstract class RESTApi {
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
    block: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        await block(resolve, reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  protected delete(url: string) {
    return fetch(url, {
      mode: "cors",
      method: "DELETE",
    });
  }

  protected get(url: string) {
    return fetch(url, {
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
  }

  protected post<T>(url: string, data: T) {
    return fetch(url, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
