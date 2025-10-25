import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import type { StaticJsIterator } from "../StaticJsIterator.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsIteratorImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsIterator
{
  private _done = false;

  constructor(
    private readonly _nextFunc: () => EvaluationGenerator<
      StaticJsValue | undefined
    >,
    realm: StaticJsRealm,
  ) {
    super(realm, realm.types.prototypes.iteratorProto);
  }

  get runtimeTypeOf(): "iterator" {
    return "iterator";
  }

  *nextEvaluator(): EvaluationGenerator<StaticJsObjectLike> {
    if (this._done) {
      return iteratorResult(this.realm.types.undefined, true, this.realm);
    }

    const nextValue = yield* this._nextFunc();
    if (nextValue === undefined) {
      this._done = true;
      return iteratorResult(this.realm.types.undefined, true, this.realm);
    }

    return iteratorResult(nextValue, false, this.realm);
  }
}

function iteratorResult(
  value: StaticJsValue,
  done: boolean,
  realm: StaticJsRealm,
): StaticJsObjectLike {
  return realm.types.object({
    value: {
      writable: true,
      enumerable: true,
      configurable: true,
      value,
    },
    done: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: realm.types.boolean(done),
    },
  });
}
