import StaticJsEngineError from "../../errors/StaticJsEngineError.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionBase.js";

export function populateFunctionPrototype(
  realm: StaticJsRealm,
  functionPrototype: StaticJsObject,
) {
  return functionPrototype;
}

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
    { prototype: functionProto, isConstructor: true },
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
