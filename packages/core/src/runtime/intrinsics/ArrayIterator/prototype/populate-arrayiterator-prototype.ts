import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import arrayIteratorProtoNextDeclaration from "./next.js";
import arrayProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  arrayIteratorProtoNextDeclaration,
  arrayProtoSymbolToStringTagDeclaration,
];

export function* populateArrayIteratorPrototype(
  realm: StaticJsRealm,
  arrayIteratorProto: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, arrayIteratorProto, declarations);
}
