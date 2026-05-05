import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../../types/implementation/objects/StaticJsPlainObjectImpl.js";
import { StaticJsObject } from "../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  IntrinsicPropertyDeclaration,
} from "../apply-intrinsic-properties.js";

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

export function* createReflectIntrinsic(realm: StaticJsRealm): EvaluationGenerator<StaticJsObject> {
  const Reflect = new StaticJsPlainObjectImpl(realm, realm.intrinsics["Object.prototype"]);

  yield* applyIntrinsicProperties(realm, Reflect, declarations);

  return Reflect;
}
