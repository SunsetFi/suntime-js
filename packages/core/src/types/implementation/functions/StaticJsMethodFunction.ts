import { StaticJsPrivateEnvironmentRecord } from "#environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import type { StaticJsEnvironmentRecord } from "#environments/StaticJsEnvironmentRecord.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsPrivateName } from "../../StaticJsPrivateName.js";
import type { StaticJsSymbol } from "../../StaticJsSymbol.js";

import { StaticJsAstFunction, type StaticJsAstFunctionNode } from "./StaticJsAstFunction.js";

export class StaticJsMethodFunction extends StaticJsAstFunction {
  private _homeObject: StaticJsObject;

  constructor(
    realm: StaticJsRealm,
    node: StaticJsAstFunctionNode,
    sourceText: string,
    homeObject: StaticJsObject,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord | null,
    prototype: StaticJsObject = realm.intrinsics["Function.prototype"],
  ) {
    const { strict, scriptOrModule } = EvaluationContext.current;

    super(realm, node, sourceText, {
      thisMode: "non-lexical-this",
      construct: false,
      env,
      privateEnv,
      prototype,
      strict,
      scriptOrModule,
    });

    this._homeObject = homeObject;
  }

  classFieldInitializerName?: string | StaticJsSymbol | StaticJsPrivateName;

  get homeObject(): StaticJsObject {
    return this._homeObject;
  }
}
