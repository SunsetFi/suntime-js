import { TryStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import { StaticJsEnvironment } from "../../runtime/index.js";

import {
  StaticJsDeclarativeEnvironmentRecord,
  StaticJsLexicalEnvironment,
} from "../../runtime/environments/implementation/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import { Completion } from "../completions/index.js";

import setupEnvironment from "./setup-environment.js";
import setLVal from "./LVal.js";

function* tryStatementNodeEvaluator(
  node: TryStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const completion = yield* EvaluateNodeCommand(node.block, context);
  let result: Completion;
  switch (completion.type) {
    case "throw":
      if (node.handler) {
        const handler = node.handler;

        const blockEnv = handler.body.extra?.environment as
          | StaticJsEnvironment
          | undefined;
        if (!blockEnv) {
          throw new Error("Block environment not found");
        }

        const env = new StaticJsLexicalEnvironment(
          new StaticJsDeclarativeEnvironmentRecord(),
          blockEnv,
        );

        const catchContext: EvaluationContext = {
          ...context,
          env,
        };

        if (handler.param) {
          yield* setLVal(
            handler.param,
            completion.value,
            catchContext,
            (name, value) => {
              // FIXME: This will crash here for duplicate identifier, saying the issue is our param.
              // It isn't.  The error should point to the block, which means our block setup env needs to set up the param.
              env.createMutableBinding(name, false);
              env.initializeBinding(name, value);
            },
          );
        }

        // FIXME: FIXME FIXME FIXME: This is extremely hackish.  This feels really bad.
        handler.body.extra!.environment = env;
        try {
          result = yield* EvaluateNodeCommand(handler.body, catchContext);
        } finally {
          handler.body.extra!.environment = blockEnv;
        }
      } else {
        result = completion;
      }
      break;
    default:
      result = completion;
      break;
  }

  if (node.finalizer) {
    const finalizerResult = yield* EvaluateNodeCommand(node.finalizer, context);
    switch (finalizerResult.type) {
      case "return":
      case "throw":
      case "break":
      case "continue":
        return finalizerResult;
    }
  }

  return result;
}

function setupEnvironmentTryStatement(
  node: TryStatement,
  context: EvaluationContext,
) {
  const scope = new StaticJsLexicalEnvironment(
    new StaticJsDeclarativeEnvironmentRecord(),
    context.env,
  );
  const blockContext: EvaluationContext = {
    ...context,
    env: scope,
  };

  setupEnvironment(node.block, blockContext);

  if (node.handler) {
    setupEnvironment(node.handler.body, context);
  }

  if (node.finalizer) {
    setupEnvironment(node.finalizer, context);
  }
}

export default typedMerge(tryStatementNodeEvaluator, {
  environmentSetup: setupEnvironmentTryStatement,
});
