import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";
import { addRestrictedFunctionProperties } from "../add-restricted-function-properties.js";

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
  // This is normally done at the end of the intrinsic chain,
  // but we aren't really compliant to that yet.
  addRestrictedFunctionProperties(functionProto, realm);
}

export default populateFunctionPrototype;
