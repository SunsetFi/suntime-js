import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../apply-intrinsic-properties.js";

import generatorProtoNextDeclaration from "./next.js";
import generatorProtoReturnDeclaration from "./return.js";
import generatorProtoThrowDeclaration from "./throw.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  generatorProtoNextDeclaration,
  generatorProtoReturnDeclaration,
  generatorProtoThrowDeclaration,
];

export function* populateGeneratorPrototype(
  realm: StaticJsRealm,
  generatorProto: StaticJsObject,
): EvaluationGenerator<void> {
  yield* applyIntrinsicProperties(realm, generatorProto, declarations);

  yield* generatorProto.defineOwnPropertyEvaluator("constructor", {
    value: generatorProto,
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
