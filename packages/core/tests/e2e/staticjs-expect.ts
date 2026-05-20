import { expect } from "vitest";

import { isStaticJsObject, StaticJsObject } from "../../src/runtime/types/StaticJsObject.js";
import { isStaticJsString, StaticJsString } from "../../src/runtime/types/StaticJsString.js";

export function expectStaticJsObject(value: unknown): asserts value is StaticJsObject {
  expect(isStaticJsObject(value)).toBe(true);
}

export function expectStaticJsString(value: unknown): asserts value is StaticJsString {
  expect(isStaticJsString(value)).toBe(true);
}
