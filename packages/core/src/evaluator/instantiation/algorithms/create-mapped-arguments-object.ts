import type { StaticJsRealm } from "../../../runtime/realm/StaticJsRealm.js";

import type { StaticJsEnvironmentRecord } from "../../../runtime/environments/StaticJsEnvironmentRecord.js";

import type { StaticJsFunction } from "../../../runtime/types/StaticJsFunction.js";
import type { StaticJsObjectLike } from "../../../runtime/types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import type { StaticJsAstFunctionArgument } from "../../../runtime/types/implementation/StaticJsAstFunctionArgument.js";
import StaticJsArgumentsExoticObject from "../../../runtime/types/implementation/StaticJsArgumentsExoticObject.js";
import StaticJsFunctionImpl from "../../../runtime/types/implementation/StaticJsFunctionImpl.js";

import createDataPropertyOrThrow from "../../../runtime/algorithms/create-data-property-or-throw.js";
import definePropertyOrThrow from "../../../runtime/algorithms/define-property-or-throw.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import boundNames from "./bound-names.js";

export default function* createMappedArgumentsObject(
  func: StaticJsFunction,
  formals: StaticJsAstFunctionArgument[],
  argumentsList: StaticJsValue[],
  env: StaticJsEnvironmentRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  const len = argumentsList.length;
  const map = realm.types.object();
  const obj = new StaticJsArgumentsExoticObject(map, realm);

  const parameterNames = boundNames(formals);
  const numberOfParameters = parameterNames.length;

  for (let index = 0; index < len; index++) {
    const val = argumentsList[index];
    yield* createDataPropertyOrThrow(obj, String(index), val, realm);
  }

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

  const mappedNames = new Set<string>();
  for (let index = numberOfParameters - 1; index >= 0; index--) {
    const name = parameterNames[index];
    if (mappedNames.has(name)) {
      continue;
    }

    mappedNames.add(name);

    if (index < len) {
      const g = yield* makeArgGetter(name, env, realm);
      const p = yield* makeArgSetter(name, env, realm);
      yield* map.defineOwnPropertyEvaluator(String(index), {
        set: p,
        get: g,
        enumerable: false,
        configurable: true,
      });
    }
  }

  const arrayValuesProto =
    yield* realm.types.prototypes.arrayProto.getEvaluator("values");

  yield* definePropertyOrThrow(
    obj,
    realm.types.symbols.iterator,
    {
      value: arrayValuesProto,
      writable: true,
      enumerable: false,
      configurable: true,
    },
    realm,
  );

  yield* definePropertyOrThrow(
    obj,
    "callee",
    {
      value: func,
      writable: true,
      enumerable: false,
      configurable: true,
    },
    realm,
  );

  return obj;
}

function* makeArgGetter(
  name: string,
  env: StaticJsEnvironmentRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction> {
  return new StaticJsFunctionImpl(realm, "get", function* () {
    return yield* env.getBindingValueEvaluator(name, false);
  });
}

function* makeArgSetter(
  name: string,
  env: StaticJsEnvironmentRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction> {
  return new StaticJsFunctionImpl(realm, "set", function* (_thisArg, value) {
    yield* env.setMutableBindingEvaluator(name, value, false);
    return realm.types.undefined;
  });
}
