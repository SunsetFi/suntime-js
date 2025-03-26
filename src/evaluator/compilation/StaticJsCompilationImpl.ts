import { Node } from "@babel/types";

import { isStaticJsRealm, StaticJsRealm } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import { runEvaluatorUntilCompletion } from "../evaluator-runtime.js";
import { evaluateNode } from "../node-evaluators/index.js";

import StaticJsCompilation from "./StaticJsCompilation.js";

export default class StaticJsCompilationImpl implements StaticJsCompilation {
  constructor(private readonly _root: Node) {}

  evaluate(realm: StaticJsRealm = StaticJsRealm()): unknown {
    if (!isStaticJsRealm(realm)) {
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

    throw new Error("Unknown completion type.");
  }
}
