import { StaticJsObject } from "../../primitives/index.js";
import StaticJsEnvRealm, {
  StaticJsEnvRealmOptions,
} from "../implementation/StaticJsEnvRealm.js";
import { StaticJsRealm as IStaticJsRealm } from "../interfaces/index.js";

export interface StaticJsRealmGlobalDeclProperty {
  value: unknown;
  // TODO:
  // writable?: boolean;
  // enumerable?: boolean;
  // configurable?: boolean;
}
export interface StaticJsRealmGlobalDeclExplicit {
  properties?: Record<string, StaticJsRealmGlobalDeclProperty>;
}

export interface StaticJsRealmGlobalObjectDecl {
  value: Record<string, unknown>;
  static?: boolean;
  // TODO: More fine-grained control.
  // Pass array of writable properties, and per-property env-only vs writeback.
  writable?: boolean | "env-only" | "writeback";
}

export interface StaticJsRealmOptions {
  globalObjectDecl?: StaticJsRealmGlobalDeclExplicit;
  globalObject?: StaticJsRealmGlobalObjectDecl;
}

/**
 * Creates a StaticJsRealm
 * @param opts - Options for creating the realm.
 * @returns The created realm.
 * @public
 */
export default function StaticJsRealm({
  globalObject,
  globalObjectDecl,
}: StaticJsRealmOptions = {}): IStaticJsRealm {
  if (globalObject && globalObjectDecl) {
    throw new Error("Cannot provide both globalObject and globalObjectDecl.");
  }

  const opts: StaticJsEnvRealmOptions = {};

  if (globalObject) {
    if (!globalObject || typeof globalObject !== "object") {
      throw new Error("globalObject must be an object.");
    }

    const { value, static: isStatic, writable } = globalObject;
    if (!value || typeof value !== "object") {
      throw new Error("globalObject.value must be an object.");
    }

    opts.globalObject = {
      value: StaticJsObject(value, { static: isStatic, writable }),
    };
  } else if (globalObjectDecl) {
    if (globalObjectDecl.properties) {
      if (typeof globalObjectDecl.properties !== "object") {
        throw new Error("globalObjectDecl.properties must be an object.");
      }
      Object.entries(globalObjectDecl.properties).forEach(([name, prop]) => {
        if (!prop || typeof prop !== "object") {
          throw new Error(
            `globalObjectDecl.properties["${name}"] must be an object.`,
          );
        }
        if ("value" in prop === false) {
          throw new Error(
            `globalObjectDecl.properties["${name}"] must have a value.`,
          );
        }
      });

      opts.globalObject = { properties: globalObjectDecl.properties };
    }
  }

  return new StaticJsEnvRealm(opts);
}
