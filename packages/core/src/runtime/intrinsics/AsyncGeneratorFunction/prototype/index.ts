import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import asyncGeneratorProtoPrototypeDeclaration from "./prototype.js";
import asyncGeneratorFunctionProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  asyncGeneratorProtoPrototypeDeclaration,
  asyncGeneratorFunctionProtoSymbolToStringTagDeclaration,
];

export default function populateAsyncGeneratorFunctionPrototype(
  realm: StaticJsRealm,
  asyncGeneratorProto: StaticJsPlainObject,
): void {
  applyIntrinsicProperties(realm, asyncGeneratorProto, declarations);

  asyncGeneratorProto.defineOwnPropertySync("constructor", {
    value: asyncGeneratorProto,
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
