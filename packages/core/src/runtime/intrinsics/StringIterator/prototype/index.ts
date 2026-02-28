import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import stringIteratorProtoNextDeclaration from "./next.js";
import stringIteratorProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  stringIteratorProtoNextDeclaration,
  stringIteratorProtoSymbolToStringTagDeclaration,
];

export default function populateStringIteratorPrototype(
  realm: StaticJsRealm,
  stringIteratorProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, stringIteratorProto, declarations);
}
