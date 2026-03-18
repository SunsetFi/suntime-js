import type { StaticJsTaskIterator } from "./StaticJsTaskIterator.js";

/**
 * A function to run a task in the realm.
 *
 * The implementation should call .next() on the generator until it is done.
 * This may be done synchronously or asynchronously.
 */
export type StaticJsTaskRunner = (task: StaticJsTaskIterator) => void;
