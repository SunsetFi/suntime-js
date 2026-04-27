import { type CallExpression } from "@babel/types";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { construct } from "../../../runtime/algorithms/construct.js";
import { getNewTarget } from "../../../runtime/algorithms/get-new-target.js";
import { getSuperConstructor } from "../../../runtime/algorithms/get-super-constructor.js";
import { getThisEnvironment } from "../../../runtime/algorithms/get-this-environment.js";
import { getValue } from "../../../runtime/algorithms/get-value.js";
import { get } from "../../../runtime/algorithms/get.js";
import { isConstructor } from "../../../runtime/algorithms/is-constructor.js";
import { performEval } from "../../../runtime/algorithms/perform-eval.js";
import { sameValue } from "../../../runtime/algorithms/same-value.js";
import { StaticJsFunctionEnvironmentRecord } from "../../../runtime/environments/implementation/StaticJsFunctionEnvironmentRecord.js";
import {
  isStaticJsPropertyReference,
  isStaticJsReferenceRecord,
} from "../../../runtime/references/StaticJsReferenceRecord.js";
import { StaticJsClassConstructorFunction } from "../../../runtime/types/implementation/functions/StaticJsClassConstructorFunction.js";
import { isStaticJsFunction } from "../../../runtime/types/StaticJsFunction.js";
import { type StaticJsValue } from "../../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { Completion } from "../../completions/Completion.js";
import { Q } from "../../completions/Q.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";
import { initializeInstanceElements } from "../Classes/evaluation/initialize-instance-elements.js";

import { argumentsListEvaluation } from "./ArgumentsListEvaluation.js";
import { evaluateCall } from "./EvaluateCall.js";

export default function* callExpressionNodeEvaluator(node: CallExpression): EvaluationGenerator {
  const context = EvaluationContext.current;
  const { realm } = context;

  switch (node.callee.type) {
    case "V8IntrinsicIdentifier":
      throw new StaticJsEngineError("Intrinsics are not supported");
    case "Super":
      return yield* callSuperEvaluator(node);
  }

  const ref = yield* Q(EvaluateNodeCommand(node.callee));
  if (!ref) {
    throw new StaticJsEngineError("CallExpression callee evaluated to no value");
  }

  const func = yield* getValue(ref);

  if (
    isStaticJsReferenceRecord(ref) &&
    !isStaticJsPropertyReference(ref) &&
    ref.referencedName === "eval"
  ) {
    const globalEval = yield* get(realm.global, "eval");
    if (sameValue(func, globalEval)) {
      const argList = yield* argumentsListEvaluation(node.arguments);
      if (argList.length === 0) {
        return realm.types.undefined;
      }
      const evalArg = argList[0];
      return yield* callEvalEvaluator(evalArg);
    }
  }

  return yield* evaluateCall(node, func, ref, node.arguments);
}

function* callEvalEvaluator(strArg: StaticJsValue): EvaluationGenerator {
  const { strict } = EvaluationContext.current;

  return yield* performEval(strArg, strict, true);
}

function* callSuperEvaluator(node: CallExpression): EvaluationGenerator {
  const newTarget = yield* getNewTarget();
  if (!isStaticJsFunction(newTarget) || !newTarget.isConstructor) {
    throw new StaticJsEngineError("Super call target is not a constructor");
  }

  const func = yield* getSuperConstructor();
  const argList = yield* argumentsListEvaluation(node.arguments);
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
