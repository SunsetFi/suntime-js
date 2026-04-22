import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { toRuntimeWrap } from "../../../utils/to-runtime-wrap.js";
import { StaticJsIteratorResult } from "../../StaticJsIterator.js";
import { StaticJsValue } from "../../StaticJsValue.js";

import { StaticJsIteratorImpl } from "./StaticJsIteratorImpl.js";

export class StaticJsSetIteratorImpl extends StaticJsIteratorImpl {
  constructor(
    private _backingIterator: IterableIterator<unknown> | null,
    private readonly _kind: "key" | "key+value",
    realm: StaticJsRealm,
  ) {
    super(realm, realm.types.prototypes.setIteratorProto);
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

    const resolved = toRuntimeWrap(value, this.realm);

    let result: StaticJsValue;
    if (this._kind === "key") {
      result = resolved;
    } else {
      result = yield* createArrayFromList([resolved, resolved]);
    }

    return {
      value: result,
      done: false,
    };
  }
}
