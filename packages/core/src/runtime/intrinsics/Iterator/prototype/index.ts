import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import iteratorProtoSymbolIteratorDeclaration from "./symbol_iterator.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  iteratorProtoSymbolIteratorDeclaration,
];

export default function populateIteratorPrototype(
  realm: StaticJsRealm,
  iteratorPrototype: StaticJsObject,
) {
  applyIntrinsicProperties(realm, iteratorPrototype, declarations);
}
