import { isIdentifier, type Node, type CallExpression } from "@babel/types";

import { parseScript } from "../../parser/parse-script.js";

import { StaticJsSyntaxError } from "../../errors/StaticJsSyntaxError.js";
import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { isStaticJsValue, type StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { getIterator } from "../../runtime/iterators/get-iterator.js";
import { iteratorStepValue } from "../../runtime/iterators/iterator-step-value.js";
import { iteratorClose } from "../../runtime/iterators/iterator-close.js";

import toString from "../../runtime/algorithms/to-string.js";

import { StaticJsDeclarativeEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { isPropertyReference } from "../../runtime/references/is-property-reference.js";

import evalDeclarationInstantiation from "../instantiation/eval-declaration-instantiation.js";

import getValue from "../../runtime/algorithms/get-value.js";
import { get } from "../../runtime/algorithms/get.js";
import call from "../../runtime/algorithms/call.js";
import { isCallable } from "../../runtime/algorithms/is-callable.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import nameNode from "./name-node.js";

export default function* callExpressionNodeEvaluator(node: CallExpression): EvaluationGenerator {
  const context = EvaluationContext.current;
  const { realm } = context;
  if (node.callee.type === "V8IntrinsicIdentifier") {
    // TODO: Support with realm hooks.
    throw new StaticJsEngineError("Intrinsics are not supported");
  }

  const calleeRaw = yield* Q(EvaluateNodeCommand(node.callee));

  // This is suprising, but we pass undefined if we have none.
  // The function itself decides what to and (maybe) inherits globalThis when undefined is passed.
  let thisArg: StaticJsValue = realm.types.undefined;
  let callee: StaticJsValue;

  if (!calleeRaw) {
    throw new StaticJsEngineError("CallExpression callee evaluated to no value");
  }

  if (isStaticJsValue(calleeRaw)) {
    callee = calleeRaw;
  } else {
    callee = yield* getValue(calleeRaw);
    if (isPropertyReference(calleeRaw)) {
      thisArg = calleeRaw.base;
    }
  }

  if (!isCallable(callee)) {
    throw Completion.Throw("TypeError", `TypeError: ${nameNode(node.callee)} is not a function`);
  }

  const parameterEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
  const args = yield* context
    .with({
      lexicalEnv: parameterEnv,
      variableEnv: parameterEnv,
    })
    .run(function* () {
      const args: StaticJsValue[] = [];
      for (let i = 0; i < node.arguments.length; i++) {
        const argument = node.arguments[i];
        if (argument.type === "SpreadElement") {
          const iterable = yield* Q.val(EvaluateNodeCommand(argument.argument));

          const iterator = yield* getIterator(iterable, "sync");

          yield* iteratorClose.handle(iterator, function* () {
            while (true) {
              const value = yield* iteratorStepValue(iterator);
              if (!value) {
                break;
              }
              args.push(value);
            }
          });
        } else {
          const arg = yield* Q.val(EvaluateNodeCommand(argument));
          args.push(arg);
        }
      }
      return args;
    });

  if (isIdentifier(node.callee) && node.callee.name === "eval") {
    const globalEval = yield* get(realm.global, "eval");
    if (globalEval === callee && isCallable(callee)) {
      return yield* callEvalEvaluator(args[0]);
    }
  }

  const callResult = yield* call(callee, thisArg, args);

  return callResult ?? realm.types.undefined;
}

function* callEvalEvaluator(strArg: StaticJsValue | undefined): EvaluationGenerator {
  const context = EvaluationContext.current;
  const { lexicalEnv, privateEnv, realm, strict, variableEnv } = context;

  const str = yield* toString(strArg ?? realm.types.undefined);

  let node: Node;
  try {
    node = parseScript(str.value, "eval", { strictMode: context.strict });
  } catch (e: unknown) {
    if (e instanceof StaticJsSyntaxError) {
      throw Completion.Throw("SyntaxError", e.message);
    }

    throw e;
  }

  const isStrict =
    strict || node.program.directives.some((dir) => dir.value.value === "use strict");

  const lexEnv = new StaticJsDeclarativeEnvironmentRecord(lexicalEnv, realm);
  const varEnv = isStrict ? lexEnv : variableEnv;

  return yield* context.with({ lexicalEnv: lexEnv, variableEnv: varEnv }).run(function* () {
    yield* evalDeclarationInstantiation(node, varEnv, lexEnv, privateEnv, isStrict);

    const result = yield* Q(EvaluateNodeCommand(node));
    return result ?? realm.types.undefined;
  });
}
