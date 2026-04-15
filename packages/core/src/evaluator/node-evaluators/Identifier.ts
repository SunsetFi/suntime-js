import type { Identifier } from "@babel/types";

import getIdentifierReference from "../../runtime/references/get-identifier-reference.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* identifierNodeEvaluator(node: Identifier): EvaluationGenerator {
  const { lexicalEnv, strict } = EvaluationContext.current;
  const ref = yield* getIdentifierReference(lexicalEnv, node.name, strict);
  return ref;
}
