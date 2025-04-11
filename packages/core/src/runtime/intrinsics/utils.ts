import EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import { StaticJsRealm } from "../realm/index.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import { StaticJsObjectLike } from "../types/interfaces/StaticJsObject.js";
import { StaticJsValue } from "../types/interfaces/StaticJsValue.js";

export interface IntrinsicPropertyDeclarationBase {
  name: string;
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
}
export interface FunctioinIntrinsicPropertyDeclaration
  extends IntrinsicPropertyDeclarationBase {
  func: (
    realm: StaticJsRealm,
    thisArg: StaticJsValue,
    ...args: (StaticJsValue | undefined)[]
  ) => EvaluationGenerator;
}

export type IntrinsicPropertyDeclaration =
  FunctioinIntrinsicPropertyDeclaration;

export function applyIntrinsicProperties(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
  properties: IntrinsicPropertyDeclaration[],
  functionProto: StaticJsObjectLike,
) {
  for (const prop of properties) {
    if (prop.func) {
      obj.defineProperty(prop.name, {
        value: new StaticJsFunctionImpl(
          realm,
          prop.name,
          (...args) => prop.func(realm, ...args),
          {
            prototype: functionProto,
          },
        ),
        enumerable: prop.enumerable ?? false,
        configurable: prop.configurable ?? true,
        writable: prop.writable ?? true,
      });
    } else {
      throw new Error(
        "Intrinsic property declaration must have a function property",
      );
    }
  }
}
