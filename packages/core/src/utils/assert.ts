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

assert.isNumeric = function (value: unknown, message: string): asserts value is number {
  if (typeof value !== "number") {
    throw new StaticJsEngineError(`Assert failure: ${message}`);
  }
};

assert.isString = function (value: unknown, message: string): asserts value is string {
  if (typeof value !== "string") {
    throw new StaticJsEngineError(`Assert failure: ${message}`);
  }
};

assert.notNull = function <T>(value: T | null | undefined, message: string): asserts value is T {
  if (value === null || value === undefined) {
    throw new StaticJsEngineError(`Assert failure: ${message}`);
  }
};

// Inferring T from `prototype` rather than a construct signature, so this also
// works for abstract classes and classes with protected/private constructors.
assert.instance = function <T>(
  value: unknown,
  ctor: Function & { prototype: T },
  message: string,
): asserts value is T {
  if (!(value instanceof ctor)) {
    throw new StaticJsEngineError(`Assert failure: ${message}`);
  }
};
