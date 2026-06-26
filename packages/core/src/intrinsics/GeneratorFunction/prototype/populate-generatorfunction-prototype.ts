import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import generatorProtoPrototypeDeclaration from "./prototype.js";
import generatorFunctionProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  generatorProtoPrototypeDeclaration,
  generatorFunctionProtoSymbolToStringTagDeclaration,
];

export function* populateGeneratorFunctionPrototype(
  realm: StaticJsRealm,
  generatorProto: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, generatorProto, declarations);

  yield* generatorProto.defineOwnPropertyEvaluator("constructor", {
    value: generatorProto,
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
