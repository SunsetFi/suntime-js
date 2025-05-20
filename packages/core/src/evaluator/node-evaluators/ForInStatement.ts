import { ForInStatement, LVal } from "@babel/types";

import { isStaticJsObjectLike } from "../../runtime/types/interfaces/StaticJsObject.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import {
  ThrowCompletion,
  isThrowCompletion,
} from "../completions/ThrowCompletion.js";
import { NormalCompletion } from "../completions/NormalCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import setLVal from "./LVal.js";
import setupEnvironment from "./setup-environment.js";

export default function* forInStatementNodeEvaluator(
  node: ForInStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  if (
    node.left.type === "VariableDeclaration" &&
    node.left.declarations.length != 1
  ) {
    return ThrowCompletion(
      context.realm.types.error(
        "SyntaxError",
        "Invalid left-hand side in for-in loop: Must have single binding",
      ),
    );
  }

  const right = yield* EvaluateNodeCommand(node.right, context, {
    rethrow: true,
    forNormalValue: "ForInStatement.right",
  });

  // This appears to just return with nothing in this case.
  if (!isStaticJsObjectLike(right)) {
    return NormalCompletion();
  }

  const keys = yield* right.getEnumerableKeysEvaluator();
  for (const key of keys) {
    const bodyEnv = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      context.env,
    );

    const bodyContext = {
      ...context,
      env: bodyEnv,
    };

    // From testing NodeJs, the decl is in the body scope
    // (IE: const works and doesn't get upset about redecl)
    const setupLeftCompletion = yield* setupEnvironment(node.left, bodyContext);
    if (isThrowCompletion(setupLeftCompletion)) {
      return setupLeftCompletion;
    }

    const setupBodyCompletion = yield* setupEnvironment(node.body, bodyContext);
    if (isThrowCompletion(setupBodyCompletion)) {
      return setupBodyCompletion;
    }

    let lVal: LVal;
    if (node.left.type === "VariableDeclaration") {
      lVal = node.left.declarations[0].id;
    } else {
      lVal = node.left;
    }

    const setResult = yield* setLVal(
      lVal,
      context.realm.types.string(key),
      bodyContext,
      function* (name, value) {
        yield* bodyEnv.initializeBindingEvaluator(name, value);
      },
    );
    if (setResult.type === "throw") {
      return setResult;
    }

    const result = yield* EvaluateNodeCommand(node.body, bodyContext);
    switch (result.type) {
      case "continue":
      case "break": {
        if (result.target !== null && result.target !== context.label) {
          // Not for us.  Pass it up
          return result;
        }

        // It was for us.  Break if that's what the request is.
        if (result.type === "break") {
          return NormalCompletion();
        }
        break;
      }
      case "return":
      case "throw":
        return result;
    }
  }

  return NormalCompletion();
}
