import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import arrayProtoNextDeclaration from "./next.js";
import arrayProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  arrayProtoNextDeclaration,
  arrayProtoSymbolToStringTagDeclaration,
];

export default function populateArrayPrototype(
  realm: StaticJsRealm,
  arrayIteratorProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, arrayIteratorProto, declarations);
}
