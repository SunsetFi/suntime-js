// import * as StaticJs from "@suntime-js/core";
import {
  createTimeBoundTaskRunner,
  isStaticJsBoolean,
  isStaticJsNumber,
  isStaticJsObject,
  isStaticJsScalar,
  isStaticJsString,
  isStaticJsArray,
  isStaticJsFunction,
  isStaticJsValue,
  StaticJsPropertyDescriptorRecord,
  StaticJsRealm,
  StaticJsRealmOptions,
  StaticJsValue,
  StaticJsTaskRunner,
} from "@suntime-js/core";

import { CodeRuntimeSpawnOptions } from "./CodeRuntime";

export function createStaticJsRealmApi(
  spawnOpts: CodeRuntimeSpawnOptions,
): Record<string, StaticJsValue> {
  return {
    StaticJsRealm: makeStaticJsRealmFactoryProxy(spawnOpts),
    isStaticJsValue: makeStaticJsTypeGuard(isStaticJsValue, spawnOpts),
    isStaticJsScalar: makeStaticJsTypeGuard(isStaticJsScalar, spawnOpts),
    isStaticJsNumber: makeStaticJsTypeGuard(isStaticJsNumber, spawnOpts),
    isStaticJsBoolean: makeStaticJsTypeGuard(isStaticJsBoolean, spawnOpts),
    isStaticJsString: makeStaticJsTypeGuard(isStaticJsString, spawnOpts),
    isStaticJsObject: makeStaticJsTypeGuard(isStaticJsObject, spawnOpts),
    isStaticJsArray: makeStaticJsTypeGuard(isStaticJsArray, spawnOpts),
    isStaticJsFunction: makeStaticJsTypeGuard(isStaticJsFunction, spawnOpts),
  };
}

const RootSymbol = Symbol("StaticJsApiRoot");

function setRoot(obj: any, value: unknown) {
  obj[RootSymbol] = value;
}

function getRoot(obj: any): unknown {
  if (obj && obj[RootSymbol]) {
    return obj[RootSymbol];
  }
  return null;
}

function makeStaticJsRealmFactoryProxy(spawnOpts: CodeRuntimeSpawnOptions) {
  const { realm } = spawnOpts;

  const func = realm.types.function("StaticJsRealm", function* (optsValue) {
    const opts = (optsValue?.toNative() ?? {}) as StaticJsRealmOptions;
    return makeStaticJsRealmProxy(opts, spawnOpts);
  });

  setRoot(func, StaticJsRealm);

  return func;
}

function makeStaticJsRealmProxy(
  realmOpts: StaticJsRealmOptions,
  spawnOpts: CodeRuntimeSpawnOptions,
): StaticJsValue {
  const { realm } = spawnOpts;

  const resolvedOpts: StaticJsRealmOptions = {
    ...realmOpts,
  };

  if (realmOpts.runTask) {
    resolvedOpts.runTask = (task) => {
      spawnOpts.registerSubTask(task);
      realmOpts.runTask!(task);
    };
  }

  if (realmOpts.runTaskSync) {
    resolvedOpts.runTaskSync = (task) => {
      spawnOpts.registerSubTask(task);
      realmOpts.runTaskSync!(task);
    };
  }

  const newRealm = new StaticJsRealm(resolvedOpts);

  const realmProxy = realm.types.object({
    evaluateScriptSync: {
      value: realm.types.function("evaluateScriptSync", function* (codeValue) {
        let runTask: StaticJsTaskRunner | undefined;
        if (!realmOpts.runTaskSync) {
          spawnOpts.addLog({
            kind: "warning",
            text: "Detected an evaluateScriptSync call without a runTaskSync provided. Using a default.  The StaticJs engine does NOT do this natively!",
          });
          runTask = createTimeBoundTaskRunner({
            maxRunTime: 5_000,
          });
        }

        const code = codeValue.toNative() as string;
        const result = newRealm.evaluateScriptSync(code, {
          runTask,
        });
        return makeStaticJsValueProxy(result, spawnOpts);
      }),
      enumerable: false,
      writable: false,
      configurable: false,
    },
  });

  setRoot(realmProxy, realm);
  return realmProxy;
}

function makeStaticJsValueProxy(
  value: StaticJsValue,
  spawnOpts: CodeRuntimeSpawnOptions,
): StaticJsValue {
  const props: Record<string, StaticJsPropertyDescriptorRecord> = {};
  if (isStaticJsScalar(value)) {
    props.value = {
      value: spawnOpts.realm.types.toStaticJsValue(value.toNative()),
      enumerable: true,
      writable: false,
      configurable: false,
    };
  }

  const obj = spawnOpts.realm.types.object(props);
  setRoot(obj, value);
  return obj;
}

function makeStaticJsTypeGuard(
  guard: (value: unknown) => boolean,
  spawnOpts: CodeRuntimeSpawnOptions,
) {
  const func = spawnOpts.realm.types.function(guard.name, function* (value) {
    console.log("Guard called with", value);
    const root = getRoot(value);
    console.log("Root of value:", root);
    if (!isStaticJsValue(root)) {
      return spawnOpts.realm.types.false;
    }

    return spawnOpts.realm.types.toStaticJsValue(guard(root));
  });
  setRoot(func, guard);
  return func;
}

// function makeProxy(value: unknown, realm: StaticJsRealm): StaticJsValue {
//   if (value == null || value === undefined) {
//     return realm.types.toStaticJsValue(value);
//   }

//   if (typeof value === "object" || typeof value === "function") {
//     return createReadExecuteAccessProxy(value, realm);
//   }

//   return realm.types.toStaticJsValue(value);
// }
