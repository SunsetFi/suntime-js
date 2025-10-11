import { isIdentifier, type Node, type CallExpression } from "@babel/types";

import parseScript from "../../parser/parse-script.js";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import getIterator from "../../runtime/algorithms/get-iterator.js";
import iteratorStepValue from "../../runtime/algorithms/iterator-step-value.js";
import toString from "../../runtime/algorithms/to-string.js";

import StaticJsDirectEvalEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDirectEvalEnvironmentRecord.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import nameNode from "./name-node.js";
import setupEnvironment from "./setup-environment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

export default function* callExpressionNodeEvaluator(
  node: CallExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    // TODO: We can absolutely support these with the generator command stuff.
    throw new StaticJsEngineError("Intrinsics are not supported");
  }

  // This is suprising, but we pass undefined if we have none.
  // The function itself decides what to and (maybe) inherits globalThis when undefined is passed.
  let thisArg: StaticJsValue = context.realm.types.undefined;

  if (node.callee.type === "MemberExpression") {
    thisArg = yield* EvaluateNodeCommand(node.callee.object, context, {
      forNormalValue: "CallExpression.callee.object",
    });
  }

  const callee = yield* EvaluateNodeCommand(node.callee, context, {
    forNormalValue: "CallExpression.callee",
  });

  if (!isStaticJsFunction(callee)) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        `TypeError: ${nameNode(node.callee)} is not a function`,
      ),
    );
  }

  const args: StaticJsValue[] = [];
  const parameterInitContext = context.createLexicalAndVariableEnvContext(
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
  );
  for (let i = 0; i < node.arguments.length; i++) {
    const argument = node.arguments[i];
    if (argument.type === "SpreadElement") {
      const iterable = yield* EvaluateNodeCommand(
        argument.argument,
        parameterInitContext,
        {
          forNormalValue: "ForInStatement.right",
        },
      );

      const iterator = yield* getIterator(iterable, context.realm);

      while (true) {
        const value = yield* iteratorStepValue(iterator, context.realm);
        if (value === false) {
          break;
        }
        args.push(value);
      }
    } else {
      const arg = yield* EvaluateNodeCommand(argument, parameterInitContext, {
        forNormalValue: "CallExpression.arguments[]",
      });
      args.push(arg);
    }
  }

  if (isIdentifier(node.callee) && node.callee.name === "eval") {
    const globalEval = yield* context.realm.global.getPropertyEvaluator("eval");
    if (globalEval === callee && isStaticJsFunction(callee)) {
      return yield* callEvalEvaluator(context, args[0]);
    }
  }

  const callResult = yield* callee.callEvaluator(thisArg, ...args);

  return callResult ?? context.realm.types.undefined;
}

function* callEvalEvaluator(
  context: EvaluationContext,
  strArg: StaticJsValue | undefined,
): EvaluationGenerator {
  const { realm, strict } = context;

  const str = yield* toString(strArg ?? realm.types.undefined, realm);

  let node: Node;
  try {
    node = parseScript(str.value);
  } catch (e: unknown) {
    if (e instanceof SyntaxError) {
      throw new ThrowCompletion(realm.types.error("SyntaxError", e.message));
    }

    throw e;
  }

  let evalContext = context;
  if (strict) {
    // Weird hack because we don't preparse all the nodes to see if var is used.
    // Under the hood, this is also a LexicalEnvironment as the spec requires.
    evalContext = context.createLexicalAndVariableEnvContext(
      new StaticJsDirectEvalEnvironmentRecord(realm, true),
    );
  }

  yield* setupEnvironment(node, evalContext);

  const result = yield* EvaluateNodeCommand(node, evalContext);
  return result ?? realm.types.undefined;
}
