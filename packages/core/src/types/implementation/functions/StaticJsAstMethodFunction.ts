import type { StaticJsEnvironmentRecord } from "#environments/StaticJsEnvironmentRecord.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsPrivateEnvironmentRecord } from "#environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { allocated } from "#memory/allocated.js";

import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsPrivateName } from "../../StaticJsPrivateName.js";
import type { StaticJsSymbol } from "../../StaticJsSymbol.js";

import {
  StaticJsAstFunction,
  type StaticJsAstFunctionCreateParams,
  type StaticJsAstFunctionNode,
} from "./StaticJsAstFunction.js";

export interface StaticJsAstMethodFunctionCreateParams extends StaticJsAstFunctionCreateParams {
  homeObject: StaticJsObject;
}

export class StaticJsAstMethodFunction extends StaticJsAstFunction {
  private _homeObject: StaticJsObject;

  static override create(params: StaticJsAstMethodFunctionCreateParams): StaticJsAstMethodFunction {
    const { realm, node, sourceText, homeObject, env, privateEnv = null, prototype } = params;
    return allocated(
      new StaticJsAstMethodFunction(
        realm,
        node,
        sourceText,
        homeObject,
        env,
        privateEnv,
        prototype ?? undefined,
      ),
    );
  }

  protected constructor(
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
