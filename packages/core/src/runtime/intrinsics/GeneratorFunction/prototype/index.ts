import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";
import generatorProtoPrototypeDeclaration from "./prototype.js";
import generatorFunctionProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  generatorProtoPrototypeDeclaration,
  generatorFunctionProtoSymbolToStringTagDeclaration,
];

export default function populateGeneratorFunctionPrototype(
  realm: StaticJsRealm,
  generatorProto: StaticJsObject,
): void {
  applyIntrinsicProperties(realm, generatorProto, declarations);

  generatorProto.defineOwnPropertySync("constructor", {
    value: generatorProto,
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
