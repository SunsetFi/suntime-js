import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import { asyncIteratorProtoSymbolAsyncIteratorDeclaration } from "./symbol_asyncIterator.js";
const declarations: IntrinsicPropertyDeclaration[] = [
  asyncIteratorProtoSymbolAsyncIteratorDeclaration,
];

export function populateAsyncIteratorPrototype(realm: StaticJsRealm, proto: StaticJsObject): void {
  applyIntrinsicProperties(realm, proto, declarations);
}
