import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsPropertyDescriptorRecord } from "../types/StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export interface IntrinsicPropertyDeclarationBase {
  key: StaticJsPropertyKey | ((realm: StaticJsRealm) => StaticJsPropertyKey);
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
}

export interface FunctionIntrinsicPropertyDeclaration extends IntrinsicPropertyDeclarationBase {
  func: (
    realm: StaticJsRealm,
    thisArg: StaticJsValue,
    // FIXME: Remove undefined possibility and fill in undefines with sandbox undefined based on length
    ...args: (StaticJsValue | undefined)[]
  ) => EvaluationGenerator<StaticJsValue>;
  length?: number | ((realm: StaticJsRealm) => StaticJsPropertyDescriptorRecord);
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
  obj: StaticJsObject,
  properties: IntrinsicPropertyDeclaration[],
) {
  for (const prop of properties) {
    let key: StaticJsPropertyKey;
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
        // Just guessing based on the builtin tests
        // This seems to be what AsyncIteratorPrototype[Symbol.asyncIterator] expects.
        name = `[${key.description}]`;
      }

      const func = (thisArg: StaticJsValue, ...args: (StaticJsValue | undefined)[]) =>
        prop.func(realm, thisArg, ...args);

      const nativeFunc = new StaticJsNativeFunctionImpl(realm, name ?? "anonymous", func);
      let lengthDecl: StaticJsPropertyDescriptorRecord;
      if (prop.length == null) {
        lengthDecl = {
          // In practice, this is useless as recently we are using arg defaults for undefined.
          // We should instead set length manually.
          // TODO: We could flip this, consume prop.func.length, and stub in non-specified with undefined.
          value: realm.types.number(prop.func.length - 2),
          writable: false,
          enumerable: false,
          configurable: true,
        };
      } else if (typeof prop.length === "number") {
        lengthDecl = {
          value: realm.types.number(prop.length),
          writable: false,
          enumerable: false,
          configurable: true,
        };
      } else if (typeof prop.length === "function") {
        lengthDecl = prop.length(realm);
      } else {
        throw new Error("Invalid length declaration for intrinsic function property");
      }

      nativeFunc.defineOwnPropertySync("length", lengthDecl);

      obj.defineOwnPropertySync(key, {
        value: nativeFunc,
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
          ? new StaticJsNativeFunctionImpl(realm, "get", (thisArg) => prop.get!(realm, thisArg))
          : undefined,
        set: prop.set
          ? new StaticJsNativeFunctionImpl(realm, "set", (thisArg, value) =>
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
