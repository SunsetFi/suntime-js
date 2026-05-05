import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../apply-intrinsic-properties.js";

import stringIteratorProtoNextDeclaration from "./next.js";
import stringIteratorProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  stringIteratorProtoNextDeclaration,
  stringIteratorProtoSymbolToStringTagDeclaration,
];

export function* populateStringIteratorPrototype(
  realm: StaticJsRealm,
  stringIteratorProto: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, stringIteratorProto, declarations);
}
