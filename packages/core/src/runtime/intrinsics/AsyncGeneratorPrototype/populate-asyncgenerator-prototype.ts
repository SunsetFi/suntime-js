import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../apply-intrinsic-properties.js";

import asyncGeneratorProtoNextDeclaration from "./next.js";
import asyncGeneratorProtoReturnDeclaration from "./return.js";
import asyncGeneratorProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";
import asyncGeneratorProtoThrowDeclaration from "./throw.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  asyncGeneratorProtoNextDeclaration,
  asyncGeneratorProtoReturnDeclaration,
  asyncGeneratorProtoSymbolToStringTagDeclaration,
  asyncGeneratorProtoThrowDeclaration,
];

export function* populateAsyncGeneratorPrototype(
  realm: StaticJsRealm,
  asyncGeneratorProto: StaticJsObject,
): EvaluationGenerator<void> {
  yield* applyIntrinsicProperties(realm, asyncGeneratorProto, declarations);

  yield* asyncGeneratorProto.defineOwnPropertyEvaluator("constructor", {
    value: realm.types.prototypes.asyncGeneratorFunctionProto,
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
