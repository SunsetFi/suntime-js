import {
  createTimeBoundTaskRunner,
  StaticJsRealm,
  isStaticJsString,
  type StaticJsObject,
  type StaticJsValue,
} from "../../src/index.js";

import { ScriptTimeout } from "./timeouts.js";

export default function createHostApi(
  realm: StaticJsRealm,
  accessRealm: StaticJsRealm = realm,
): StaticJsObject {
  const hostDefinedProperty = {
    writable: true,
    configurable: true,
    enumerable: false,
  } as const;

  realm.global.defineOwnPropertySync("print", {
    ...hostDefinedProperty,
    value: realm.types.function("print", function* (value: StaticJsValue) {
      console.log(value.toNative());
      return realm.types.undefined;
    }),
  });

  let $262: StaticJsObject = realm.types.object({
    createRealm: {
      ...hostDefinedProperty,
      value: realm.types.function("createRealm", function* () {
        // This timeout is a little weird, as we are a sub-realm from the main
        // test
        const runner = createTimeBoundTaskRunner({ maxRunTime: ScriptTimeout });
        const newrealm = StaticJsRealm({
          runTask: runner,
          runTaskSync: runner,
        });
        return createHostApi(newrealm, accessRealm);
      }),
    },
    detatchArrayBuffer: {
      ...hostDefinedProperty,
      value: realm.types.function("detatchArrayBuffer", function* () {
        throw realm.types.error("Error", "Not implemented: detatchArrayBuffer");
      }),
    },
    evalScript: {
      ...hostDefinedProperty,
      value: realm.types.function("evalScript", function* (code: StaticJsValue) {
        if (!isStaticJsString(code)) {
          throw realm.types.error("TypeError", "evalScript argument must be a string");
        }
        return realm.evaluateScriptSync(code.value);
      }),
    },
    gc: {
      ...hostDefinedProperty,
      value: realm.types.function("gc", function* () {
        throw realm.types.error("Error", "No garbage collection mechanism implemented");
      }),
    },
    global: {
      ...hostDefinedProperty,
      value: realm.global,
    },
  });

  realm.global.defineOwnPropertySync("$262", {
    ...hostDefinedProperty,
    value: $262,
  });

  return $262;
}
