import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import type { StaticJsIterator, StaticJsIteratorResult } from "../../StaticJsIterator.js";
import type { StaticJsObject } from "../../StaticJsObject.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export abstract class StaticJsIteratorImpl
  extends StaticJsOrdinaryObjectImpl
  implements StaticJsIterator
{
  protected constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObject = realm.intrinsics["Iterator.prototype"],
  ) {
    super(realm, prototype);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsIterator";
  }

  get runtimeTypeOf(): "iterator" {
    return "iterator";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Iterator;
  }

  nextSync(opts: StaticJsRunTaskOptions = {}): StaticJsIteratorResult {
    return this.realm.invokeEvaluatorSync(this.nextEvaluator(), opts);
  }

  nextAsync(opts: StaticJsRunTaskOptions = {}): Promise<StaticJsIteratorResult> {
    return this.realm.invokeEvaluatorAsync(this.nextEvaluator(), opts);
  }

  abstract nextEvaluator(): EvaluationGenerator<StaticJsIteratorResult>;
}
