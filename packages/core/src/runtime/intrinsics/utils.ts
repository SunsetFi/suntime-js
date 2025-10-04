import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type {
  StaticJsObjectLike,
  StaticJsObjectPropertyKey,
} from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

import type { IntrinsicSymbols, Prototypes } from "./intrinsics.js";

export interface IntrinsicPropertyDeclarationContext {
  realm: StaticJsRealm;
  prototypes: Prototypes;
  symbols: IntrinsicSymbols;
}

export interface IntrinsicPropertyDeclarationBase {
  key:
    | StaticJsObjectPropertyKey
    | ((
        realm: StaticJsRealm,
        symbols: IntrinsicSymbols,
      ) => StaticJsObjectPropertyKey);
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

// FIXME: Remove the old one and make everything use this one.
export interface Function2IntrinsicPropertyDeclaration
  extends IntrinsicPropertyDeclarationBase {
  func2(
    context: IntrinsicPropertyDeclarationContext,
    thisArg: StaticJsValue,
    ...args: (StaticJsValue | undefined)[]
  ): EvaluationGenerator;
}
function isFunction2IntrinsicPropertyDeclaration(
  prop: IntrinsicPropertyDeclaration,
): prop is Function2IntrinsicPropertyDeclaration {
  return "func2" in prop;
}

export interface DataIntrinsicPropertyDeclaration
  extends IntrinsicPropertyDeclarationBase {
  value: StaticJsValue | ((realm: StaticJsRealm) => StaticJsValue);
}
function isDataIntrinsicPropertyDeclaration(
  prop: IntrinsicPropertyDeclaration,
): prop is DataIntrinsicPropertyDeclaration {
  return "value" in prop;
}

export interface AccessorIntrinsicPropertyDeclaration
  extends IntrinsicPropertyDeclarationBase {
  get?: (realm: StaticJsRealm, thisArg: StaticJsValue) => EvaluationGenerator;
  set?: (
    realm: StaticJsRealm,
    thisArg: StaticJsValue,
    value: StaticJsValue,
  ) => EvaluationGenerator;
}

function isAccessorIntrinsicPropertyDeclaration(
  prop: IntrinsicPropertyDeclaration,
): prop is AccessorIntrinsicPropertyDeclaration {
  return "get" in prop || "set" in prop;
}

export type IntrinsicPropertyDeclaration =
  | FunctionIntrinsicPropertyDeclaration
  | Function2IntrinsicPropertyDeclaration
  | DataIntrinsicPropertyDeclaration
  | AccessorIntrinsicPropertyDeclaration;

export function applyIntrinsicProperties(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
  properties: IntrinsicPropertyDeclaration[],
  prototypes: Prototypes,
  symbols: IntrinsicSymbols,
) {
  for (const prop of properties) {
    let key: StaticJsObjectPropertyKey;
    if (typeof prop.key === "function") {
      key = prop.key(realm, symbols);
    } else {
      key = prop.key;
    }

    if (
      isFunctionIntrinsicPropertyDeclaration(prop) ||
      isFunction2IntrinsicPropertyDeclaration(prop)
    ) {
      let name: string | undefined = undefined;
      if (typeof key === "string") {
        name = key;
      } else if (isStaticJsSymbol(key)) {
        name = `Symbol(${key.description})`;
      }

      let func: (
        thisArg: StaticJsValue,
        ...args: (StaticJsValue | undefined)[]
      ) => EvaluationGenerator;
      if (isFunctionIntrinsicPropertyDeclaration(prop)) {
        func = (...args) => prop.func(realm, ...args);
      } else {
        func = (thisArg, ...args) =>
          prop.func2({ realm, prototypes, symbols }, thisArg, ...args);
      }

      obj.definePropertySync(key, {
        value: new StaticJsFunctionImpl(realm, name ?? "anonymous", func, {
          prototype: prototypes.functionProto,
        }),
        enumerable: prop.enumerable ?? false,
        configurable: prop.configurable ?? true,
        writable: prop.writable ?? true,
      });
    } else if (isDataIntrinsicPropertyDeclaration(prop)) {
      obj.definePropertySync(key, {
        value:
          typeof prop.value === "function" ? prop.value(realm) : prop.value,
        enumerable: prop.enumerable ?? false,
        configurable: prop.configurable ?? false,
        writable: prop.writable ?? false,
      });
    } else if (isAccessorIntrinsicPropertyDeclaration(prop)) {
      obj.definePropertySync(key, {
        get: prop.get
          ? new StaticJsFunctionImpl(
              realm,
              "get",
              (thisArg) => prop.get!(realm, thisArg),
              {
                prototype: prototypes.functionProto,
              },
            )
          : undefined,
        set: prop.set
          ? new StaticJsFunctionImpl(
              realm,
              "set",
              (thisArg, value) => prop.set!(realm, thisArg, value),
              {
                prototype: prototypes.functionProto,
              },
            )
          : undefined,
        enumerable: prop.enumerable ?? false,
        configurable: prop.configurable ?? true,
      });
    } else {
      throw new Error(
        "Intrinsic property declaration must have a function property",
      );
    }
  }
}
