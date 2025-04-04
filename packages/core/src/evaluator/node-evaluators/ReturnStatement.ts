import { ReturnStatement } from "@babel/types";

import { StaticJsValue } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import { ReturnCompletion } from "../completions/index.js";

export default function* returnStatementNodeEvaluator(
  node: ReturnStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  let value: StaticJsValue = context.realm.types.undefined;
  if (node.argument) {
    const completion = yield* EvaluateNodeCommand(node.argument, context);
    if (completion.type === "throw") {
      return completion;
    }
    if (completion.type !== "normal" || !completion.value) {
      throw new Error(
        `Expected return statement argument to be normal completion, but got ${completion.type}`,
      );
    }
    value = completion.value;
  }

  return ReturnCompletion(value);
}
