import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

import globalObjectEvalDeclaration from "./eval.js";
import globalObjectGlobalThisDeclaration from "./globalThis.js";
import globalObjectInfinityDeclaration from "./Infinity.js";
import globalObjectIsFiniteDeclaration from "./isFinite.js";
import globalObjectIsNaNDeclaration from "./isNaN.js";
import { createMathIntrinsic } from "./Math/index.js";
import globalObjectNaNDeclaration from "./NaN.js";
import globalObjectParseFloatDeclaration from "./parseFloat.js";
import globalObjectParseIntDeclaration from "./parseInt.js";
import { createReflectIntrinsic } from "./Reflect/index.js";
import globalObjectUndefinedDeclaration from "./undefined.js";
import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "./utils.js";

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
export function populateGlobal(realm: StaticJsRealm, globalObject: StaticJsObject) {
  applyIntrinsicProperties(realm, globalObject, globalPropertyDeclarations);

  const Math = createMathIntrinsic(realm);
  globalObject.defineOwnPropertySync("Math", {
    value: Math,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const Reflect = createReflectIntrinsic(realm);
  globalObject.defineOwnPropertySync("Reflect", {
    value: Reflect,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  for (const key of globalConstructors) {
    const value = realm.types.constructors[key];
    globalObject.defineOwnPropertySync(key, {
      value,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}
