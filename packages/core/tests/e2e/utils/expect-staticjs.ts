import { expect } from "vitest";

import type { StaticJsNumber } from "#types/StaticJsNumber.js";

import {
  isStaticJsArray,
  type StaticJsArray,
  isStaticJsCallable,
  type StaticJsCallable,
  isStaticJsObject,
  type StaticJsObject,
  isStaticJsString,
  type StaticJsString,
  isStaticJsNumber,
} from "../../../src/index.js";

export function expectStaticJsObject(value: unknown): asserts value is StaticJsObject {
  expect(isStaticJsObject(value)).toBe(true);
}

export function expectStaticJsNumber(value: unknown): asserts value is StaticJsNumber {
  expect(isStaticJsNumber(value)).toBe(true);
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
