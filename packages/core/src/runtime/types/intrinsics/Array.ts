import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import {
  isStaticJsObjectLike,
  StaticJsObject,
} from "../interfaces/StaticJsObject.js";

import StaticJsObjectImpl from "../implementation/StaticJsObjectImpl.js";
import StaticJsFunctionImpl from "../implementation/StaticJsFunctionImpl.js";
import { isStaticJsArray } from "../interfaces/StaticJsArray.js";
import { isStaticJsFunction } from "../interfaces/StaticJsFunction.js";
import { StaticJsValue } from "../interfaces/StaticJsValue.js";
import {
  EvaluationGenerator,
  ReturnCompletion,
  ThrowCompletion,
} from "../../../evaluator/internal.js";
import { isStaticJsUndefined } from "../interfaces/StaticJsUndefined.js";

export function populateArrayPrototype(
  realm: StaticJsRealm,
  arrayProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  arrayProto.defineProperty("some", {
    value: new StaticJsFunctionImpl(
      realm,
      "some",
      function* (
        thisArg: StaticJsValue,
        func: StaticJsValue,
      ): EvaluationGenerator {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.some called on non-array"),
          );
        }

        if (!isStaticJsFunction(func)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.some called with non-function"),
          );
        }

        const length = yield* thisArg.getLengthEvaluator();
        if (length === 0) {
          return ReturnCompletion(realm.types.false);
        }
        for (let i = 0; i < length; i++) {
          const elementValue = yield* thisArg.getPropertyEvaluator(String(i));
          const resultCompletion = yield* func.call(
            thisArg,
            elementValue,
            realm.types.number(i),
            thisArg,
          );
          switch (resultCompletion.type) {
            case "normal":
              if (!resultCompletion.value) {
                throw new Error(
                  "Expected result completion to return a value, but got undefined",
                );
              }
              if (resultCompletion.value.toBoolean()) {
                return ReturnCompletion(realm.types.true);
              }
              break;
            case "throw":
              return resultCompletion;
            default:
              throw new Error(
                "Expected result completion to return normal or throw, but got " +
                  resultCompletion.type,
              );
          }
        }

        return ReturnCompletion(realm.types.false);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("every", {
    value: new StaticJsFunctionImpl(
      realm,
      "every",
      function* (
        thisArg: StaticJsValue,
        func: StaticJsValue,
      ): EvaluationGenerator {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.every called on non-array"),
          );
        }

        if (!isStaticJsFunction(func)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string(
              "Array.prototype.every called with non-function",
            ),
          );
        }

        const length = yield* thisArg.getLengthEvaluator();
        if (length === 0) {
          return ReturnCompletion(realm.types.false);
        }
        for (let i = 0; i < length; i++) {
          const elementValue = yield* thisArg.getPropertyEvaluator(String(i));
          const resultCompletion = yield* func.call(
            thisArg,
            elementValue,
            realm.types.number(i),
            thisArg,
          );
          switch (resultCompletion.type) {
            case "normal":
              if (!resultCompletion.value) {
                throw new Error(
                  "Expected result completion to return a value, but got undefined",
                );
              }
              if (!resultCompletion.value.toBoolean()) {
                return ReturnCompletion(realm.types.false);
              }
              break;
            case "throw":
              return resultCompletion;
            default:
              throw new Error(
                "Expected result completion to return normal or throw, but got " +
                  resultCompletion.type,
              );
          }
        }

        return ReturnCompletion(realm.types.true);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("forEach", {
    value: new StaticJsFunctionImpl(
      realm,
      "forEach",
      function* (
        thisArg: StaticJsValue,
        callback: StaticJsValue,
      ): EvaluationGenerator {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.forEach called on non-array"),
          );
        }

        if (!isStaticJsFunction(callback)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string(
              "Array.prototype.forEach called with non-function",
            ),
          );
        }

        const length = yield* thisArg.getLengthEvaluator();
        if (length === 0) {
          return ReturnCompletion(realm.types.undefined);
        }
        for (let i = 0; i < length; i++) {
          const elementValue = yield* thisArg.getPropertyEvaluator(String(i));
          const resultCompletion = yield* callback.call(
            thisArg,
            elementValue,
            realm.types.number(i),
            thisArg,
          );
          switch (resultCompletion.type) {
            case "normal":
              break;
            case "throw":
              return resultCompletion;
            default:
              throw new Error(
                "Expected result completion to return normal or throw, but got " +
                  resultCompletion.type,
              );
          }
        }

        return ReturnCompletion(realm.types.undefined);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("map", {
    value: new StaticJsFunctionImpl(
      realm,
      "map",
      function* (
        thisArg: StaticJsValue,
        callback: StaticJsValue,
      ): EvaluationGenerator {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.map called on non-array"),
          );
        }

        if (!isStaticJsFunction(callback)) {
          return ThrowCompletion(
            realm.types.string("Array.prototype.map called with non-function"),
          );
        }

        const length = yield* thisArg.getLengthEvaluator();
        if (length === 0) {
          return ReturnCompletion(realm.types.createArray([]));
        }
        const resultArray = realm.types.createArray(new Array(length));
        for (let i = 0; i < length; i++) {
          const elementValue = yield* thisArg.getPropertyEvaluator(String(i));
          const resultCompletion = yield* callback.call(
            thisArg,
            elementValue,
            realm.types.number(i),
            thisArg,
          );
          switch (resultCompletion.type) {
            case "normal":
              if (!resultCompletion.value) {
                throw new Error(
                  "Expected result completion to return a value, but got undefined",
                );
              }
              yield* resultArray.setPropertyEvaluator(
                String(i),
                resultCompletion.value,
                false,
              );
              break;
            case "throw":
              return resultCompletion;
            default:
              throw new Error(
                "Expected result completion to return normal or throw, but got " +
                  resultCompletion.type,
              );
          }
        }

        return ReturnCompletion(resultArray);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("filter", {
    value: new StaticJsFunctionImpl(
      realm,
      "filter",
      function* (
        thisArg: StaticJsValue,
        callback: StaticJsValue,
      ): EvaluationGenerator {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.filter called on non-array"),
          );
        }

        if (!isStaticJsFunction(callback)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string(
              "Array.prototype.filter called with non-function",
            ),
          );
        }

        const length = yield* thisArg.getLengthEvaluator();
        if (length === 0) {
          return ReturnCompletion(realm.types.createArray([]));
        }

        const resultArray = realm.types.createArray();
        for (let i = 0; i < length; i++) {
          const elementValue = yield* thisArg.getPropertyEvaluator(String(i));
          const resultCompletion = yield* callback.call(
            thisArg,
            elementValue,
            realm.types.number(i),
            thisArg,
          );
          switch (resultCompletion.type) {
            case "normal":
              if (!resultCompletion.value) {
                throw new Error(
                  "Expected result completion to return a value, but got undefined",
                );
              }
              if (resultCompletion.value.toBoolean()) {
                yield* resultArray.pushEvaluator(elementValue);
              }
              break;
            case "throw":
              return resultCompletion;
            default:
              throw new Error(
                "Expected result completion to return normal or throw, but got " +
                  resultCompletion.type,
              );
          }
        }

        return ReturnCompletion(resultArray);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("reduce", {
    value: new StaticJsFunctionImpl(
      realm,
      "reduce",
      function* (
        thisArg: StaticJsValue,
        callback: StaticJsValue,
        init: StaticJsValue,
      ) {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.reduce called on non-array"),
          );
        }

        if (!isStaticJsFunction(callback)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string(
              "Array.prototype.reduce called with non-function",
            ),
          );
        }

        const length = yield* thisArg.getLengthEvaluator();

        let value = init;
        for (let i = 0; i < length; i++) {
          const elementValue = yield* thisArg.getPropertyEvaluator(String(i));
          const resultCompletion = yield* callback.call(
            thisArg,
            value,
            elementValue,
            realm.types.number(i),
            thisArg,
          );
          switch (resultCompletion.type) {
            case "normal":
              if (!resultCompletion.value) {
                throw new Error(
                  "Expected result completion to return a value, but got undefined",
                );
              }
              value = resultCompletion.value;
              break;
            case "throw":
              return resultCompletion;
            default:
              throw new Error(
                "Expected result completion to return normal or throw, but got " +
                  resultCompletion.type,
              );
          }
        }

        return ReturnCompletion(value);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("push", {
    value: new StaticJsFunctionImpl(
      realm,
      "push",
      function* (
        thisArg: StaticJsValue,
        value: StaticJsValue,
      ): EvaluationGenerator {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.push called on non-array"),
          );
        }

        yield* thisArg.pushEvaluator(value);

        const lengthValue = yield* thisArg.getLengthEvaluator();
        return ReturnCompletion(realm.types.number(lengthValue));
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("pop", {
    value: new StaticJsFunctionImpl(
      realm,
      "pop",
      function* (thisArg: StaticJsValue) {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.pop called on non-array"),
          );
        }

        const value = yield* thisArg.popEvaluator();
        return ReturnCompletion(value);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("shift", {
    value: new StaticJsFunctionImpl(
      realm,
      "shift",
      function* (thisArg: StaticJsValue): EvaluationGenerator {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.shift called on non-array"),
          );
        }

        const value = yield* thisArg.shiftEvaluator();
        return ReturnCompletion(value);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("unshift", {
    value: new StaticJsFunctionImpl(
      realm,
      "unshift",
      function* (
        thisArg: StaticJsValue,
        value: StaticJsValue,
      ): EvaluationGenerator {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.shift called on non-array"),
          );
        }

        const result = yield* thisArg.unshiftEvaluator(value);
        return ReturnCompletion(realm.types.number(result));
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("splice", {
    value: new StaticJsFunctionImpl(
      realm,
      "splice",
      function* (
        thisArg: StaticJsValue,
        start: StaticJsValue,
        deleteCount: StaticJsValue,
        ...newItems: StaticJsValue[]
      ) {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.splice called on non-array"),
          );
        }

        let startValue: number;
        if (!start) {
          return ReturnCompletion(realm.types.createArray());
        } else if (isStaticJsUndefined(start)) {
          startValue = 0;
        } else {
          startValue = start.toNumber();
        }

        if (!deleteCount) {
          const length = yield* thisArg.getLengthEvaluator();
          deleteCount = realm.types.number(length - startValue);
        }

        const deleteCountValue = deleteCount.toNumber();
        const result = yield* thisArg.spliceEvaluator(
          startValue,
          deleteCountValue,
          ...newItems,
        );
        return ReturnCompletion(result);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("concat", {
    value: new StaticJsFunctionImpl(
      realm,
      "concat",
      function* (thisArg: StaticJsValue, ...otherArrays: StaticJsValue[]) {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.concat called on non-array"),
          );
        }

        const values: StaticJsValue[] = yield* thisArg.sliceNativeEvaluator();
        for (const other of otherArrays) {
          if (!isStaticJsArray(other)) {
            // FIXME: Use real error.
            return ThrowCompletion(
              realm.types.string(
                "Array.prototype.concat called with non-array",
              ),
            );
          }

          const otherValues = yield* other.sliceNativeEvaluator();
          values.push(...otherValues);
        }

        return ReturnCompletion(realm.types.createArray(values));
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  arrayProto.defineProperty("includes", {
    value: new StaticJsFunctionImpl(
      realm,
      "includes",
      function* (thisArg: StaticJsValue, searchElement: StaticJsValue) {
        if (!isStaticJsArray(thisArg)) {
          // FIXME: Use real error.
          return ThrowCompletion(
            realm.types.string("Array.prototype.includes called on non-array"),
          );
        }

        if (!searchElement) {
          return ReturnCompletion(realm.types.true);
        }

        const length = yield* thisArg.getLengthEvaluator();

        for (let i = 0; i < length; i++) {
          const elementValue = yield* thisArg.getPropertyEvaluator(String(i));

          // From experimentation. it seems that this uses strict equality.
          // Even NaN equality returns true...
          if (searchElement.runtimeTypeOf !== elementValue.runtimeTypeOf) {
            continue;
          }

          if (isStaticJsObjectLike(searchElement)) {
            if (searchElement === elementValue) {
              return ReturnCompletion(realm.types.true);
            }

            continue;
          }

          // Primitives.
          if (Object.is(searchElement.toJs(), elementValue.toJs())) {
            return ReturnCompletion(realm.types.true);
          }
        }
        return ReturnCompletion(realm.types.false);
      },
      { prototype: functionProto },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return arrayProto;
}

export function createArrayConstructor(
  realm: StaticJsRealm,
  arrayProto: StaticJsObject,
) {
  const ctor = new StaticJsObjectImpl(realm, null);
  ctor.defineProperty("prototype", {
    value: arrayProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  return ctor;
}
