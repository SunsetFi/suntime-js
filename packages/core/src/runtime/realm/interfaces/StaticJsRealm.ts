import { StaticJsEnvironment } from "../../environments/interfaces/StaticJsEnvironment.js";

import { StaticJsObject } from "../../types/interfaces/StaticJsObject.js";
import StaticJsTypeFactory from "../../types/interfaces/StaticJsTypeFactory.js";
import { StaticJsModule } from "../../modules/interfaces/StaticJsModule.js";

import { StaticJsModuleImplementation } from "../../modules/interfaces/StaticJsModuleImplementation.js";

/**
 * A top-level construct describing the overall environment in which a javascript program is executed.
 * This is not to be confused with an Environment, or Environment Record, which is a lower-level
 * construct that describes the lexical scope of a function.
 *
 * This class is analogous to a [Realm](https://tc39.es/ecma262/#sec-code-realms) in the ECMAScript specification.
 * @public
 */
export interface StaticJsRealm {
  /**
   * Whether the realm is in strict mode.
   */
  readonly strict: boolean;

  /**
   * The global-scope global object of the realm.
   */
  readonly globalObject: StaticJsObject;

  /**
   * The global-scope Environment of the realm.
   */
  readonly globalEnv: StaticJsEnvironment;

  /**
   * The type factory for the realm.
   */
  readonly types: StaticJsTypeFactory;

  /**
   * A function to resolve an imported ECMAScript Module given a referencing module
   * and a specifier.
   * @param referencingModule
   * @param specifier
   */
  resolveImportedModule(
    referencingModule: StaticJsModule,
    specifier: string,
  ): Promise<StaticJsModuleImplementation | null>;
}

export function isStaticJsRealm(value: unknown): value is StaticJsRealm {
  return (
    value != null &&
    typeof value === "object" &&
    "strict" in value &&
    "globalObject" in value &&
    "globalEnv" in value &&
    "types" in value
  );
}
