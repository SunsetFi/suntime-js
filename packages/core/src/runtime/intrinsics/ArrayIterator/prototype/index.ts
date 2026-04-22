import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import arrayIteratorProtoNextDeclaration from "./next.js";
import arrayProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  arrayIteratorProtoNextDeclaration,
  arrayProtoSymbolToStringTagDeclaration,
];

export default function populateArrayIteratorPrototype(
  realm: StaticJsRealm,
  arrayIteratorProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, arrayIteratorProto, declarations);
}
