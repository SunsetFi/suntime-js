import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { createArrayFromList } from "#algorithms/create-array-from-list.js";
import { get } from "#algorithms/get.js";
import { lengthOfArrayLike } from "#algorithms/length-of-array-like.js";
import { allocated } from "#memory/allocated.js";

import type { StaticJsIteratorResult } from "../../StaticJsIterator.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import type { StaticJsAbstractObjectCreateParams } from "../StaticJsAbstractObject.js";

import { StaticJsIteratorImpl } from "./StaticJsIteratorImpl.js";

export interface StaticJsArrayIteratorImplCreateParams extends StaticJsAbstractObjectCreateParams {
  iteratedArrayLike: StaticJsObject | null;
  arrayLikeNextIndex: number;
  arrayLikeIterationKind: "key" | "value" | "key+value";
}

export class StaticJsArrayIteratorImpl extends StaticJsIteratorImpl {
  static create(params: StaticJsArrayIteratorImplCreateParams): StaticJsArrayIteratorImpl {
    const { iteratedArrayLike, arrayLikeNextIndex, arrayLikeIterationKind, realm } = params;
    return allocated(
      new StaticJsArrayIteratorImpl(
        iteratedArrayLike,
        arrayLikeNextIndex,
        arrayLikeIterationKind,
        realm,
      ),
    );
  }

  protected constructor(
    private _iteratedArrayLike: StaticJsObject | null,
    private _arrayLikeNextIndex: number,
    private readonly _arrayLikeIterationKind: "key" | "value" | "key+value",
    realm: StaticJsRealm,
  ) {
    super(realm, realm.intrinsics["ArrayIteratorPrototype"]);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsArrayIterator";
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

    const len = yield* lengthOfArrayLike(array);
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
      const elementValue = yield* get(array, elementKey);
      if (kind === "value") {
        result = elementValue;
      } else {
        result = yield* createArrayFromList([this.realm.types.number(index), elementValue]);
      }
    }

    return {
      value: result,
      done: false,
    };
  }

  override mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks);

    this._iteratedArrayLike?.mark(marks);
  }
}
