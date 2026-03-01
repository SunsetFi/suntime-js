import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import iteratorProtoDropDeclaration from "./drop.js";
import iteratorProtoEveryDeclaration from "./every.js";
import iteratorProtoSymbolIteratorDeclaration from "./symbol_iterator.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  iteratorProtoDropDeclaration,
  iteratorProtoEveryDeclaration,
  iteratorProtoSymbolIteratorDeclaration,
];

export default function populateIteratorPrototype(
  realm: StaticJsRealm,
  iteratorPrototype: StaticJsObject,
) {
  applyIntrinsicProperties(realm, iteratorPrototype, declarations);
}
