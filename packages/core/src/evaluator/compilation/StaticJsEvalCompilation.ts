import { Node } from "@babel/types";

import { isStaticJsRealm } from "../../runtime/realm/interfaces/StaticJsRealm.js";
import StaticJsRealmFactory from "../../runtime/realm/factories/StaticJsRealm.js";

import EvaluationContext from "../EvaluationContext.js";
import {
  runEvaluatorUntilCompletion,
  evaluateCommands,
} from "../evaluator-runtime.js";

import evaluateNode from "../node-evaluators/evaluate-node.js";

import StaticJsEngineError from "../StaticJsEngineError.js";

import StaticJsCompilation, {
  EvaluationOptions,
} from "./StaticJsCompilation.js";
import setupEnvironment from "../node-evaluators/setup-environment.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

export default class StaticJsEvalCompilation implements StaticJsCompilation {
  constructor(private readonly _root: Node) {}

  evaluate({ realm }: EvaluationOptions = {}): unknown {
    if (!realm) {
      realm = StaticJsRealmFactory();
    } else if (!isStaticJsRealm(realm)) {
      throw new Error("Invalid realm");
    }

    const context: EvaluationContext = {
      realm,
      env: realm.globalEnv,
      label: null,
    };

    const setupResult = runEvaluatorUntilCompletion(
      setupEnvironment(this._root, context),
    );
    if (isThrowCompletion(setupResult)) {
      throw setupResult.value.toJs();
    }

    const result = runEvaluatorUntilCompletion(
      evaluateNode(this._root, context),
    );

    switch (result.type) {
      case "return":
      case "continue":
      case "break":
        throw new Error(
          "Control flow statements are not allowed in expressions.",
        );
      case "throw":
        // FIXME: Probably want to wrap the error.
        throw result.value.toJs();
      case "normal":
        return result.value?.toJs();
    }

    // @ts-expect-error: We should never reach this point.
    const type = result.type;
    throw new StaticJsEngineError("Unknown completion type: " + type);
  }

  *generator({ realm }: EvaluationOptions = {}): Generator<
    void,
    unknown,
    void
  > {
    if (!realm) {
      realm = StaticJsRealmFactory();
    } else if (!isStaticJsRealm(realm)) {
      throw new Error("Invalid realm");
    }

    const context: EvaluationContext = {
      realm,
      env: realm.globalEnv,
      label: null,
    };

    const setupResult = yield* evaluateCommands(
      setupEnvironment(this._root, context),
    );
    if (isThrowCompletion(setupResult)) {
      throw setupResult.value.toJs();
    }

    const result = yield* evaluateCommands(evaluateNode(this._root, context));

    switch (result.type) {
      case "return":
      case "continue":
      case "break":
        throw new Error(
          "Control flow statements are not allowed in expressions.",
        );
      case "throw":
        // FIXME: Probably want to wrap the error.
        throw result.value.toJs();
      case "normal":
        return result.value?.toJs();
    }
  }
}
