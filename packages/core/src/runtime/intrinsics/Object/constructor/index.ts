import toObject from "../../../algorithms/to-object.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import objectCtorAssignDeclaration from "./assign.js";
import objectCtorCreateDeclaration from "./create.js";
import objectCtorDefinePropertiesDeclaration from "./defineProperties.js";
import objectCtorDefinePropertyDeclaration from "./defineProperty.js";
import objectCtorEntriesDeclaration from "./entries.js";
import objectCtorFreezeDeclaration from "./freeze.js";
import objectCtorGetOwnPropertyDescriptorDeclaration from "./getOwnPropertyDescriptor.js";
import objectCtorGetOwnPropertyDescriptorsDeclaration from "./getOwnPropertyDescriptors.js";
import objectCtorGetOwnPropertyNamesDeclaration from "./getOwnPropertyNames.js";
import objectCtorGetOwnPropertySymbolsDeclaration from "./getOwnPropertySymbols.js";
import objectCtorGetPrototypeOfDeclaration from "./getPrototypeOf.js";
import objectCtorHasOwnDeclaration from "./hasOwn.js";
import objectCtorIsDeclaration from "./is.js";
import objectCtorIsExtensibleDeclaration from "./isExtensible.js";
import objectCtorIsFrozenDeclaration from "./isFrozen.js";
import objectCtorIsSealedDeclaration from "./isSealed.js";
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
  objectCtorGetOwnPropertyDescriptorsDeclaration,
  objectCtorGetOwnPropertyNamesDeclaration,
  objectCtorGetOwnPropertySymbolsDeclaration,
  objectCtorGetPrototypeOfDeclaration,
  // TODO: groupBy
  objectCtorHasOwnDeclaration,
  objectCtorIsDeclaration,
  objectCtorIsExtensibleDeclaration,
  objectCtorIsFrozenDeclaration,
  objectCtorIsSealedDeclaration,
  objectCtorKeysDeclaration,
  objectCtorPreventExtensionsDeclaration,
  objectCtorSealDeclaration,
  objectCtorSetPrototypeOfDeclaration,
  objectCtorValuesDeclaration,
];

export default function createObjectConstructor(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
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
    { construct: true },
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

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
