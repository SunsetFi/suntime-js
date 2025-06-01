import type { Program } from "@babel/types";

import type { StaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";
import { isStaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";
import StaticJsRealmFactory from "../../runtime/realm/factories/StaticJsRealm.js";

import type { StaticJsModule } from "../../runtime/modules/StaticJsModule.js";
import { StaticJsModuleImpl } from "../../runtime/modules/implementation/StaticJsModuleImpl.js";

import { AbnormalCompletion } from "../completions/AbnormalCompletion.js";

import { evaluateCommands } from "../evaluator-runtime.js";

import type { EvaluationOptions } from "./options.js";

import type StaticJsCompilation from "./StaticJsCompilation.js";

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

    const module = new StaticJsModuleImpl("<anonymous>", this._program, realm);

    await module.linkModules();

    try {
      realm.invokeEvaluatorSync(
        module.moduleDeclarationInstantiationEvaluator(),
      );
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }

    try {
      realm.invokeEvaluatorSync(module.moduleEvaluationEvaluator());
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }

    return module;
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

    try {
      yield* evaluateCommands(module.moduleDeclarationInstantiationEvaluator());
      yield* evaluateCommands(module.moduleEvaluationEvaluator());
    } catch (e) {
      AbnormalCompletion.handleToJs(e);
    }

    return module;
  }
}
