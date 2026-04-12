import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";

import { type IntrinsicPropertyDeclaration, applyIntrinsicProperties } from "../../utils.js";

import symbolProtoToStringDeclaration from "./toString.js";

const declarations: IntrinsicPropertyDeclaration[] = [symbolProtoToStringDeclaration];

export default function populateSymbolPrototype(
  realm: StaticJsRealm,
  symbolProto: StaticJsPlainObject,
) {
  applyIntrinsicProperties(realm, symbolProto, declarations);
}
