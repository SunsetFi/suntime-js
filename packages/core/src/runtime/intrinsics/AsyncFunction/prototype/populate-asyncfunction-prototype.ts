import type { StaticJsObject } from "../../../../types/StaticJsObject.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import { asyncFunctionProtoToStringTagDeclaration } from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [asyncFunctionProtoToStringTagDeclaration];

export function* populateAsyncFunctionPrototype(
  realm: StaticJsRealm,
  asyncFunctionProto: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, asyncFunctionProto, declarations);
}
