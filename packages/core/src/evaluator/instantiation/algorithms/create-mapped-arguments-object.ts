import { createDataPropertyOrThrow } from "../../../runtime/algorithms/create-data-property-or-throw.js";
import { definePropertyOrThrow } from "../../../runtime/algorithms/define-property-or-throw.js";
import { get } from "../../../runtime/algorithms/get.js";
import type { StaticJsEnvironmentRecord } from "../../../runtime/environments/StaticJsEnvironmentRecord.js";
import type { StaticJsRealm } from "../../../runtime/realm/StaticJsRealm.js";
import { StaticJsArgumentsExoticObject } from "../../../runtime/types/implementation/functions/StaticJsArgumentsExoticObject.js";
import { StaticJsAstFunctionArgument } from "../../../runtime/types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsNativeFunctionImpl } from "../../../runtime/types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsFunction } from "../../../runtime/types/StaticJsFunction.js";
import type { StaticJsObject } from "../../../runtime/types/StaticJsObject.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import boundNames from "./bound-names.js";

export default function* createMappedArgumentsObject(
  func: StaticJsFunction,
  formals: StaticJsAstFunctionArgument[],
  argumentsList: StaticJsValue[],
  env: StaticJsEnvironmentRecord,
): EvaluationGenerator<StaticJsObject> {
  const { realm } = EvaluationContext.current;
  const len = argumentsList.length;
  const map = realm.types.object();
  const obj = new StaticJsArgumentsExoticObject(map, realm);

  const parameterNames = boundNames.ofParameters(formals);
  const numberOfParameters = parameterNames.length;

  for (let index = 0; index < len; index++) {
    const val = argumentsList[index];
    yield* createDataPropertyOrThrow(obj, String(index), val);
  }

  yield* definePropertyOrThrow(obj, "length", {
    value: realm.types.number(len),
    writable: true,
    enumerable: false,
    configurable: true,
  });

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

  const arrayValuesProto = yield* get(realm.intrinsics["Array.prototype"], "values");

  yield* definePropertyOrThrow(obj, realm.types.symbols.iterator, {
    value: arrayValuesProto,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* definePropertyOrThrow(obj, "callee", {
    value: func,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return obj;
}

function* makeArgGetter(
  name: string,
  env: StaticJsEnvironmentRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction> {
  return new StaticJsNativeFunctionImpl(realm, "get", function* () {
    return yield* env.getBindingValueEvaluator(name, false);
  });
}

function* makeArgSetter(
  name: string,
  env: StaticJsEnvironmentRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction> {
  return new StaticJsNativeFunctionImpl(realm, "set", function* (_thisArg, value) {
    yield* env.setMutableBindingEvaluator(name, value, false);
    return realm.types.undefined;
  });
}
