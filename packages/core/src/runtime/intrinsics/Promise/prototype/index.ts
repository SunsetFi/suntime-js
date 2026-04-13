import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { type IntrinsicPropertyDeclaration, applyIntrinsicProperties } from "../../utils.js";

import promiseProtoCatchDeclaration from "./catch.js";
import promiseProtoFinallyDeclaration from "./finally.js";
import promiseProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";
import promiseProtoThenDeclaration from "./then.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  promiseProtoCatchDeclaration,
  promiseProtoFinallyDeclaration,
  promiseProtoSymbolToStringTagDeclaration,
  promiseProtoThenDeclaration,
];

export default function populatePromisePrototype(
  realm: StaticJsRealm,
  promiseProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, promiseProto, declarations);
}
