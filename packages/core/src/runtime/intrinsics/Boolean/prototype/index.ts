import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, IntrinsicPropertyDeclaration } from "../../utils.js";

import { booleanProtoToStringTagDeclaration } from "./symbol_toStringTag.js";
import { booleanProtoToStringDeclaration } from "./toString.js";
import { booleanProtoValueOfDeclaration } from "./valueOf.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  booleanProtoToStringTagDeclaration,
  booleanProtoToStringDeclaration,
  booleanProtoValueOfDeclaration,
];
export function populateBooleanPrototype(realm: StaticJsRealm, booleanProto: StaticJsObject) {
  applyIntrinsicProperties(realm, booleanProto, declarations);

  return booleanProto;
}
