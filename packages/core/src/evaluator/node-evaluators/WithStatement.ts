import type { WithStatement } from "@babel/types";

import StaticJsObjectEnvironmentRecord from "../../runtime/environments/implementation/StaticJsObjectEnvironmentRecord.js";

import toObject from "../../runtime/algorithms/to-object.js";

import { EvaluateNodeCommand, EvaluateNodeForCompletion } from "../commands/EvaluateNodeCommand.js";
import updateEmpty from "../completions/update-empty.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* withStatementNodeEvaluator(
  node: WithStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const val = yield* EvaluateNodeCommand(node.object, context, {
    forNormalValue: "WithStatement.object",
  });

  const obj = yield* toObject(val, context.realm);

  const withContext = context.createLexicalEnvContext(
    new StaticJsObjectEnvironmentRecord(obj, true, context.lexicalEnv, context.realm),
  );

  const result = yield* EvaluateNodeForCompletion(node.body, withContext);

  return updateEmpty(result, context.realm.types.undefined);
}
