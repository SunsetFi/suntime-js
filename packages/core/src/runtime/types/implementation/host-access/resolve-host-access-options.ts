import {
  AllHostAccessStubTypes,
  HostAccessStubType,
  type HostAccessArg,
  type HostAccessChildOptions,
  type HostAccessOptions,
} from "../../HostAccessOptions.js";

export type ResolvedHostAccessOptions = Omit<
  Required<HostAccessOptions>,
  "childPolicy" | "stubWellKnownTypes"
> & {
  childPolicy: HostAccessChildOptions | undefined;
  stubWellKnownTypes: readonly HostAccessStubType[];
};

export const SAFE_DEFAULTS: ResolvedHostAccessOptions = {
  walkPrototype: false,
  includeNonEnumerable: false,
  writable: false,
  extensible: false,
  useSandboxThis: false,
  rawPrototypes: false,
  childPolicy: undefined,
  stubWellKnownTypes: AllHostAccessStubTypes,
};

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

  return {
    ...SAFE_DEFAULTS,
    ...restOpts,
    childPolicy: opts.childPolicy,
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
    const result = opts(rootHostObj);

    if (result === "inherit") {
      return resolveHostAccessOptions(realmDefault);
    } else if (result === false) {
      return SAFE_DEFAULTS;
    }

    return resolveHostAccessOptions(result);
  }

  return resolveHostAccessOptions(opts);
}

export function applyChildPolicy(
  parent: ResolvedHostAccessOptions,
  childHostObj: object,
): ResolvedHostAccessOptions {
  if (!parent.childPolicy) {
    return SAFE_DEFAULTS;
  }

  if (parent.childPolicy === "inherit") {
    return parent;
  }

  const result = parent.childPolicy(childHostObj);
  if (result === "inherit") {
    return parent;
  }
  if (result === false || result == null) {
    return SAFE_DEFAULTS;
  }

  return resolveHostAccessOptions(result);
}
