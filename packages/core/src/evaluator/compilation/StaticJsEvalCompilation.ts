import type { Node } from "@babel/types";

import { isStaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";
import StaticJsRealmFactory from "../../runtime/realm/factories/StaticJsRealm.js";

import { evaluateCommands } from "../evaluator-runtime.js";

import { AbnormalCompletion } from "../completions/AbnormalCompletion.js";

import evaluateNode from "../node-evaluators/evaluate-node.js";
import setupEnvironment from "../node-evaluators/setup-environment.js";

import type EvaluationContext from "../EvaluationContext.js";

import type { EvaluationOptions } from "./options.js";

import type StaticJsCompilation from "./StaticJsCompilation.js";

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

    try {
      realm.invokeEvaluatorSync(setupEnvironment(this._root, context));
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }

    try {
      const result = realm.invokeEvaluatorSync(
        evaluateNode(this._root, context),
      );
      return result?.toJsSync();
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }
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

    try {
      yield* evaluateCommands(setupEnvironment(this._root, context));
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }

    try {
      const result = yield* evaluateCommands(evaluateNode(this._root, context));
      return result?.toJsSync();
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }
  }
}
