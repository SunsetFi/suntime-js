import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../types/StaticJsObject.js";
import StaticJsObjectImpl from "../../types/implementation/StaticJsObjectImpl.js";
import StaticJsNumberImpl from "../../types/implementation/StaticJsNumberImpl.js";

import toNumber from "../../algorithms/to-number.js";

import type { IntrinsicSymbols, Prototypes } from "../intrinsics.js";
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

const MathNumericFunctionKeys: MathNumericFunctionKeys[] = [
  "abs",
  "acos",
  "acosh",
  "asin",
  "asinh",
  "atan",
  "atan2",
  "atanh",
  "cbrt",
  "ceil",
  "clz32",
  "cos",
  "cosh",
  "exp",
  "expm1",
  // ES2025.  Do we support this?  We need to make sure our runtime supports it.
  // "f16round",
  "floor",
  "fround",
  "hypot",
  "imul",
  "log",
  "log10",
  "log1p",
  "log2",
  "max",
  "min",
  "pow",
  "random",
  "round",
  "sign",
  "sin",
  "sinh",
  "sqrt",
  "tan",
  "tanh",
  "trunc",
];

const MathPropertyKeys: MathNumericPrimitiveKeys[] = [
  "E",
  "LN10",
  "LN2",
  "LOG10E",
  "LOG2E",
  "PI",
  "SQRT1_2",
  "SQRT2",
];

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
  return {
    key: key,
    *func(realm, _thisObj, ...args) {
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
  realm: StaticJsRealm,
): IntrinsicPropertyDeclaration {
  return {
    key: key,
    value: new StaticJsNumberImpl(realm, Math[key]),
  };
}

export function createMathStatic(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  const Math = new StaticJsObjectImpl(realm, objectProto);

  const declarations: IntrinsicPropertyDeclaration[] = [];

  declarations.push(
    ...MathNumericFunctionKeys.map(createMathNumericFunctionDeclaration),
  );
  declarations.push(
    ...MathPropertyKeys.map((key) =>
      createMathNumericPropertyDeclaration(key, realm),
    ),
  );

  applyIntrinsicProperties(
    realm,
    Math,
    declarations,
    prototypes,
    intrinsicSymbols,
  );

  return Math;
}
