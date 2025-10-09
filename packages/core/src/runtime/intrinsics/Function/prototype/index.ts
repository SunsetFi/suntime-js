import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { Prototypes, IntrinsicSymbols } from "../../intrinsics.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import functionProtoApplyDeclaration from "./apply.js";
import functionProtoBindDeclaration from "./bind.js";
import functionProtoCallDeclaration from "./call.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  functionProtoApplyDeclaration,
  functionProtoBindDeclaration,
  functionProtoCallDeclaration,
];

function populateFunctionPrototype(
  realm: StaticJsRealm,
  functionProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  applyIntrinsicProperties(
    realm,
    functionProto,
    declarations,
    prototypes,
    intrinsicSymbols,
  );
}

export default populateFunctionPrototype;
