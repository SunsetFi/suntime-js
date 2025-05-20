import { StaticJsModule } from "./StaticJsModule.js";

import { StaticJsModuleImplementation } from "./StaticJsModuleImplementation.js";
import StaticJsRealm, { isStaticJsRealm } from "./StaticJsRealm.js";

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
