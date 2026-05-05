import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../apply-intrinsic-properties.js";

import { setIteratorProtoNextDeclaration } from "./next.js";
import { setIteratorProtoSymbolToStringTagDeclaration } from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  setIteratorProtoNextDeclaration,
  setIteratorProtoSymbolToStringTagDeclaration,
];

export function* populateSetIteratorPrototype(
  realm: StaticJsRealm,
  arrayIteratorProto: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, arrayIteratorProto, declarations);
}
