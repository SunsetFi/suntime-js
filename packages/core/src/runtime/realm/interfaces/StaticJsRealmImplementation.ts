import { StaticJsModule } from "../../modules/interfaces/StaticJsModule.js";
import { StaticJsModuleImplementation } from "../../modules/interfaces/StaticJsModuleImplementation.js";

import { StaticJsRealm, isStaticJsRealm } from "./StaticJsRealm.js";

export default interface StaticJsRealmImplementation extends StaticJsRealm {
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

export function isStaticJsRealmImplementation(
  value: unknown,
): value is StaticJsRealmImplementation {
  return isStaticJsRealm(value) && "resolveImportedModule" in value;
}
