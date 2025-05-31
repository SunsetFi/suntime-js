import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";
import StaticJsEnvironmentImplementation, {
  staticJsEnvironmentToImplementation,
} from "../../environments/interfaces/StaticJsEnvironmentImplementation.js";
import { StaticJsModule } from "../../modules/interfaces/StaticJsModule.js";
import {
  StaticJsModuleImplementation,
  staticJsModuleToImplementation,
} from "../../modules/interfaces/StaticJsModuleImplementation.js";

import { StaticJsRealm, isStaticJsRealm } from "./StaticJsRealm.js";

export default interface StaticJsRealmImplementation extends StaticJsRealm {
  /**
   * The global-scope Environment of the realm.
   */
  readonly globalEnv: StaticJsEnvironmentImplementation;

  /**
   * A function to resolve an imported ECMAScript Module given a referencing module
   * and a specifier.
   * @param referencingModule
   * @param specifier
   */
  resolveImportedModule(
    referencingModule: StaticJsModule,
    specifier: string
  ): Promise<StaticJsModuleImplementation | null>;

  /**
   * Start an invocation of the specified evaluation generator.
   * @param generator The generator to begin the invocation of/
   * @returns A promise that resolves to the return value of the generator.
   */
  invokeEvaluator<TReturn>(
    generator: EvaluationGenerator<TReturn>
  ): Promise<TReturn>;
}

export function isStaticJsRealmImplementation(
  value: unknown
): value is StaticJsRealmImplementation {
  return isStaticJsRealm(value) && "resolveImportedModule" in value;
}

export function staticJsRealmToImplementation(
  realm: StaticJsRealm
): StaticJsRealmImplementation {
  if (isStaticJsRealmImplementation(realm)) {
    return realm;
  }

  const impl: StaticJsRealmImplementation = {
    ...realm,
    globalEnv: staticJsEnvironmentToImplementation(realm.globalEnv),
    async resolveImportedModule(referencingModule, specifier) {
      const module = await realm.resolveImportedModule(
        referencingModule,
        specifier
      );
      if (!module) {
        return null;
      }
      return staticJsModuleToImplementation(impl, module);
    },
    async invokeEvaluator<TReturn>(
      generator: EvaluationGenerator<TReturn>
    ): Promise<TReturn> {
      const commandGenerator = evaluateCommands(generator);

      // In theory we should implement calling throw and return, but evaluateCommands handles
      // that for us in practice.
      let result: IteratorResult<void, TReturn> = commandGenerator.next();
      while (!result.done) {
        result = commandGenerator.next();
      }

      return result.value as TReturn;
    },
  };

  return impl;
}
