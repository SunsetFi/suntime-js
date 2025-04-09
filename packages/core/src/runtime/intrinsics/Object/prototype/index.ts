import { StaticJsRealm } from "../../../realm/index.js";
import { StaticJsObject } from "../../../types/index.js";
import {
  applyIntrinsicProperties,
  IntrinsicPropertyDeclaration,
} from "../../utils.js";

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
