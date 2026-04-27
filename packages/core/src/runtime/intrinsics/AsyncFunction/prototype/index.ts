import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, IntrinsicPropertyDeclaration } from "../../utils.js";

import { asyncFunctionProtoToStringTagDeclaration } from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [asyncFunctionProtoToStringTagDeclaration];

export function populateAsyncFunctionPrototype(
  realm: StaticJsRealm,
  asyncFunctionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, asyncFunctionProto, declarations);
}
