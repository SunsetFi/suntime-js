import { createTimeBoundTaskRunner, StaticJsRealm } from "../../src/index.js";
import { StaticJsObject } from "../../src/runtime/types/StaticJsObject.js";

export default function createHostApi(realm: StaticJsRealm): StaticJsObject {
  const hostDefinedProperty = {
    writable: true,
    configurable: true,
    enumerable: false,
  } as const;

  realm.global.defineOwnPropertySync("print", {
    ...hostDefinedProperty,
    value: realm.types.toStaticJsValue((value: string) => console.log(value)),
  });

  const $262 = realm.types.object({
    createRealm: {
      ...hostDefinedProperty,
      value: realm.types.toStaticJsValue(() => {
        const realm = StaticJsRealm({
          runTask: createTimeBoundTaskRunner({ maxRunTime: 5000 }),
        });
        return createHostApi(realm);
      }),
    },
    detatchArrayBuffer: {
      ...hostDefinedProperty,
      value: realm.types.toStaticJsValue(() => {
        throw new Error("Not implemented: detatchArrayBuffer");
      }),
    },
    evalScript: {
      ...hostDefinedProperty,
      value: realm.types.toStaticJsValue((code: string) => {
        return realm.evaluateScriptSync(code);
      }),
    },
    gc: {
      ...hostDefinedProperty,
      value: realm.types.toStaticJsValue(() => {
        throw new Error("No garbage collection mechanism implemented");
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
