import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import iteratorHelperProtoNextDeclaration from "./next.js";
import iteratorHelperProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  iteratorHelperProtoNextDeclaration,
  iteratorHelperProtoSymbolToStringTagDeclaration,
];

export function* populateIteratorHelperPrototype(
  realm: StaticJsRealm,
  iteratorHelperProto: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, iteratorHelperProto, declarations);
}
