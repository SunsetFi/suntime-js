import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import arrayProtoNextDeclaration from "./next.js";
import arrayProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  arrayProtoNextDeclaration,
  arrayProtoSymbolToStringTagDeclaration,
];

export default function populateArrayIteratorPrototype(
  realm: StaticJsRealm,
  arrayIteratorProto: StaticJsPlainObject,
) {
  applyIntrinsicProperties(realm, arrayIteratorProto, declarations);
}
