import { YieldCommand } from "../../../../evaluator/commands/YieldCommand.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import captureThrownCompletion from "../../../../evaluator/completions/capture-thrown-completion.js";
import Q from "../../../../evaluator/completions/Q.js";

import createIteratorFromClosure from "../../../iterators/create-iterator-from-closure.js";
import getIteratorDirect from "../../../iterators/get-iterator-direct.js";
import iteratorClose from "../../../iterators/iterator-close.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";

import { isStaticJsFunction, type StaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoMapDeclaration: IntrinsicPropertyDeclaration = {
  key: "map",
  *func(realm, thisArg, mapper = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Iterator.prototype.map called on non-object"),
      );
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    let mapperFunc: StaticJsFunction;
    if (!isStaticJsFunction(mapper)) {
      const error = Completion.Throw(realm.types.error("TypeError", "Mapper must be a function"));
      return yield* Q(iteratorClose(iterated, error, realm));
    } else {
      // More type weirdness.
      // Typescript knows mapper is a func here, and it knows
      // the above never returns,
      // but inside the closure it forgets.
      mapperFunc = mapper;
    }

    iterated = yield* Q(getIteratorDirect(O));

    function* closure() {
      let counter = 0;
      while (true) {
        const value = yield* Q(iteratorStepValue(iterated));
        if (value === null) {
          return realm.types.undefined;
        }

        const mapped = yield* captureThrownCompletion(
          mapperFunc.callEvaluator(realm.types.undefined, [value, realm.types.number(counter)]),
        );

        if (Completion.Abrupt.is(mapped)) {
          return yield* Q(iteratorClose(iterated, mapped, realm));
        }

        const completion = yield* captureThrownCompletion(YieldCommand(mapped));
        if (Completion.Abrupt.is(completion)) {
          return yield* Q(iteratorClose(iterated, completion, realm));
        }

        counter++;
      }
    }

    const result = yield* Q(
      createIteratorFromClosure(
        closure(),
        "Iterator Helper",
        realm.types.prototypes.iteratorHelperProto,
        realm,
      ),
    );
    return result;
  },
};

export default iteratorProtoMapDeclaration;
