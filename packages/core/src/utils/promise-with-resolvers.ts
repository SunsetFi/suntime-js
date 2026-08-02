export type PromiseResolveFn<T> = (value: T | Promise<T>) => void;
export type PromiseRejectFn = (reason?: unknown) => void;

/**
 * Creates a promise with resolvers.
 * Equivalent to Promise.withResolvers in modern ECMAScript
 *
 * @returns A promise with its resolve and reject methods.
 */
export function promiseWithResolvers<T>(): {
  promise: Promise<T>;
  resolve: PromiseResolveFn<T>;
  reject: PromiseRejectFn;
} {
  let resolve!: PromiseResolveFn<T>;
  let reject!: PromiseRejectFn;

  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}
