import { isFunction, type Expression, type Function } from "@babel/types";

import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { StaticJsObject } from "../../StaticJsObject.js";

import {
  StaticJsAstFunction,
  StaticJsAstFunctionOptions,
  validateStaticJsAstFunctionParams,
} from "./StaticJsAstFunction.js";
import { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";

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
    const params = isFunction(node) ? node.params : [];
    validateStaticJsAstFunctionParams(params);

    const { strict, scriptOrModule } = EvaluationContext.current;

    super(realm, null, params, node, {
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
