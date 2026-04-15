import { createDataPropertyOrThrow } from "../../../runtime/algorithms/create-data-property-or-throw.js";
import { definePropertyOrThrow } from "../../../runtime/algorithms/define-property-or-throw.js";
import { get } from "../../../runtime/algorithms/get.js";
import { StaticJsNativeFunctionImpl } from "../../../runtime/types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsObject } from "../../../runtime/types/StaticJsObject.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";
import { Completion } from "../../completions/Completion.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* createUnmappedArgumentsObject(
  argumentsList: StaticJsValue[],
): EvaluationGenerator<StaticJsObject> {
  const { realm } = EvaluationContext.current;
  const len = argumentsList.length;

  const obj = realm.types.object();

  yield* definePropertyOrThrow(obj, "length", {
    value: realm.types.number(len),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  for (let index = 0; index < len; index++) {
    const val = argumentsList[index];
    yield* createDataPropertyOrThrow(obj, String(index), val);
  }

  const arrayValues = yield* get(realm.types.prototypes.arrayProto, "values");

  yield* definePropertyOrThrow(obj, realm.types.symbols.iterator, {
    value: arrayValues,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const calleeAccessor = new StaticJsNativeFunctionImpl(realm, "get", function* () {
    throw Completion.Throw("TypeError", "callee property is not accessible in strict mode");
  });

  yield* definePropertyOrThrow(obj, "callee", {
    get: calleeAccessor,
    set: calleeAccessor,
    enumerable: false,
    configurable: false,
  });

  return obj;
}
