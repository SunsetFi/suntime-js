import { ForStatement } from "@babel/types";
import { NodeEvaluationContext } from "./node-evaluation-context.js";
import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import {
  evaluateNode,
  evaluateNodeAssertValue,
  setupEnvironment,
} from "./nodes.js";
import typedMerge from "../../internal/typed-merge.js";
import {
  BreakEvaluation,
  ContinueEvaluation,
} from "./node-evaluation-result.js";
import { StaticJsEnvironment } from "../../runtime/index.js";

function forStatementNodeEvaluator(
  node: ForStatement,
  context: NodeEvaluationContext,
) {
  const forEnv =
    (node.extra?.environment as StaticJsEnvironment | undefined) ?? context.env;

  const forContext = {
    ...context,
    env: forEnv,
  };

  if (node.init) {
    evaluateNode(node.init, forContext);
  }

  do {
    if (node.test) {
      const testResult = evaluateNodeAssertValue(node.test, forContext);
      if (!testResult.toBoolean()) {
        break;
      }
    }

    const bodyEnv = new StaticJsLexicalEnvironment(
      new StaticJsDeclarativeEnvironmentRecord(),
      forEnv,
    );

    const bodyContext = {
      ...forContext,
      env: bodyEnv,
    };

    setupEnvironment(node.body, bodyContext);

    const result = evaluateNode(node.body, bodyContext);

    if (result === BreakEvaluation) {
      break;
    }

    if (node.update) {
      evaluateNode(node.update, forContext);
    }
  } while (true);

  return null;
}

function forStatementEnvironmentSetup(
  node: ForStatement,
  context: NodeEvaluationContext,
) {
  // Set up the environment for the for statement initializer.
  if (!node.init && !node.update && !node.test) {
    return false;
  }

  const forEnvironment = new StaticJsLexicalEnvironment(
    new StaticJsDeclarativeEnvironmentRecord(),
    context.env,
  );
  node.extra = {
    ...node.extra,
    environment: forEnvironment,
  };

  const forContext: NodeEvaluationContext = {
    ...context,
    env: forEnvironment,
  };

  if (node.init) {
    setupEnvironment(node.init, forContext);
  }

  if (node.test) {
    setupEnvironment(node.test, forContext);
  }

  if (node.update) {
    setupEnvironment(node.update, forContext);
  }

  return false;
}

export default typedMerge(forStatementNodeEvaluator, {
  environmentSetup: forStatementEnvironmentSetup,
});
