import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../types/StaticJsObject.js";
import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";

export { default as populateFunctionPrototype } from "./prototype/index.js";

export function createFunctionConstructor(
  realm: StaticJsRealm,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Function",
    function* () {
      // FIXME: Function constructor.
      throw new StaticJsEngineError("Not implemented: Function constructor");
    },
    { prototype: functionProto, construct: true },
  );

  ctor.definePropertySync("prototype", {
    value: functionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  functionProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
