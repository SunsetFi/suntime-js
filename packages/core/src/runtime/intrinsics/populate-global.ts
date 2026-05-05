import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "./apply-intrinsic-properties.js";
import globalObjectEvalDeclaration from "./eval.js";
import globalObjectGlobalThisDeclaration from "./globalThis.js";
import globalObjectInfinityDeclaration from "./Infinity.js";
import globalObjectIsFiniteDeclaration from "./isFinite.js";
import globalObjectIsNaNDeclaration from "./isNaN.js";
import { createMathIntrinsic } from "./Math.js";
import globalObjectNaNDeclaration from "./NaN.js";
import globalObjectParseFloatDeclaration from "./parseFloat.js";
import globalObjectParseIntDeclaration from "./parseInt.js";
import { createReflectIntrinsic } from "./Reflect/create-reflect-intrinsic.js";
import globalObjectUndefinedDeclaration from "./undefined.js";

const globalPropertyDeclarations: IntrinsicPropertyDeclaration[] = [
  globalObjectEvalDeclaration,
  globalObjectGlobalThisDeclaration,
  globalObjectInfinityDeclaration,
  globalObjectIsFiniteDeclaration,
  globalObjectIsNaNDeclaration,
  globalObjectNaNDeclaration,
  globalObjectParseFloatDeclaration,
  globalObjectParseIntDeclaration,
  globalObjectUndefinedDeclaration,
];

// Not all constructors are globals
const globalConstructors = [
  "String",
  "Number",
  "Boolean",
  "Object",
  "Symbol",
  "Array",
  "Iterator",
  "Promise",
  "Proxy",
  "Set",
  "Map",
  "Error",
  "TypeError",
  "ReferenceError",
  "SyntaxError",
  "RangeError",
  "EvalError",
  "URIError",
  "Function",
  "GeneratorFunction",
  "AsyncGeneratorFunction",
] as const;
export function* populateGlobal(realm: StaticJsRealm, globalObject: StaticJsObject) {
  yield* applyIntrinsicProperties(realm, globalObject, globalPropertyDeclarations);

  const Math = yield* createMathIntrinsic(realm);
  yield* globalObject.defineOwnPropertyEvaluator("Math", {
    value: Math,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const Reflect = yield* createReflectIntrinsic(realm);
  yield* globalObject.defineOwnPropertyEvaluator("Reflect", {
    value: Reflect,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  for (const key of globalConstructors) {
    const value = realm.intrinsics[key];
    yield* globalObject.defineOwnPropertyEvaluator(key, {
      value,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}
