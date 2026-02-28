import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import type { StaticJsIterator, StaticJsIteratorResult } from "../StaticJsIterator.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

export default abstract class StaticJsIteratorImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsIterator
{
  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObjectLike = realm.types.prototypes.iteratorProto,
  ) {
    super(realm, prototype);
  }

  get runtimeTypeOf(): "iterator" {
    return "iterator";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Iterator;
  }

  abstract nextEvaluator(): EvaluationGenerator<StaticJsIteratorResult>;
}
