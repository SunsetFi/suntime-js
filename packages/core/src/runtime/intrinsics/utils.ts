import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike, StaticJsObjectPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

export interface IntrinsicPropertyDeclarationBase {
  key: StaticJsObjectPropertyKey | ((realm: StaticJsRealm) => StaticJsObjectPropertyKey);
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
}

export interface FunctionIntrinsicPropertyDeclaration extends IntrinsicPropertyDeclarationBase {
  func: (
    realm: StaticJsRealm,
    thisArg: StaticJsValue,
    ...args: (StaticJsValue | undefined)[]
  ) => EvaluationGenerator<StaticJsValue>;
}
function isFunctionIntrinsicPropertyDeclaration(
  prop: IntrinsicPropertyDeclaration,
): prop is FunctionIntrinsicPropertyDeclaration {
  return "func" in prop;
}

export interface DataIntrinsicPropertyDeclaration extends IntrinsicPropertyDeclarationBase {
  value: StaticJsValue | ((realm: StaticJsRealm) => StaticJsValue);
}
function isDataIntrinsicPropertyDeclaration(
  prop: IntrinsicPropertyDeclaration,
): prop is DataIntrinsicPropertyDeclaration {
  return "value" in prop;
}

export interface AccessorIntrinsicPropertyDeclaration extends IntrinsicPropertyDeclarationBase {
  get?: (realm: StaticJsRealm, thisArg: StaticJsValue) => EvaluationGenerator<StaticJsValue>;
  set?: (
    realm: StaticJsRealm,
    thisArg: StaticJsValue,
    value: StaticJsValue,
  ) => EvaluationGenerator<StaticJsValue>;
}

function isAccessorIntrinsicPropertyDeclaration(
  prop: IntrinsicPropertyDeclaration,
): prop is AccessorIntrinsicPropertyDeclaration {
  return "get" in prop || "set" in prop;
}

export type IntrinsicPropertyDeclaration =
  | FunctionIntrinsicPropertyDeclaration
  | DataIntrinsicPropertyDeclaration
  | AccessorIntrinsicPropertyDeclaration;

export function applyIntrinsicProperties(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
  properties: IntrinsicPropertyDeclaration[],
) {
  for (const prop of properties) {
    let key: StaticJsObjectPropertyKey;
    if (typeof prop.key === "function") {
      key = prop.key(realm);
    } else {
      key = prop.key;
    }

    if (isFunctionIntrinsicPropertyDeclaration(prop)) {
      let name: string | undefined = undefined;
      if (typeof key === "string") {
        name = key;
      } else if (isStaticJsSymbol(key)) {
        name = `Symbol(${key.description})`;
      }

      const func = (thisArg: StaticJsValue, ...args: (StaticJsValue | undefined)[]) =>
        prop.func(realm, thisArg, ...args);

      obj.defineOwnPropertySync(key, {
        value: new StaticJsFunctionImpl(realm, name ?? "anonymous", func),
        enumerable: prop.enumerable ?? false,
        configurable: prop.configurable ?? true,
        writable: prop.writable ?? true,
      });
    } else if (isDataIntrinsicPropertyDeclaration(prop)) {
      obj.defineOwnPropertySync(key, {
        value: typeof prop.value === "function" ? prop.value(realm) : prop.value,
        enumerable: prop.enumerable ?? false,
        configurable: prop.configurable ?? false,
        writable: prop.writable ?? false,
      });
    } else if (isAccessorIntrinsicPropertyDeclaration(prop)) {
      obj.defineOwnPropertySync(key, {
        get: prop.get
          ? new StaticJsFunctionImpl(realm, "get", (thisArg) => prop.get!(realm, thisArg))
          : undefined,
        set: prop.set
          ? new StaticJsFunctionImpl(realm, "set", (thisArg, value) =>
              prop.set!(realm, thisArg, value),
            )
          : undefined,
        enumerable: prop.enumerable ?? false,
        configurable: prop.configurable ?? true,
      });
    } else {
      throw new Error("Intrinsic property declaration must have a function property");
    }
  }
}
