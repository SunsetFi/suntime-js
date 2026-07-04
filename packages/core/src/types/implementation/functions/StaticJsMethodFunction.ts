import type { StaticJsEnvironmentRecord } from "#environments/StaticJsEnvironmentRecord.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsPrivateEnvironmentRecord } from "#environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { allocated } from "#memory/allocated.js";

import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsPrivateName } from "../../StaticJsPrivateName.js";
import type { StaticJsSymbol } from "../../StaticJsSymbol.js";

import { StaticJsAstFunction, type StaticJsAstFunctionNode } from "./StaticJsAstFunction.js";

export class StaticJsMethodFunction extends StaticJsAstFunction {
  private _homeObject: StaticJsObject;

  // NOTE: see the equivalent note on StaticJsAstFunction.create. This class is
  // itself further subclassed by StaticJsClassConstructorFunction, whose
  // `node` parameter type differs (it also accepts a native-construct
  // closure), so `node` is widened to `unknown` here too to keep the static
  // side of that further `extends` compatible (TS2417).
  static override create(
    realm: StaticJsRealm,
    node: unknown,
    sourceText: string,
    homeObject: StaticJsObject,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord | null,
    prototype: StaticJsObject = realm.intrinsics["Function.prototype"],
  ): StaticJsMethodFunction {
    return allocated(
      new StaticJsMethodFunction(
        realm,
        node as StaticJsAstFunctionNode,
        sourceText,
        homeObject,
        env,
        privateEnv,
        prototype,
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
