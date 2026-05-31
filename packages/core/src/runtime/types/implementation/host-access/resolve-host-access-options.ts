import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import {
  AllHostAccessStubTypes,
  HostAccessChildOptions,
  HostAccessOptionKeys,
  HostAccessQueryResult,
  HostAccessStubType,
  type HostAccessArg,
  type HostAccessOptions,
} from "../../HostAccessOptions.js";
import { isStaticJsValue, StaticJsValue } from "../../StaticJsValue.js";

export type ResolvedHostAccessOptions = Omit<Required<HostAccessOptions>, "stubWellKnownTypes"> & {
  stubWellKnownTypes: readonly HostAccessStubType[];
};

export const SAFE_DEFAULTS: ResolvedHostAccessOptions = {
  stubWellKnownTypes: AllHostAccessStubTypes,
  includeNonEnumerable: false,
  includeWellKnownSymbols: true,
  writable: false,
  extensible: false,
  useSandboxThis: false,
  rawPrototypes: false,
  prototypePolicy: false,
  childPolicy: "default",
};

const allowedHostAccessOptionKeys = new Set(HostAccessOptionKeys);
export function resolveHostAccessOptions(
  opts: HostAccessOptions | undefined,
): ResolvedHostAccessOptions {
  if (!opts) {
    return SAFE_DEFAULTS;
  }

  const { stubWellKnownTypes: optsStubWellKnownTypes, ...restOpts } = opts;

  let stubWellKnownTypes: readonly HostAccessStubType[] = SAFE_DEFAULTS.stubWellKnownTypes;
  if (optsStubWellKnownTypes === true) {
    // Default
  } else if (optsStubWellKnownTypes === false) {
    stubWellKnownTypes = [];
  } else if (Array.isArray(optsStubWellKnownTypes)) {
    stubWellKnownTypes = optsStubWellKnownTypes;
  } else if (optsStubWellKnownTypes !== undefined) {
    throw new TypeError(
      `Invalid value for stubWellKnownTypes: ${optsStubWellKnownTypes}. Expected boolean or array of HostAccessStubType.`,
    );
  }

  if (
    Object.keys(restOpts).some(
      (key) => !allowedHostAccessOptionKeys.has(key as (typeof HostAccessOptionKeys)[number]),
    )
  ) {
    throw new TypeError(
      `Invalid HostAccessOptions keys: ${Object.keys(restOpts)
        .filter(
          (key) => !allowedHostAccessOptionKeys.has(key as (typeof HostAccessOptionKeys)[number]),
        )
        .join(", ")}. Allowed keys are: ${AllHostAccessStubTypes.join(", ")}`,
    );
  }

  return {
    ...SAFE_DEFAULTS,
    ...restOpts,
    stubWellKnownTypes,
  };
}

export function resolveRootLevelHostAccessArg(
  opts: HostAccessArg | undefined,
  realmDefault: HostAccessOptions | undefined,
  rootHostObj: object,
): ResolvedHostAccessOptions | StaticJsValue {
  if (opts === undefined) {
    return resolveHostAccessOptions(realmDefault);
  }

  if (typeof opts === "function") {
    const realmDefaultResolved = resolveHostAccessOptions(realmDefault);
    const result = opts(rootHostObj);
    if (result === "default") {
      return realmDefaultResolved;
    }
    if (isStaticJsValue(result)) {
      return result;
    }

    return resolveHostAccessOptions(result);
  }
  return resolveHostAccessOptions(opts);
}

export function applyChildPolicyQuery(
  parent: ResolvedHostAccessOptions,
  child: HostAccessChildOptions,
  hostObj: object,
  realmDefaults: HostAccessOptions | undefined,
): ResolvedHostAccessOptions | StaticJsValue | false {
  if (typeof child === "function") {
    const result = child(hostObj);
    return applyQueryResult(parent, result, realmDefaults);
  }

  return applyQueryResult(parent, child ?? "inherit", realmDefaults);
}

function applyQueryResult(
  parent: ResolvedHostAccessOptions,
  result: HostAccessQueryResult,
  realmDefaults: HostAccessOptions | undefined,
): ResolvedHostAccessOptions | StaticJsValue | false {
  if (result === false) {
    return false;
  }

  if (result === true || result === "inherit") {
    return parent;
  }

  if (result === "default") {
    return resolveHostAccessOptions(realmDefaults);
  }

  if (isStaticJsValue(result)) {
    return result;
  }

  if (result && typeof result === "object") {
    return resolveHostAccessOptions(result);
  }

  throw new StaticJsEngineError(`Invalid HostAccessQueryResult: ${result}`);
}
