import type { StaticJsTaskIterator } from "./StaticJsTaskIterator.js";

export interface StaticJsTaskIteratorProxyOptions {
  next?: (inner: StaticJsTaskIterator) => IteratorResult<void, void>;
  throw?: (error: unknown, inner: StaticJsTaskIterator) => IteratorResult<void, void>;
  abort?: () => void;
  done?: () => boolean;
}
export function createTaskIteratorProxy(
  inner: StaticJsTaskIterator,
  { next, throw: throwFn, abort, done }: StaticJsTaskIteratorProxyOptions,
): StaticJsTaskIterator {
  let seenDone = false;
  return {
    get calleeType() {
      return inner.calleeType;
    },
    get async() {
      return inner.async;
    },
    get currentTaskType() {
      return inner.currentTaskType;
    },
    get currentTaskId() {
      return inner.currentTaskId;
    },
    get done() {
      return inner.done || seenDone || (done ? done() : false);
    },
    get aborted() {
      return inner.aborted;
    },
    get operation() {
      return inner.operation;
    },
    get location() {
      return inner.location;
    },
    get stack() {
      return inner.stack;
    },
    get scopes() {
      return inner.scopes;
    },
    next: () => {
      if (seenDone) {
        return { done: true, value: undefined };
      }

      const result = next?.(inner) ?? inner.next();
      if (result.done) {
        seenDone = true;
      }

      return result;
    },
    throw: (error: unknown) => {
      const result = throwFn?.(error, inner) ?? inner.throw(error);
      if (result.done) {
        seenDone = true;
      }
      return result;
    },
    abort: () => {
      seenDone = true;
      abort?.();
      inner.abort();
    },
  };
}
