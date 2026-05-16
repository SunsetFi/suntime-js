import type { ReturnStatement } from "@babel/types";

import { Await } from "../../runtime/algorithms/await.js";
import { getGeneratorKind } from "../../runtime/algorithms/get-generator-kind.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* returnStatementNodeEvaluator(node: ReturnStatement): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  if (node.argument) {
    let value = yield* Q.val(EvaluateNodeCommand(node.argument));
    const generatorKind = yield* getGeneratorKind();
    if (generatorKind === "async") {
      value = yield* Q(Await(value));
    }
    throw Completion.Return(value);
  }

  throw Completion.Return(realm.types.undefined);
}
