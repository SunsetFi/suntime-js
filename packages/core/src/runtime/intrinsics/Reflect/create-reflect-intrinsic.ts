import { type StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../../types/implementation/objects/StaticJsPlainObjectImpl.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../apply-intrinsic-properties.js";
import { type IntrinsicsRecord } from "../intrinsics.js";

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

export function* createReflect(realm: StaticJsRealm, intrinsics: IntrinsicsRecord) {
  const Reflect = new StaticJsPlainObjectImpl(realm, realm.intrinsics["Object.prototype"]);

  yield* applyIntrinsicProperties(realm, Reflect, declarations);

  intrinsics.Reflect = Reflect;
}

export const globalObjectReflectDeclaration: IntrinsicPropertyDeclaration = {
  key: "Reflect",
  writable: true,
  configurable: true,
  value: (realm) => realm.intrinsics.Reflect,
};
