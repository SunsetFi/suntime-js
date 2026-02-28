import type { StaticJsRealm } from "../../../runtime/realm/StaticJsRealm.js";

import createDataPropertyOrThrow from "../../../runtime/algorithms/create-data-property-or-throw.js";
import definePropertyOrThrow from "../../../runtime/algorithms/define-property-or-throw.js";

import type { StaticJsObjectLike } from "../../../runtime/types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import StaticJsFunctionImpl from "../../../runtime/types/implementation/StaticJsFunctionImpl.js";

import { Completion } from "../../completions/Completion.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* createUnmappedArgumentsObject(
  argumentsList: StaticJsValue[],
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  const len = argumentsList.length;

  const obj = realm.types.object();

  yield* definePropertyOrThrow(
    obj,
    "length",
    {
      value: realm.types.number(len),
      writable: true,
      enumerable: false,
      configurable: true,
    },
    realm,
  );

  for (let index = 0; index < len; index++) {
    const val = argumentsList[index];
    yield* createDataPropertyOrThrow(obj, String(index), val, realm);
  }

  const arrayValues = yield* realm.types.prototypes.arrayProto.getEvaluator("values");

  yield* definePropertyOrThrow(
    obj,
    realm.types.symbols.iterator,
    {
      value: arrayValues,
      writable: true,
      enumerable: false,
      configurable: true,
    },
    realm,
  );

  const calleeAccessor = new StaticJsFunctionImpl(realm, "get", function* () {
    throw Completion.Throw(
      realm.types.error("TypeError", "callee property is not accessible in strict mode"),
    );
  });

  yield* definePropertyOrThrow(
    obj,
    "callee",
    {
      get: calleeAccessor,
      set: calleeAccessor,
      enumerable: false,
      configurable: false,
    },
    realm,
  );

  return obj;
}
