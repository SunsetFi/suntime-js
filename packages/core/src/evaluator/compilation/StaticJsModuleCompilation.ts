import { Program } from "@babel/types";

import {
  isStaticJsRealm,
  StaticJsRealm,
} from "../../runtime/realm/interfaces/StaticJsRealm.js";
import StaticJsRealmFactory from "../../runtime/realm/factories/StaticJsRealm.js";

import { StaticJsModule } from "../../runtime/modules/interfaces/StaticJsModule.js";
import { StaticJsModuleImpl } from "../../runtime/modules/implementation/StaticJsModuleImpl.js";

import { isThrowCompletion } from "../completions/ThrowCompletion.js";

import {
  runEvaluatorUntilCompletion,
  evaluateCommands,
} from "../evaluator-runtime.js";

import { EvaluationOptions } from "./options.js";

import StaticJsCompilation from "./StaticJsCompilation.js";

export default class StaticJsModuleCompilation
  implements
    StaticJsCompilation<
      Promise<StaticJsModule>,
      Promise<Generator<void, StaticJsModule, void>>
    >
{
  constructor(private readonly _program: Program) {}

  async evaluate({ realm }: EvaluationOptions = {}): Promise<StaticJsModule> {
    if (!realm) {
      realm = StaticJsRealmFactory();
    } else if (!isStaticJsRealm(realm)) {
      throw new TypeError(`Invalid StaticJsRealm specified.`);
    }

    const mod = new StaticJsModuleImpl("<anonymous>", this._program, realm);

    await mod.linkModules();

    const initResult = runEvaluatorUntilCompletion(
      mod.moduleDeclarationInstantiationEvaluator(),
    );
    if (isThrowCompletion(initResult)) {
      throw initResult.value.toJs();
    }

    const evalResult = runEvaluatorUntilCompletion(
      mod.moduleEvaluationEvaluator(),
    );
    if (isThrowCompletion(evalResult)) {
      throw evalResult.value.toJs();
    }

    return mod;
  }

  async generator({ realm }: EvaluationOptions = {}): Promise<
    Generator<void, StaticJsModule, void>
  > {
    if (!realm) {
      realm = StaticJsRealmFactory();
    } else if (!isStaticJsRealm(realm)) {
      throw new TypeError(`Invalid StaticJsRealm specified.`);
    }

    const module = new StaticJsModuleImpl("<anonymous>", this._program, realm);
    await module.linkModules();

    return this._generator(module, realm);
  }

  private *_generator(
    module: StaticJsModuleImpl,
    realm: StaticJsRealm,
  ): Generator<void, StaticJsModule, void> {
    if (!realm) {
      realm = StaticJsRealmFactory();
    } else if (!isStaticJsRealm(realm)) {
      throw new Error("Invalid realm");
    }

    const initResult = yield* evaluateCommands(
      module.moduleDeclarationInstantiationEvaluator(),
    );
    if (isThrowCompletion(initResult)) {
      throw initResult.value.toJs();
    }

    const evalResult = yield* evaluateCommands(
      module.moduleEvaluationEvaluator(),
    );
    if (isThrowCompletion(evalResult)) {
      throw evalResult.value.toJs();
    }

    return module;
  }
}
