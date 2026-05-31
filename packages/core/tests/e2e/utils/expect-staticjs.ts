import { expect } from "vitest";

import { isStaticJsArray, StaticJsArray } from "../../../src/runtime/types/StaticJsArray.js";
import {
  isStaticJsCallable,
  StaticJsCallable,
} from "../../../src/runtime/types/StaticJsCallable.js";
import { isStaticJsObject, StaticJsObject } from "../../../src/runtime/types/StaticJsObject.js";
import { isStaticJsString, StaticJsString } from "../../../src/runtime/types/StaticJsString.js";

export function expectStaticJsObject(value: unknown): asserts value is StaticJsObject {
  expect(isStaticJsObject(value)).toBe(true);
}

export function expectStaticJsString(value: unknown): asserts value is StaticJsString {
  expect(isStaticJsString(value)).toBe(true);
}

export function expectStaticJsArray(value: unknown): asserts value is StaticJsArray {
  expect(isStaticJsArray(value)).toBe(true);
}

export function expectStaticJsCallable(value: unknown): asserts value is StaticJsCallable {
  expect(isStaticJsCallable(value)).toBe(true);
}
