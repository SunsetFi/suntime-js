import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import {
  AllHostAccessStubTypes,
  HostAccessOptionKeys,
  HostAccessQueryResult,
  HostAccessStubType,
  type HostAccessArg,
  type HostAccessOptions,
} from "../../HostAccessOptions.js";

export type ResolvedHostAccessOptions = Omit<Required<HostAccessOptions>, "stubWellKnownTypes"> & {
  stubWellKnownTypes: readonly HostAccessStubType[];
};

export const SAFE_DEFAULTS: ResolvedHostAccessOptions = {
  walkPrototype: false,
  includeNonEnumerable: false,
  includeWellKnownSymbols: true,
  writable: false,
  extensible: false,
  useSandboxThis: false,
  rawPrototypes: false,
  childPolicy: "default",
  stubWellKnownTypes: AllHostAccessStubTypes,
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
): ResolvedHostAccessOptions {
  if (opts === undefined) {
    return resolveHostAccessOptions(realmDefault);
  }

  if (typeof opts === "function") {
    const realmDefaultResolved = resolveHostAccessOptions(realmDefault);
    const result = opts(rootHostObj);
    if (result === "default") {
      return realmDefaultResolved;
    }

    return resolveHostAccessOptions(result);
  }
  return resolveHostAccessOptions(opts);
}

export function applyChildPolicy(
  parent: ResolvedHostAccessOptions,
  childHostObj: object,
  realmDefaults: HostAccessOptions | undefined,
): ResolvedHostAccessOptions | false {
  const { childPolicy } = parent;
  if (typeof childPolicy === "function") {
    const result = childPolicy(childHostObj);
    return applyPolicyResult(parent, result, realmDefaults);
  }

  return applyPolicyResult(parent, childPolicy ?? false, realmDefaults);
}

function applyPolicyResult(
  parent: ResolvedHostAccessOptions,
  result: HostAccessQueryResult,
  realmDefaults: HostAccessOptions | undefined,
): ResolvedHostAccessOptions | false {
  if (result === false) {
    return false;
  }

  if (result === "inherit") {
    return parent;
  }

  if (result && typeof result === "object") {
    return resolveHostAccessOptions(result);
  }

  if (result === "default" || result === undefined) {
    return resolveHostAccessOptions(realmDefaults);
  }

  throw new StaticJsEngineError(`Invalid HostAccessQueryResult: ${result}`);
}
