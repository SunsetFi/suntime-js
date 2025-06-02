import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

export interface IntrinsicPropertyDeclarationBase {
  name: string;
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
}

export interface FunctionIntrinsicPropertyDeclaration
  extends IntrinsicPropertyDeclarationBase {
  func: (
    realm: StaticJsRealm,
    thisArg: StaticJsValue,
    ...args: (StaticJsValue | undefined)[]
  ) => EvaluationGenerator;
}
function isFunctionIntrinsicPropertyDeclaration(
  prop: IntrinsicPropertyDeclaration,
): prop is FunctionIntrinsicPropertyDeclaration {
  return "func" in prop;
}

export interface DataIntrinsicPropertyDeclaration
  extends IntrinsicPropertyDeclarationBase {
  value: StaticJsValue;
}
function isDataIntrinsicPropertyDeclaration(
  prop: IntrinsicPropertyDeclaration,
): prop is DataIntrinsicPropertyDeclaration {
  return "value" in prop;
}

export type IntrinsicPropertyDeclaration =
  | FunctionIntrinsicPropertyDeclaration
  | DataIntrinsicPropertyDeclaration;

export function applyIntrinsicProperties(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
  properties: IntrinsicPropertyDeclaration[],
  functionProto: StaticJsObjectLike,
) {
  for (const prop of properties) {
    if (isFunctionIntrinsicPropertyDeclaration(prop)) {
      obj.definePropertySync(prop.name, {
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
    } else if (isDataIntrinsicPropertyDeclaration(prop)) {
      obj.definePropertySync(prop.name, {
        value: prop.value,
        enumerable: prop.enumerable ?? false,
        configurable: prop.configurable ?? false,
        writable: prop.writable ?? false,
      });
    } else {
      throw new Error(
        "Intrinsic property declaration must have a function property",
      );
    }
  }
}
