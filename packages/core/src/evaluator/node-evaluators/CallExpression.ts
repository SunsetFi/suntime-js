import { isIdentifier, type Node, type CallExpression } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { StaticJsSyntaxError } from "../../errors/StaticJsSyntaxError.js";
import { parseScript } from "../../parser/parse-script.js";
import { call } from "../../runtime/algorithms/call.js";
import { construct } from "../../runtime/algorithms/construct.js";
import { getNewTarget } from "../../runtime/algorithms/get-new-target.js";
import { getSuperConstructor } from "../../runtime/algorithms/get-super-constructor.js";
import { getThisEnvironment } from "../../runtime/algorithms/get-this-environment.js";
import { getValue } from "../../runtime/algorithms/get-value.js";
import { get } from "../../runtime/algorithms/get.js";
import { isCallable } from "../../runtime/algorithms/is-callable.js";
import { isConstructor } from "../../runtime/algorithms/is-constructor.js";
import { toString } from "../../runtime/algorithms/to-string.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsFunctionEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsFunctionEnvironmentRecord.js";
import { getIterator } from "../../runtime/iterators/get-iterator.js";
import { iteratorClose } from "../../runtime/iterators/iterator-close.js";
import { iteratorStepValue } from "../../runtime/iterators/iterator-step-value.js";
import { isPropertyReference } from "../../runtime/references/is-property-reference.js";
import { StaticJsClassConstructorFunction } from "../../runtime/types/implementation/functions/StaticJsClassConstructorFunction.js";
import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import { isStaticJsValue, type StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import evalDeclarationInstantiation from "../instantiation/eval-declaration-instantiation.js";

import { initializeInstanceElements } from "./Classes/evaluation/initialize-instance-elements.js";
import nameNode from "./name-node.js";

export default function* callExpressionNodeEvaluator(node: CallExpression): EvaluationGenerator {
  const context = EvaluationContext.current;
  const { realm } = context;

  switch (node.callee.type) {
    case "V8IntrinsicIdentifier":
      throw new StaticJsEngineError("Intrinsics are not supported");
    case "Super":
      return yield* callSuperEvaluator(node);
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
      return yield* argumentsListEvaluation(node);
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

function* callSuperEvaluator(node: CallExpression): EvaluationGenerator {
  const newTarget = yield* getNewTarget();
  if (!isStaticJsFunction(newTarget) || !newTarget.isConstructor) {
    throw new StaticJsEngineError("Super call target is not a constructor");
  }

  const func = yield* getSuperConstructor();
  const argList = yield* argumentsListEvaluation(node);
  if (!isConstructor(func)) {
    throw Completion.Throw("TypeError", "Super call target is not a constructor");
  }

  const result = yield* construct(func, argList, newTarget);
  const thisEr = yield* getThisEnvironment();
  if (thisEr instanceof StaticJsFunctionEnvironmentRecord === false) {
    throw new StaticJsEngineError(
      "Super call this environment record is not a function environment record",
    );
  }

  yield* thisEr.bindThisValue(result);
  const F = thisEr.functionObject;
  if (!isStaticJsFunction(F)) {
    throw new StaticJsEngineError(
      "Super call function environment record's function object is not a function",
    );
  }

  if (F instanceof StaticJsClassConstructorFunction === false) {
    throw new StaticJsEngineError(
      "Super call function environment record's function object is not a class constructor",
    );
  }
  yield* initializeInstanceElements(result, F);

  return result;
}

function* argumentsListEvaluation(node: CallExpression): EvaluationGenerator<StaticJsValue[]> {
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
}
