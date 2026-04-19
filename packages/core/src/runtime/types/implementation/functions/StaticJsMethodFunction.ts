import { type Expression, type Function } from "@babel/types";

import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../StaticJsObject.js";

import { StaticJsAstFunction } from "./StaticJsAstFunction.js";

export class StaticJsMethodFunction extends StaticJsAstFunction {
  private _homeObject: StaticJsObject;

  constructor(
    realm: StaticJsRealm,
    node: Function | Expression,
    homeObject: StaticJsObject,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord | null,
    prototype?: StaticJsObject,
  ) {
    const { strict, scriptOrModule } = EvaluationContext.current;

    super(realm, node, {
      thisMode: "non-lexical-this",
      construct: false,
      env,
      privateEnv,
      prototype: prototype ?? realm.types.prototypes.functionProto,
      strict,
      scriptOrModule,
    });

    this._homeObject = homeObject;
  }

  get homeObject(): StaticJsObject {
    return this._homeObject;
  }
}
