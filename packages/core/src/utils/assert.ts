import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";

// Some day we can make this not run in prod for perf?
export function assert(value: boolean | (() => string | null | undefined)): void;
export function assert(value: boolean | (() => boolean), message: string): void;
export function assert(
  value: boolean | (() => boolean | string | null | undefined),
  message?: string,
): void {
  if (typeof value === "function") {
    const result = value();
    if (typeof result === "string") {
      throw new StaticJsEngineError(`Assert failure: ${result}`);
    } else if (result === false) {
      throw new StaticJsEngineError(`Assert failure: ${message}`);
    }
  } else if (!value) {
    throw new StaticJsEngineError(`Assert failure: ${message}`);
  }
}

assert.numeric = function (value: unknown, message: string): asserts value is number {
  if (typeof value !== "number") {
    throw new StaticJsEngineError(`Assert failure: ${message}`);
  }
};

// Doesn't work...
// assert.instance = function <T>(value: unknown, instance: T, message: string): asserts value is T {
//   if (!(value instanceof (instance as any))) {
//     throw new StaticJsEngineError(`Assert failure: ${message}`);
//   }
// };
