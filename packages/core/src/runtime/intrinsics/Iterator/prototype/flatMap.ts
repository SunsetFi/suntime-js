import { YieldCommand } from "../../../../evaluator/commands/YieldCommand.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { call } from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { createIteratorFromClosure } from "../../../iterators/create-iterator-from-closure.js";
import { getIteratorDirect } from "../../../iterators/get-iterator-direct.js";
import { getIteratorFlattenable } from "../../../iterators/get-iterator-flattenable.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";
import { StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoFlatMapDeclaration: IntrinsicPropertyDeclaration = {
  key: "flatMap",
  length: 1,
  *func(realm, thisArg, mapper = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Iterator.prototype.flatMap called on non-object");
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    let mapperFunc: StaticJsCallable;
    if (!isCallable(mapper)) {
      const error = Completion.Throw("TypeError", "Mapper must be a function");
      return yield* Q(iteratorClose(iterated, error));
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
          call(mapperFunc, realm.types.undefined, [value, realm.types.number(counter)]),
        );

        if (Completion.Abrupt.is(mapped)) {
          return yield* Q(iteratorClose(iterated, mapped));
        }

        const innerIterator = yield* captureThrownCompletion(
          getIteratorFlattenable(mapped, "reject-primitives"),
        );
        if (Completion.Abrupt.is(innerIterator)) {
          return yield* Q(iteratorClose(iterated, innerIterator));
        }

        let innerAlive = true;
        while (innerAlive) {
          const innerValue = yield* captureThrownCompletion(iteratorStepValue(innerIterator));
          if (Completion.Abrupt.is(innerValue)) {
            return yield* Q(iteratorClose(iterated, innerValue));
          }

          if (innerValue === null) {
            innerAlive = false;
          } else {
            const completion = yield* YieldCommand(innerValue);
            if (Completion.Abrupt.is(completion)) {
              const backupCompletion = yield* iteratorClose(innerIterator, completion);
              if (Completion.Abrupt.is(backupCompletion)) {
                return yield* Q(iteratorClose(iterated, backupCompletion));
              }
              return yield* Q(iteratorClose(iterated, completion));
            }
          }

          counter += 1;
        }
      }
    }

    const result = yield* createIteratorFromClosure(
      closure(),
      "Iterator Helper",
      realm.types.prototypes.iteratorHelperProto,
      realm,
    );

    return result;
  },
};

export default iteratorProtoFlatMapDeclaration;
