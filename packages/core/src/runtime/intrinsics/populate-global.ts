import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "./utils.js";

import globalObjectEvalDeclaration from "./eval.js";
import globalObjectInfinityDeclaration from "./Infinity.js";
import globalObjectIsFiniteDeclaration from "./isFinite.js";
import globalObjectIsNaNDeclaration from "./isNaN.js";
import globalObjectNaNDeclaration from "./NaN.js";
import globalObjectParseFloatDeclaration from "./parseFloat.js";
import globalObjectParseIntDeclaration from "./parseInt.js";
import globalObjectUndefinedDeclaration from "./undefined.js";

import { createMathStatic } from "./Math/index.js";

const globalPropertyDeclarations: IntrinsicPropertyDeclaration[] = [
  globalObjectEvalDeclaration,
  globalObjectInfinityDeclaration,
  globalObjectIsFiniteDeclaration,
  globalObjectIsNaNDeclaration,
  globalObjectNaNDeclaration,
  globalObjectParseFloatDeclaration,
  globalObjectParseIntDeclaration,
  globalObjectUndefinedDeclaration,
];

export function populateGlobal(
  realm: StaticJsRealm,
  globalObject: StaticJsObjectLike,
) {
  applyIntrinsicProperties(realm, globalObject, globalPropertyDeclarations);

  const Math = createMathStatic(realm);
  globalObject.definePropertySync("Math", {
    value: Math,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  for (const [key, value] of Object.entries(realm.types.constructors)) {
    globalObject.definePropertySync(key, {
      value,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}
