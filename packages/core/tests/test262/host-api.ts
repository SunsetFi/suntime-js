import { createTimeBoundTaskRunner, StaticJsRealm } from "../../src/index.js";

export default async function createHostApi(realm: StaticJsRealm): Promise<void> {
  const hostDefinedProperty = {
    writable: true,
    configurable: true,
    enumerable: false,
  } as const;

  await realm.global.defineOwnPropertyAsync("print", {
    ...hostDefinedProperty,
    value: realm.types.toStaticJsValue((value: string) => console.log(value)),
  });

  await realm.global.defineOwnPropertyAsync("$262", {
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
