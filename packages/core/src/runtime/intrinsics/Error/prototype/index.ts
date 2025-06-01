import type { StaticJsRealm } from "../../../realm/index.js";
import type { StaticJsObject } from "../../../types/index.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import { applyIntrinsicProperties } from "../../utils.js";

const declarations: IntrinsicPropertyDeclaration[] = [];

export default function populateErrorPrototype(
  realm: StaticJsRealm,
  errorProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, errorProto, declarations, functionProto);
}
