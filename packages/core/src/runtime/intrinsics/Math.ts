import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { toNumber } from "../algorithms/to-number.js";
import { mathDefaultHooks } from "../hooks/Math/index.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../types/implementation/objects/StaticJsPlainObjectImpl.js";
import { StaticJsNumberImpl } from "../types/implementation/primitives/StaticJsNumberImpl.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "./apply-intrinsic-properties.js";
import { type IntrinsicsRecord } from "./intrinsics.js";

// Since math is quite predictable in its inputs and outputs, we can do this programatically.

type MathNumericFunctionKeys = {
  [key in keyof typeof Math]: Math[key] extends (...args: number[]) => number ? key : never;
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
  "pow",
  "round",
  "sign",
  "trunc",
] satisfies MathNumericFunctionKeys[];

const MathNumericVariadicImplicitFunctionKeys = ["max", "min"] satisfies MathNumericFunctionKeys[];

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

const MathNumericVariadicHookFunctionKeys = ["hypot"] satisfies MathNumericFunctionKeys[];

type MathNumericHook = (this: undefined, realm: StaticJsRealm, ...values: number[]) => number;

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
    throw new StaticJsEngineError(`Tried to make Math function from non-function Math.${key}`);
  }

  const arity = func.length;
  return {
    key: key,
    length: arity,
    *func(realm, _thisObj, ...args) {
      // Building native JS value arrays from sandbox values is a little spicey, but
      // presumably there are no security exploits that can be gained by passing weird numbers to math functions.
      const asNumbers: number[] = [];
      for (let i = 0; i < arity; i++) {
        if (i < args.length) {
          asNumbers[i] = (yield* toNumber(args[i]!)).value;
        } else {
          asNumbers[i] = NaN;
        }
      }

      const computed = func.call(undefined, ...asNumbers);

      return realm.types.number(computed);
    },
  };
}

function createMathNumericVariadicFunctionDeclaration(
  key: MathNumericFunctionKeys,
): IntrinsicPropertyDeclaration {
  const func = Math[key];
  if (typeof func !== "function") {
    throw new StaticJsEngineError(`Tried to make Math function from non-function Math.${key}`);
  }

  return {
    key,
    length: func.length,
    *func(realm, _thisObj, ...args) {
      const asNumbers: number[] = [];
      for (let i = 0; i < args.length; i++) {
        asNumbers[i] = (yield* toNumber(args[i]!)).value;
      }

      return realm.types.number(func.call(undefined, ...asNumbers));
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

  const arity = (Math[key] as (...args: number[]) => number).length;
  return {
    key,
    length: arity,
    *func(realm, _thisObj, ...args) {
      const hook = realm.hooks.math[key] as MathNumericHook;

      const asNumbers: number[] = [];
      for (let i = 0; i < arity; i++) {
        if (i < args.length) {
          asNumbers[i] = (yield* toNumber(args[i]!)).value;
        } else {
          asNumbers[i] = NaN;
        }
      }

      const computed = hook.apply(undefined, [realm, ...asNumbers]);

      if (typeof computed !== "number") {
        throw new StaticJsEngineError(
          `Math hook ${key} did not return a number, got ${typeof computed}`,
        );
      }

      return realm.types.number(computed);
    },
  };
}

function createMathNumericVariadicHookFunctionDeclaration(
  key: (typeof MathNumericVariadicHookFunctionKeys)[number],
): IntrinsicPropertyDeclaration {
  if (typeof mathDefaultHooks[key] !== "function") {
    throw new StaticJsEngineError(
      `Tried to make Math function hook from ${key}, but it does not exist as a function on the default hooks.`,
    );
  }

  return {
    key,
    length: (Math[key] as (...args: number[]) => number).length,
    *func(realm, _thisObj, ...args) {
      const hook = realm.hooks.math[key] as MathNumericHook;

      const asNumbers: number[] = [];
      for (let i = 0; i < args.length; i++) {
        asNumbers[i] = (yield* toNumber(args[i]!)).value;
      }

      const computed = hook.apply(undefined, [realm, ...asNumbers]);

      if (typeof computed !== "number") {
        throw new StaticJsEngineError(
          `Math hook ${key} did not return a number, got ${typeof computed}`,
        );
      }

      return realm.types.number(computed);
    },
  };
}

const declarations: IntrinsicPropertyDeclaration[] = [
  ...MathNumericPrimitiveKeys.map(createMathNumericPropertyDeclaration),
  ...MathNumericImplicitFunctionKeys.map(createMathNumericFunctionDeclaration),
  ...MathNumericVariadicImplicitFunctionKeys.map(createMathNumericVariadicFunctionDeclaration),
  ...MathNumericHookFunctionKeys.map(createMathNumericFunctionHookDeclaration),
  ...MathNumericVariadicHookFunctionKeys.map(createMathNumericVariadicHookFunctionDeclaration),
];

export function* createMath(realm: StaticJsRealm, intrinsics: IntrinsicsRecord) {
  const Math = new StaticJsPlainObjectImpl(realm);

  yield* applyIntrinsicProperties(realm, Math, declarations);

  intrinsics.Math = Math;
}

export const globalObjectMathDeclaration: IntrinsicPropertyDeclaration = {
  key: "Math",
  writable: true,
  configurable: true,
  value: (realm) => realm.intrinsics.Math,
};
