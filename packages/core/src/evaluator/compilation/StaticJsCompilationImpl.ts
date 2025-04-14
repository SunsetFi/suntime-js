import { Node } from "@babel/types";

import { isStaticJsRealm, StaticJsRealm } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import {
  runEvaluatorUntilCompletion,
  evaluateCommands,
} from "../evaluator-runtime.js";

import evaluateNode from "../node-evaluators/evaluate-node.js";

import StaticJsCompilation, {
  EvaluationOptions,
} from "./StaticJsCompilation.js";
import StaticJsEngineError from "../StaticJsEngineError.js";

export default class StaticJsCompilationImpl implements StaticJsCompilation {
  constructor(private readonly _root: Node) {}

  evaluate({ realm }: EvaluationOptions = {}): unknown {
    if (!realm) {
      realm = StaticJsRealm();
    } else if (!isStaticJsRealm(realm)) {
      throw new Error("Invalid realm");
    }

    const context: EvaluationContext = {
      realm,
      env: realm.globalEnv,
      label: null,
    };

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
      realm = StaticJsRealm();
    } else if (!isStaticJsRealm(realm)) {
      throw new Error("Invalid realm");
    }

    const context: EvaluationContext = {
      realm,
      env: realm.globalEnv,
      label: null,
    };

    const nodeEvaluator = evaluateCommands(evaluateNode(this._root, context));

    const result = yield* nodeEvaluator;

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
