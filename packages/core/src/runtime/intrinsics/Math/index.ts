import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { mathDefaultHooks } from "../../hooks/Math/index.js";

import StaticJsObjectImpl from "../../types/implementation/StaticJsObjectImpl.js";
import StaticJsNumberImpl from "../../types/implementation/StaticJsNumberImpl.js";

import toNumber from "../../algorithms/to-number.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../utils.js";

// Since math is quite predictable in its inputs and outputs, we can do this programatically.

type MathNumericFunctionKeys = {
  [key in keyof typeof Math]: Math[key] extends (...args: number[]) => number
    ? key
    : never;
}[keyof typeof Math];

// Note: This only works because we only want numeric values.
// Doing this for strings is troublesome, as it will capture native intrinsic Symbols.
type MathNumericPrimitiveKeys = {
  [key in keyof typeof Math]: Math[key] extends number ? key : never;
}[keyof typeof Math];

const MathNumericPrimitiveKeys = [
  "E",
  "LN10",
  "LN2",
  "LOG10E",
  "LOG2E",
  "PI",
  "SQRT1_2",
  "SQRT2",
] satisfies MathNumericPrimitiveKeys[];

const MathNumericImplicitFunctionKeys = [
  "abs",
  "ceil",
  "clz32",
  // ES2025.  Do we support this?  We need to make sure our runtime supports it.
  // "f16round",
  "floor",
  "fround",
  "imul",
  "max",
  "min",
  "pow",
  "round",
  "sign",
  "trunc",
] satisfies MathNumericFunctionKeys[];

const MathNumericHookFunctionKeys = [
  "acos",
  "acosh",
  "asin",
  "asinh",
  "atan",
  "atan2",
  "atanh",
  "cbrt",
  "cos",
  "cosh",
  "exp",
  "expm1",
  "hypot",
  "log",
  "log10",
  "log1p",
  "log2",
  "random",
  "sin",
  "sinh",
  "sqrt",
  "tan",
  "tanh",
] satisfies MathNumericFunctionKeys[];

/*
This is a little bit concerning having computed access to a javascript intrinsic from the runtime,
but we filter what keys this can be and still fully expect inputs and outputs to be
in the form of runtime objects.
After all, there's no Arbitrary Code Execution in passing numbers to a math function... right?
*/
function createMathNumericFunctionDeclaration(
  key: MathNumericFunctionKeys,
): IntrinsicPropertyDeclaration {
  const func = Math[key];
  if (typeof func !== "function") {
    throw new StaticJsEngineError(
      `Tried to make Math function from non-function Math.${key}`,
    );
  }

  return {
    key: key,
    *func(realm, _thisObj, ...args) {
      // Building native JS value arrays from sandbox values is a little spicey, but
      // presumably there are no security exploits that can be gained by passing weird numbers to math functions.
      const asNumbers = new Array<number>(args.length);
      for (let i = 0; i < args.length; i++) {
        const arg = args[i] ?? realm.types.undefined;
        const asNumber = yield* toNumber(arg, realm);
        asNumbers[i] = asNumber.value;
      }
      const computed = func.call(null, ...asNumbers);
      const asRuntime = realm.types.number(computed);
      return asRuntime;
    },
  };
}

function createMathNumericPropertyDeclaration(
  key: MathNumericPrimitiveKeys,
): IntrinsicPropertyDeclaration {
  return {
    key: key,
    value(realm) {
      if (typeof Math[key] !== "number") {
        throw new StaticJsEngineError(
          `Tried to make Math numeric property from non-numerical Math.${key}`,
        );
      }

      return new StaticJsNumberImpl(realm, Math[key]);
    },
  };
}

function createMathNumericFunctionHookDeclaration(
  key: (typeof MathNumericHookFunctionKeys)[number],
): IntrinsicPropertyDeclaration {
  // Check that the functions actually exist.
  if (typeof mathDefaultHooks[key] !== "function") {
    throw new StaticJsEngineError(
      `Tried to make Math function hook from ${key}, but it does not exist as a function on the default hooks.`,
    );
  }

  return {
    key,
    *func(realm, _thisObj, ...args) {
      const hook = realm.hooks.math[key];

      const asNumbers = new Array<number>(args.length);
      for (let i = 0; i < args.length; i++) {
        const arg = args[i] ?? realm.types.undefined;
        const asNumber = yield* toNumber(arg, realm);
        asNumbers[i] = asNumber.value;
      }

      // @ts-expect-error - We know the shape of the hook and we ensure the arguments above.
      const computed = hook.apply(undefined, [realm, ...asNumbers]);

      if (typeof computed !== "number") {
        throw new StaticJsEngineError(
          `Math hook ${key} did not return a number, got ${typeof computed}`,
        );
      }

      const asRuntime = realm.types.number(computed);
      return asRuntime;
    },
  };
}
const declarations: IntrinsicPropertyDeclaration[] = [
  ...MathNumericPrimitiveKeys.map(createMathNumericPropertyDeclaration),
  ...MathNumericImplicitFunctionKeys.map(createMathNumericFunctionDeclaration),
  ...MathNumericHookFunctionKeys.map(createMathNumericFunctionHookDeclaration),
];

export function createMathStatic(realm: StaticJsRealm) {
  const Math = new StaticJsObjectImpl(realm);

  applyIntrinsicProperties(realm, Math, declarations);

  return Math;
}
