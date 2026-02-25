import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import functionProtoApplyDeclaration from "./apply.js";
import functionProtoBindDeclaration from "./bind.js";
import functionProtoCallDeclaration from "./call.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  functionProtoApplyDeclaration,
  functionProtoBindDeclaration,
  functionProtoCallDeclaration,
];

function populateFunctionPrototype(realm: StaticJsRealm, functionProto: StaticJsObject) {
  applyIntrinsicProperties(realm, functionProto, declarations);
}

export default populateFunctionPrototype;
