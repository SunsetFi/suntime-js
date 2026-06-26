import type { Identifier } from "@babel/types";

import getIdentifierReference from "#references/get-identifier-reference.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluationContext } from "../EvaluationContext.js";

export default function* identifierNodeEvaluator(node: Identifier): EvaluationGenerator {
  const { lexicalEnv, strict } = EvaluationContext.current;
  const ref = yield* getIdentifierReference(lexicalEnv, node.name, strict);
  return ref;
}
