import { createTimeBoundTaskRunner, StaticJsRealm } from "../../src/index.js";

export function createHostApi(realm: StaticJsRealm) {
  const hostDefinedProperty = {
    writable: true,
    configurable: true,
    enumerable: false,
  } as const;
  realm.global.defineOwnPropertySync("print", {
    ...hostDefinedProperty,
    value: realm.types.toStaticJsValue((value: string) => console.log(value)),
  });
  realm.global.defineOwnPropertySync("$262", {
    ...hostDefinedProperty,
    value: realm.types.object({
      createRealm: {
        ...hostDefinedProperty,
        value: realm.types.toStaticJsValue(() => {
          const realm = StaticJsRealm({
            runTask: createTimeBoundTaskRunner({ maxRunTime: 5000 }),
          });
          createHostApi(realm);
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
    }),
  });
}
