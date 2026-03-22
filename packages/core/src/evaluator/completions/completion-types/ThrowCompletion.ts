import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";

import { StaticJsRealm } from "../../../runtime/realm/StaticJsRealm.js";

import { ErrorTypeName } from "../../../runtime/types/StaticJsTypeFactory.js";
import { type StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import EvaluationContext from "../../EvaluationContext.js";

import nameCompletionLike from "../name-completion-like.js";

export interface ThrowCompletion {
  readonly type: "throw";
  readonly value: StaticJsValue;
}

export function ThrowCompletion(value: StaticJsValue): ThrowCompletion;
export function ThrowCompletion(
  errorName: ErrorTypeName,
  errorMessage: string,
  realm?: StaticJsRealm,
): ThrowCompletion;
export function ThrowCompletion(
  valueOrName: StaticJsValue | ErrorTypeName,
  errorMessage?: string,
  realm?: StaticJsRealm,
): ThrowCompletion {
  if (typeof valueOrName === "string") {
    return {
      type: "throw",
      value: (realm ?? EvaluationContext.current.realm).types.error(
        valueOrName,
        errorMessage ?? "",
      ),
    };
  }

  return {
    type: "throw",
    value: valueOrName,
  };
}

ThrowCompletion.is = function isThrowCompletion(value: unknown): value is ThrowCompletion {
  return value != null && typeof value === "object" && "type" in value && value.type === "throw";
};

ThrowCompletion.assert = function (value: unknown): asserts value is ThrowCompletion {
  if (!ThrowCompletion.is(value)) {
    throw new StaticJsEngineError(
      `Expected a throw completion, but got ${nameCompletionLike(value)}.`,
    );
  }
};

ThrowCompletion.handleRuntime = function (value: unknown) {
  if (ThrowCompletion.is(value)) {
    throw new StaticJsRuntimeError(value.value);
  }
};

ThrowCompletion.toRuntime = function (completion: ThrowCompletion): never {
  throw new StaticJsRuntimeError(completion.value);
};
