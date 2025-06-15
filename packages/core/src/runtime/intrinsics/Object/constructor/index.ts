import toObject from "../../../algorithms/to-object.js";
import type { StaticJsRealm } from "../../../realm/index.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionBase.js";
import type { StaticJsObject } from "../../../types/index.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import { applyIntrinsicProperties } from "../../utils.js";

import objectCtorAssignDeclaration from "./assign.js";
import objectCtorCreateDeclaration from "./create.js";
import objectCtorDefinePropertiesDeclaration from "./defineProperties.js";
import objectCtorDefinePropertyDeclaration from "./defineProperty.js";
import objectCtorEntriesDeclaration from "./entries.js";
import objectCtorFreezeDeclaration from "./freeze.js";
import objectCtorGetOwnPropertyDescriptorDeclaration from "./getOwnPropertyDescriptor.js";
import objectCtorGetPrototypeOfDeclaration from "./getPrototypeOf.js";
import objectCtorHasOwnDeclaration from "./hasOwn.js";
import objectCtorKeysDeclaration from "./keys.js";
import objectCtorPreventExtensionsDeclaration from "./preventExtensions.js";
import objectCtorSealDeclaration from "./seal.js";
import objectCtorSetPrototypeOfDeclaration from "./setPrototypeOf.js";
import objectCtorValuesDeclaration from "./values.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  objectCtorAssignDeclaration,
  objectCtorCreateDeclaration,
  objectCtorDefinePropertiesDeclaration,
  objectCtorDefinePropertyDeclaration,
  objectCtorEntriesDeclaration,
  objectCtorFreezeDeclaration,
  objectCtorGetOwnPropertyDescriptorDeclaration,
  objectCtorGetPrototypeOfDeclaration,
  objectCtorHasOwnDeclaration,
  objectCtorKeysDeclaration,
  objectCtorPreventExtensionsDeclaration,
  objectCtorSealDeclaration,
  objectCtorSetPrototypeOfDeclaration,
  objectCtorValuesDeclaration,
];

export default function createObjectConstructor(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Object",
    function* (_thisArg, arg) {
      if (!arg) {
        return realm.types.object();
      }

      return yield* toObject(arg, realm);
    },
    { prototype: functionProto },
  );

  ctor.definePropertySync("prototype", {
    value: objectProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  objectProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations, functionProto);

  return ctor;
}
