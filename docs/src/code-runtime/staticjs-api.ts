import {
  isStaticJsBoolean,
  isStaticJsNumber,
  isStaticJsObject,
  isStaticJsScalar,
  isStaticJsString,
  isStaticJsArray,
  isStaticJsFunction,
  isStaticJsValue,
  StaticJsRealm,
  StaticJsValue,
  HostAccessOptions,
  createTimeBoundTaskRunner,
  createTimeSharingTaskRunner,
  StaticJsTaskAbortedError,
} from "@suntime-js/core";

import { CodeRuntimeSpawnOptions } from "./CodeRuntime";

export function createStaticJsRealmApi(
  spawnOpts: CodeRuntimeSpawnOptions,
): Record<string, StaticJsValue> {
  const { realm } = spawnOpts;

  const access: HostAccessOptions = {
    stubWellKnownTypes: false,
    includeWellKnownSymbols: true,
    includeNonEnumerable: true,
    useSandboxThis: true,
    writable: "transparent",
    extensible: "transparent",
    prototypePolicy: "inherit",
    childPolicy: "inherit",
  };
  return {
    StaticJsRealm: realm.types.toStaticJsValue(StaticJsRealm, access),
    isStaticJsValue: realm.types.toStaticJsValue(isStaticJsValue, access),
    isStaticJsScalar: realm.types.toStaticJsValue(isStaticJsScalar, access),
    isStaticJsNumber: realm.types.toStaticJsValue(isStaticJsNumber, access),
    isStaticJsBoolean: realm.types.toStaticJsValue(isStaticJsBoolean, access),
    isStaticJsString: realm.types.toStaticJsValue(isStaticJsString, access),
    isStaticJsObject: realm.types.toStaticJsValue(isStaticJsObject, access),
    isStaticJsArray: realm.types.toStaticJsValue(isStaticJsArray, access),
    isStaticJsFunction: realm.types.toStaticJsValue(isStaticJsFunction, access),
    createTimeBoundTaskRunner: realm.types.toStaticJsValue(createTimeBoundTaskRunner, access),
    createTimeSharingTaskRunner: realm.types.toStaticJsValue(createTimeSharingTaskRunner, access),
    StaticJsTaskAbortedError: realm.types.toStaticJsValue(StaticJsTaskAbortedError, access),
  };
}
