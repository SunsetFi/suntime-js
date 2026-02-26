import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import objectProtoHasOwnPropertyDeclaration from "./hasOwnProperty.js";
import objectProtoIsPrototypeOfDeclaration from "./isPrototypeOf.js";
import propertyIsEnumerableDeclaration from "./propertyIsEnumerable.js";
import toLocaleStringDeclaration from "./toLocaleString.js";
import objectProtoToStringDeclaration from "./toString.js";
import objectProtoValueOfDeclaration from "./valueOf.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  objectProtoHasOwnPropertyDeclaration,
  objectProtoIsPrototypeOfDeclaration,
  propertyIsEnumerableDeclaration,
  toLocaleStringDeclaration,
  objectProtoToStringDeclaration,
  objectProtoValueOfDeclaration,
];

export default function populateObjectPrototype(realm: StaticJsRealm, objectProto: StaticJsObject) {
  applyIntrinsicProperties(realm, objectProto, declarations);
}
