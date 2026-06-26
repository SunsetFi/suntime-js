import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { toRuntimeWrap } from "../../../types/utils/to-runtime-wrap.js";
import type { StaticJsIteratorResult } from "../../StaticJsIterator.js";
import type { StaticJsValue } from "../../StaticJsValue.js";

import { StaticJsIteratorImpl } from "./StaticJsIteratorImpl.js";

export class StaticJsMapIteratorImpl extends StaticJsIteratorImpl {
  constructor(
    private _backingIterator: IterableIterator<[unknown, StaticJsValue]> | null,
    private readonly _kind: "key" | "value" | "key+value",
    realm: StaticJsRealm,
  ) {
    super(realm, realm.intrinsics["MapIteratorPrototype"]);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsMapIterator";
  }

  *nextEvaluator(): EvaluationGenerator<StaticJsIteratorResult> {
    const iterator = this._backingIterator;
    if (!iterator) {
      return {
        value: this.realm.types.undefined,
        done: true,
      };
    }

    const { value, done } = iterator.next();
    if (done) {
      this._backingIterator = null;
      return {
        value: this.realm.types.undefined,
        done: true,
      };
    }

    const [key, val] = value;

    let result: StaticJsValue;
    switch (this._kind) {
      case "key":
        result = toRuntimeWrap(key, this.realm);
        break;
      case "value":
        result = val;
        break;
      case "key+value":
        result = yield* createArrayFromList([toRuntimeWrap(key, this.realm), val]);
        break;
    }

    return {
      value: result,
      done: false,
    };
  }
}
