import type { WithStatement } from "@babel/types";

import StaticJsObjectEnvironmentRecord from "../../runtime/environments/implementation/StaticJsObjectEnvironmentRecord.js";

import toObject from "../../runtime/algorithms/to-object.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* withStatementNodeEvaluator(
  node: WithStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  let target = yield* EvaluateNodeCommand(node.object, context, {
    forNormalValue: "WithStatement.object",
  });

  target = yield* toObject(target, context.realm);

  const withContext = context.createLexicalEnvContext(
    new StaticJsObjectEnvironmentRecord(
      target,
      true,
      context.lexicalEnv,
      context.realm,
    ),
  );

  yield* EvaluateNodeCommand(node.body, withContext);

  return null;
}
