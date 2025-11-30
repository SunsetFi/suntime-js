import { isIdentifier, type Node, type CallExpression } from "@babel/types";

import parseScript from "../../parser/parse-script.js";

import StaticJsSyntaxError from "../../errors/StaticJsSyntaxError.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import {
  isStaticJsValue,
  type StaticJsValue,
} from "../../runtime/types/StaticJsValue.js";

import getIterator from "../../runtime/algorithms/get-iterator.js";
import iteratorStepValue from "../../runtime/algorithms/iterator-step-value.js";
import toString from "../../runtime/algorithms/to-string.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { isPropertyReference } from "../../runtime/references/is-property-reference.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import getValue from "../../runtime/algorithms/get-value.js";

import evalDeclarationInstantiation from "../initialization/eval-declaration-instantiation.js";

import nameNode from "./name-node.js";

export default function* callExpressionNodeEvaluator(
  node: CallExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    // TODO: We can absolutely support these with the generator command stuff.
    throw new StaticJsEngineError("Intrinsics are not supported");
  }

  const calleeRaw = yield* EvaluateNodeCommand(node.callee, context);

  // This is suprising, but we pass undefined if we have none.
  // The function itself decides what to and (maybe) inherits globalThis when undefined is passed.
  let thisArg: StaticJsValue = context.realm.types.undefined;
  let callee: StaticJsValue;

  if (!calleeRaw) {
    throw new StaticJsEngineError(
      "CallExpression callee evaluated to no value",
    );
  }

  if (isStaticJsValue(calleeRaw)) {
    callee = calleeRaw;
  } else {
    callee = yield* getValue(calleeRaw, context.realm);
    if (isPropertyReference(calleeRaw)) {
      thisArg = calleeRaw.base;
    }
  }

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
    StaticJsDeclarativeEnvironmentRecord.from(context),
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
        if (!value) {
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
    if (e instanceof StaticJsSyntaxError) {
      throw new ThrowCompletion(realm.types.error("SyntaxError", e.message));
    }

    throw e;
  }

  let evalContext = context;
  if (strict) {
    evalContext = context.createLexicalAndVariableEnvContext(
      StaticJsDeclarativeEnvironmentRecord.from(context),
    );
  }

  yield* evalDeclarationInstantiation(node, strict, evalContext);

  const result = yield* EvaluateNodeCommand(node, evalContext);
  return result ?? realm.types.undefined;
}
