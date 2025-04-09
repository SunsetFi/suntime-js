import { StaticJsRealm } from "../../../realm/index.js";
import StaticJsObjectImpl from "../../../types/implementation/StaticJsObjectImpl.js";
import { StaticJsObject } from "../../../types/index.js";
import {
  applyIntrinsicProperties,
  IntrinsicPropertyDeclaration,
} from "../../utils.js";

import objectCtorCreateDeclaration from "./create.js";
import objectCtorEntriesDeclaration from "./entries.js";
import objectCtorFreezeDeclaration from "./freeze.js";
import objectCtorGetPrototypeOfDeclaration from "./getPrototypeOf.js";
import objectCtorHasOwnDeclaration from "./hasOwn.js";
import objectCtorKeysDeclaration from "./keys.js";
import objectCtorSetPrototypeOfDeclaration from "./setPrototypeOf.js";
import objectCtorValuesDeclaration from "./values.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  objectCtorCreateDeclaration,
  objectCtorEntriesDeclaration,
  objectCtorFreezeDeclaration,
  objectCtorGetPrototypeOfDeclaration,
  objectCtorHasOwnDeclaration,
  objectCtorKeysDeclaration,
  objectCtorSetPrototypeOfDeclaration,
  objectCtorValuesDeclaration,
];

export default function createObjectConstructor(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsObjectImpl(realm, null);
  ctor.defineProperty("prototype", {
    value: objectProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  applyIntrinsicProperties(realm, ctor, declarations, functionProto);

  return ctor;
}
