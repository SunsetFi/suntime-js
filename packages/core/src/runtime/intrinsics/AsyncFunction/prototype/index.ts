import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, IntrinsicPropertyDeclaration } from "../../utils.js";
import asyncFunctionProtoSymbolToStringTagDeclaration from "../constructor/symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  asyncFunctionProtoSymbolToStringTagDeclaration,
];

export function populateAsyncFunctionPrototype(
  realm: StaticJsRealm,
  asyncFunctionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, asyncFunctionProto, declarations);
}
