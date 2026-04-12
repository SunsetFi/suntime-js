import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import iteratorHelperProtoNextDeclaration from "./next.js";
import iteratorHelperProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  iteratorHelperProtoNextDeclaration,
  iteratorHelperProtoSymbolToStringTagDeclaration,
];

export default function populateIteratorHelperPrototype(
  realm: StaticJsRealm,
  iteratorHelperProto: StaticJsPlainObject,
) {
  applyIntrinsicProperties(realm, iteratorHelperProto, declarations);
}
