import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../types/StaticJsObject.js";

import { StaticJsObjectImpl } from "../../types/implementation/objects/StaticJsObjectImpl.js";

import { applyIntrinsicProperties, IntrinsicPropertyDeclaration } from "../utils.js";

import { reflectApplyDeclaration } from "./apply.js";
import { reflectConstructDeclaration } from "./construct.js";
import { reflectDefinePropertyDeclaration } from "./defineProperty.js";
import { reflectDeletePropertyDeclaration } from "./deleteProperty.js";
import { reflectGetDeclaration } from "./get.js";
import { reflectGetOwnPropertyDescriptorDeclaration } from "./getOwnPropertyDescriptor.js";
import { reflectGetPrototypeOfDeclaration } from "./getPrototypeOf.js";
import { reflectHasDeclaration } from "./has.js";
import { reflectIsExtensibleDeclaration } from "./isExtensible.js";
import { reflectOwnKeysDeclaration } from "./ownKeys.js";
import { reflectPreventExtensionsDeclaration } from "./preventExtensions.js";
import { reflectSetDeclaration } from "./set.js";
import reflectSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  reflectApplyDeclaration,
  reflectConstructDeclaration,
  reflectDefinePropertyDeclaration,
  reflectDeletePropertyDeclaration,
  reflectGetDeclaration,
  reflectGetOwnPropertyDescriptorDeclaration,
  reflectGetPrototypeOfDeclaration,
  reflectHasDeclaration,
  reflectIsExtensibleDeclaration,
  reflectOwnKeysDeclaration,
  reflectPreventExtensionsDeclaration,
  reflectSetDeclaration,
  reflectSymbolToStringTagDeclaration,
];

export function createReflectIntrinsic(realm: StaticJsRealm): StaticJsObject {
  const Reflect = new StaticJsObjectImpl(realm, realm.types.prototypes.objectProto);

  applyIntrinsicProperties(realm, Reflect, declarations);

  return Reflect;
}
