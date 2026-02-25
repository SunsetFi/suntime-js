import type { Identifier } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { getIdentifierReference } from "../../runtime/references/get-identifier-reference.js";

export default function* identifierNodeEvaluator(
  node: Identifier,
  context: EvaluationContext,
): EvaluationGenerator {
  const ref = yield* getIdentifierReference(context.lexicalEnv, node.name, context.strict);
  return ref;
}
