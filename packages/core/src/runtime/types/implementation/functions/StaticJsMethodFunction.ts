import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsPrivateName } from "../../StaticJsPrivateName.js";
import { StaticJsSymbol } from "../../StaticJsSymbol.js";

import { StaticJsAstFunction, StaticJsAstFunctionNode } from "./StaticJsAstFunction.js";

export class StaticJsMethodFunction extends StaticJsAstFunction {
  private _homeObject: StaticJsObject;

  constructor(
    realm: StaticJsRealm,
    node: StaticJsAstFunctionNode,
    homeObject: StaticJsObject,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord | null,
    prototype: StaticJsObject = realm.types.prototypes.functionProto,
  ) {
    const { strict, scriptOrModule } = EvaluationContext.current;

    super(realm, node, {
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
