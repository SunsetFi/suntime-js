import { NormalCompletion } from "../../../../evaluator/internal.js";
import { StaticJsRealm } from "../../../realm/index.js";
import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import { StaticJsObject } from "../../../types/index.js";
import {
  applyIntrinsicProperties,
  IntrinsicPropertyDeclaration,
} from "../../utils.js";

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
        return NormalCompletion(realm.types.object());
      }

      return NormalCompletion(arg.toObject());
    },
    { prototype: functionProto },
  );

  ctor.defineProperty("prototype", {
    value: objectProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  objectProto.defineProperty("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations, functionProto);

  return ctor;
}
