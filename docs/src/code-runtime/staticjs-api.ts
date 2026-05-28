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
  StaticJsRealm,
  StaticJsRealmOptions,
  StaticJsTaskRunner,
  StaticJsValue,
  StaticJsRuntimeError,
} from "@suntime-js/core";

import { omit } from "../utils/omit";

import { CodeRuntimeSpawnOptions } from "./CodeRuntime";
import {
  BridgeContext,
  createBridgeContext,
  registerOverride,
  wrapValue,
  unwrapValue,
} from "./host-bridge";

// Raw runners are stored here (not the hooked versions) so overrides can add their own
// registerSubTask call without double-registering.
interface RealmRunners {
  runTask?: StaticJsTaskRunner;
  runTaskSync?: StaticJsTaskRunner;
}
const realmRunners = new WeakMap<object, RealmRunners>();

function hookRunner(runner: StaticJsValue, ctx: BridgeContext): StaticJsTaskRunner {
  const { realm, registerSubTask } = ctx.spawnOpts;
  return (task) => {
    if (!isStaticJsFunction(runner)) {
      const err = realm.types.error("TypeError", "Provided runTask is not a function");
      throw new StaticJsRuntimeError(err);
    }

    registerSubTask(task);
    const taskIter = wrapValue(task, ctx);
    runner.callSync(realm.types.undefined, [taskIter]);
  };
}

// evaluateScriptSync cannot be auto-generated because it needs:
// 1. registerSubTask called so the outer session can abort the evaluation
// 2. A task runner sourced from (in priority order):
//    a. the per-call runTask in the second sandbox argument
//    b. the realm's configured runTaskSync
//    c. a time-bound fallback (with a warning logged)
registerOverride("StaticJsRealm", "evaluateScriptSync", function* (hostThis, sandboxArgs, ctx) {
  const { spawnOpts } = ctx;
  const realmInstance = hostThis as ReturnType<typeof StaticJsRealm>;

  const codeArg = sandboxArgs[0];
  if (!codeArg || !isStaticJsScalar(codeArg)) {
    return spawnOpts.realm.types.undefined;
  }
  const code = String(codeArg.value);

  let callRunTask: StaticJsTaskRunner | undefined;
  const callOptsArg = sandboxArgs[1];
  if (callOptsArg && isStaticJsObject(callOptsArg)) {
    const runTaskProp = callOptsArg.getSync("runTask");
    if (runTaskProp) {
      callRunTask = hookRunner(runTaskProp, ctx);
    }
  }

  const stored = realmRunners.get(hostThis);
  const effectiveRunner = callRunTask ?? stored?.runTaskSync;

  if (!effectiveRunner) {
    spawnOpts.addLog({
      kind: "warning",
      text: "Detected an evaluateScriptSync call without a runTaskSync provided. Using a default. The StaticJs engine does NOT do this natively!",
    });
  }

  const runner = effectiveRunner ?? createTimeBoundTaskRunner({ maxRunTime: 5_000 });

  const result = realmInstance.evaluateScriptSync(code, {
    runTask: (task) => {
      spawnOpts.registerSubTask(task);
      runner(task);
    },
  });
  // Always wrap as a class-backed object so the outer sandbox sees a StaticJsValue
  // wrapper (not an unwrapped primitive). Type guards like isStaticJsNumber rely on
  // getHostObject returning the inner-realm value.
  return wrapValue(result, ctx);
});

export function createStaticJsRealmApi(
  spawnOpts: CodeRuntimeSpawnOptions,
): Record<string, StaticJsValue> {
  (spawnOpts.realm as any).__our_home_realm = true;
  (spawnOpts.realm.types as any).__our_home_realm_types = true;
  const ctx = createBridgeContext(spawnOpts);
  const { realm } = spawnOpts;

  // Prime the prototype cache by scanning a throwaway instance.
  const primeRealm = StaticJsRealm();
  wrapValue(primeRealm, ctx);

  // StaticJsRealm is a factory/constructor — prototype scanning cannot auto-generate it.
  const staticJsRealmFactory = realm.types.function(
    "StaticJsRealm",
    function* (optsArg?: StaticJsValue) {
      let resolvedOpts: StaticJsRealmOptions = {};
      if (isStaticJsObject(optsArg)) {
        resolvedOpts = omit(optsArg.toNative() as Record<string, unknown>, [
          "runTask",
          "runTaskSync",
        ]);
        const runTask = optsArg.getSync("runTask");
        const runTaskSync = optsArg.getSync("runTaskSync");
        if (runTask) {
          resolvedOpts.runTask = hookRunner(runTask, ctx);
        }
        if (runTaskSync) {
          resolvedOpts.runTaskSync = hookRunner(runTaskSync, ctx);
        }
      } else if (optsArg) {
        const err = realm.types.error(
          "TypeError",
          "StaticJsRealm options argument must be an object if provided",
        );
        throw new StaticJsRuntimeError(err);
      }

      // Raw runners are wrapped so sub-tasks register with the outer session.

      const newRealm = StaticJsRealm(resolvedOpts);
      (newRealm as any).__our_child_realm = true;
      (newRealm.types as any).__our_child_realm_types = true;

      realmRunners.set(newRealm, {
        runTask: resolvedOpts.runTask,
        runTaskSync: resolvedOpts.runTaskSync,
      });

      return wrapValue(newRealm, ctx);
    },
  );

  function makeTypeGuard(guard: (value: unknown) => boolean): StaticJsValue {
    return realm.types.function(guard.name, function* (value?: StaticJsValue) {
      const hostValue = value != null ? unwrapValue(value, ctx) : undefined;
      return realm.types.toStaticJsValue(guard(hostValue));
    });
  }

  return {
    StaticJsRealm: staticJsRealmFactory,
    isStaticJsValue: makeTypeGuard(isStaticJsValue),
    isStaticJsScalar: makeTypeGuard(isStaticJsScalar),
    isStaticJsNumber: makeTypeGuard(isStaticJsNumber),
    isStaticJsBoolean: makeTypeGuard(isStaticJsBoolean),
    isStaticJsString: makeTypeGuard(isStaticJsString),
    isStaticJsObject: makeTypeGuard(isStaticJsObject),
    isStaticJsArray: makeTypeGuard(isStaticJsArray),
    isStaticJsFunction: makeTypeGuard(isStaticJsFunction),
  };
}
