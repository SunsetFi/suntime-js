import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsIterator, StaticJsIteratorResult } from "../../StaticJsIterator.js";
import type { StaticJsObject } from "../../StaticJsObject.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export abstract class StaticJsIteratorImpl
  extends StaticJsOrdinaryObjectImpl
  implements StaticJsIterator
{
  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObject = realm.types.prototypes.iteratorProto,
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
