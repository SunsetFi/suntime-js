import type { StaticJsRealm } from "../../../realm/index.js";
import type { StaticJsObject } from "../../../types/index.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import { applyIntrinsicProperties } from "../../utils.js";

import objectProtoHasOwnPropertyDeclaration from "./hasOwnProperty.js";
import objectProtoToStringDeclaration from "./toString.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  objectProtoToStringDeclaration,
  objectProtoHasOwnPropertyDeclaration,
];

export default function populateObjectPrototype(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, objectProto, declarations, functionProto);
}
