import { type Expression, type Function } from "@babel/types";

import type { StaticJsRealm } from "../../../../runtime/realm/StaticJsRealm.js";

import { StaticJsPrivateEnvironmentRecord } from "../../../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../../../../runtime/environments/StaticJsEnvironmentRecord.js";
import {
  StaticJsAstFunction,
  StaticJsAstFunctionOptions,
} from "../../../../runtime/types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { EvaluationContext } from "../../../EvaluationContext.js";

export type StaticJsClassMethodFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
> & {
  prototype?: StaticJsObject | null;
  privateEnv: StaticJsPrivateEnvironmentRecord | null;
  homeObject: StaticJsObject;
};
export class StaticJsClassMethodFunction extends StaticJsAstFunction {
  private _homeObject: StaticJsObject;

  constructor(
    realm: StaticJsRealm,
    node: Function | Expression,
    homeObject: StaticJsObject,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord,
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
