import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import lengthOfArrayLike from "../../algorithms/length-of-array-like.js";

import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsIteratorImpl from "./StaticJsIteratorImpl.js";
import StaticJsArrayImpl from "./StaticJsArrayImpl.js";
import type { StaticJsIteratorResult } from "../StaticJsIterator.js";

export default class StaticJsArrayIteratorImpl extends StaticJsIteratorImpl {
  constructor(
    private _iteratedArrayLike: StaticJsObjectLike | null,
    private _arrayLikeNextIndex: number,
    private readonly _arrayLikeIterationKind: "key" | "value" | "key+value",
    realm: StaticJsRealm,
  ) {
    super(realm, realm.types.prototypes.arrayIteratorProto);
  }

  *nextEvaluator(): EvaluationGenerator<StaticJsIteratorResult> {
    const array = this._iteratedArrayLike;

    if (array == null) {
      return {
        value: this.realm.types.undefined,
        done: true,
      };
    }

    const index = this._arrayLikeNextIndex;
    const kind = this._arrayLikeIterationKind;

    const len = yield* lengthOfArrayLike(array, this.realm);
    if (index >= len) {
      this._iteratedArrayLike = null;
      return {
        value: this.realm.types.undefined,
        done: true,
      };
    }

    this._arrayLikeNextIndex = index + 1;

    let result: StaticJsValue;
    if (kind === "key") {
      result = this.realm.types.number(index);
    } else {
      const elementKey = String(index);
      const elementValue = yield* array.getEvaluator(elementKey);
      if (kind === "value") {
        result = elementValue;
      } else {
        result = yield* StaticJsArrayImpl.create(this.realm, [
          this.realm.types.number(index),
          elementValue,
        ]);
      }
    }

    return {
      value: result,
      done: false,
    };
  }
}
