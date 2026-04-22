import { StaticBlock } from "@babel/types";

import { captureThrownCompletion } from "../completions/capture-thrown-completion.js";
import { Q } from "../completions/Q.js";
import { EvaluationGenerator } from "../EvaluationGenerator.js";

import evaluateStatementList from "./StatementList.js";

export default function* staticBlockNodeEvaluator(node: StaticBlock): EvaluationGenerator {
  // Once more, in its infinite weirdness, the spec only defines
  // an empty ClassStaticBlockStatementList and not one that is populated.
  // 15.7.16
  // It must be defined somewhere, but I cannot find any sign of it.
  const completion = yield* captureThrownCompletion(evaluateStatementList(node.body));
  return yield* Q(completion);
}
