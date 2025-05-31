import { Program } from "@babel/types";

import {
  isStaticJsRealm,
  StaticJsRealm,
} from "../../runtime/realm/interfaces/StaticJsRealm.js";
import StaticJsRealmFactory from "../../runtime/realm/factories/StaticJsRealm.js";

import { StaticJsModule } from "../../runtime/modules/interfaces/StaticJsModule.js";
import { StaticJsModuleImpl } from "../../runtime/modules/implementation/StaticJsModuleImpl.js";

import { isThrowCompletion } from "../completions/ThrowCompletion.js";

import { evaluateCommands } from "../evaluator-runtime.js";

import StaticJsCompilation, {
  EvaluationOptions,
} from "./StaticJsCompilation.js";
import { staticJsRealmToImplementation } from "../../runtime/realm/interfaces/StaticJsRealmImplementation.js";

export default class StaticJsModuleCompilation
  implements
    StaticJsCompilation<
      StaticJsModule,
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

    const realmImpl = staticJsRealmToImplementation(realm);

    const mod = new StaticJsModuleImpl("<anonymous>", this._program, realmImpl);

    await mod.linkModules();

    const initResult = await realmImpl.invokeEvaluator(
      mod.moduleDeclarationInstantiationEvaluator(),
    );
    if (isThrowCompletion(initResult)) {
      throw initResult.value.toJs();
    }

    const evalResult = await realmImpl.invokeEvaluator(
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
