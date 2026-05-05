import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import { mapIteratorProtoNextDeclaration } from "./next.js";
import { mapIteratorProtoSymbolToStringTagDeclaration } from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  mapIteratorProtoNextDeclaration,
  mapIteratorProtoSymbolToStringTagDeclaration,
];

export function* populateMapIteratorPrototype(
  realm: StaticJsRealm,
  arrayIteratorProto: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, arrayIteratorProto, declarations);
}
