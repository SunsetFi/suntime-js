import type { StaticJsObject } from "../../../../types/StaticJsObject.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import { functionProtoApplyDeclaration } from "./apply.js";
import { functionProtoBindDeclaration } from "./bind.js";
import { functionProtoCallDeclaration } from "./call.js";
import { functionProtoLengthDeclaration } from "./length.js";
import { functionProtoSymbolHasInstanceDeclaration } from "./symbol_hasInstance.js";
import { functionProtoToStringDeclaration } from "./toString.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  functionProtoApplyDeclaration,
  functionProtoBindDeclaration,
  functionProtoCallDeclaration,
  functionProtoLengthDeclaration,
  functionProtoSymbolHasInstanceDeclaration,
  functionProtoToStringDeclaration,
];

export function* populateFunctionPrototype(realm: StaticJsRealm, functionProto: StaticJsObject) {
  yield* applyIntrinsicProperties(realm, functionProto, declarations);
}
