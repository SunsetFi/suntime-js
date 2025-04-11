import { StaticJsRealm } from "../../../realm/index.js";
import { StaticJsObject } from "../../../types/index.js";
import {
  applyIntrinsicProperties,
  IntrinsicPropertyDeclaration,
} from "../../utils.js";

const declarations: IntrinsicPropertyDeclaration[] = [];

export default function populateErrorPrototype(
  realm: StaticJsRealm,
  errorProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, errorProto, declarations, functionProto);
}
