import { Program } from "@babel/types";

import { isStaticJsRealm, StaticJsRealm } from "../../runtime/index.js";

import {
  runEvaluatorUntilCompletion,
  evaluateCommands,
} from "../evaluator-runtime.js";

import StaticJsModule from "../../runtime/realm/interfaces/StaticJsModule.js";
import { StaticJsModuleImpl } from "../../runtime/realm/implementation/StaticJsModuleImpl/StaticJsModuleImpl.js";

import { isThrowCompletion } from "../completions/ThrowCompletion.js";

import StaticJsCompilation, {
  EvaluationOptions,
} from "./StaticJsCompilation.js";

export default class StaticJsEvalCompilation
  implements StaticJsCompilation<StaticJsModule>
{
  constructor(private readonly _program: Program) {}

  evaluate({ realm }: EvaluationOptions = {}): StaticJsModule {
    if (!realm) {
      realm = StaticJsRealm();
    } else if (!isStaticJsRealm(realm)) {
      throw new Error("Invalid realm");
    }

    const mod = new StaticJsModuleImpl(realm, "<anonymous>", this._program);

    const initResult = runEvaluatorUntilCompletion(
      mod.moduleDeclarationInstantiation(),
    );
    if (isThrowCompletion(initResult)) {
      throw initResult.value.toJs();
    }

    const evalResult = runEvaluatorUntilCompletion(mod.moduleEvaluation());
    if (isThrowCompletion(evalResult)) {
      throw evalResult.value.toJs();
    }

    return mod;
  }

  *generator({ realm }: EvaluationOptions = {}): Generator<
    void,
    StaticJsModule,
    void
  > {
    if (!realm) {
      realm = StaticJsRealm();
    } else if (!isStaticJsRealm(realm)) {
      throw new Error("Invalid realm");
    }

    const mod = new StaticJsModuleImpl(realm, "<anonymous>", this._program);

    const initResult = yield* evaluateCommands(
      mod.moduleDeclarationInstantiation(),
    );
    if (isThrowCompletion(initResult)) {
      throw initResult.value.toJs();
    }

    const evalResult = yield* evaluateCommands(mod.moduleEvaluation());
    if (isThrowCompletion(evalResult)) {
      throw evalResult.value.toJs();
    }

    return mod;
  }
}
