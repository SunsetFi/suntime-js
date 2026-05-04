import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import { errorProtoMessageDeclaration } from "./message.js";
import { errorProtoNameDeclaration } from "./name.js";
import errorProtoToStringDeclaration from "./toString.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  errorProtoMessageDeclaration,
  errorProtoNameDeclaration,
  errorProtoToStringDeclaration,
];

export default function populateErrorPrototype(realm: StaticJsRealm, errorProto: StaticJsObject) {
  applyIntrinsicProperties(realm, errorProto, declarations);
}
