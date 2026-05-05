import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import { asyncGeneratorFunctionProtoPrototypeDeclaration } from "./prototype.js";
import { asyncGeneratorFunctionProtoSymbolToStringTagDeclaration } from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  asyncGeneratorFunctionProtoPrototypeDeclaration,
  asyncGeneratorFunctionProtoSymbolToStringTagDeclaration,
];

export function* populateAsyncGeneratorFunctionPrototype(
  realm: StaticJsRealm,
  asyncGeneratorProto: StaticJsObject,
): EvaluationGenerator<void> {
  yield* applyIntrinsicProperties(realm, asyncGeneratorProto, declarations);
}
