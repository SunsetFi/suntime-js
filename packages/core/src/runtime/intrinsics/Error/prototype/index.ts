import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import errorProtoToStringDeclaration from "./toString.js";

const declarations: IntrinsicPropertyDeclaration[] = [errorProtoToStringDeclaration];

export default function populateErrorPrototype(
  realm: StaticJsRealm,
  errorProto: StaticJsPlainObject,
) {
  applyIntrinsicProperties(realm, errorProto, declarations);
}
