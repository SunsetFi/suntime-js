import type {
  HostAccessArg,
  HostAccessChildPolicy,
  HostAccessOptions,
} from "../../HostAccessOptions.js";

export type ResolvedHostAccessOptions = Omit<Required<HostAccessOptions>, "childPolicy"> & {
  childPolicy: HostAccessChildPolicy | undefined;
};

export const SAFE_DEFAULTS: Omit<ResolvedHostAccessOptions, "childPolicy"> = {
  walkPrototype: false,
  includeNonEnumerable: false,
  writable: false,
  extensible: false,
  useSandboxThis: false,
  rawPrototypes: false,
};

export const RESOLVED_SAFE_DEFAULTS: ResolvedHostAccessOptions = {
  ...SAFE_DEFAULTS,
  childPolicy: undefined,
};

function mergeOver(base: typeof SAFE_DEFAULTS, opts: HostAccessOptions): ResolvedHostAccessOptions {
  return {
    ...base,
    ...opts,
    childPolicy: opts.childPolicy,
  };
}

export function resolveHostAccessOptions(
  opts: HostAccessArg | undefined,
  realmDefault: HostAccessOptions | undefined,
  rootHostObj: object,
): ResolvedHostAccessOptions {
  if (opts === undefined) {
    return realmDefault ? mergeOver(SAFE_DEFAULTS, realmDefault) : RESOLVED_SAFE_DEFAULTS;
  }

  if (typeof opts === "function") {
    const result = opts(rootHostObj);

    if (result === "inherit") {
      return realmDefault ? mergeOver(SAFE_DEFAULTS, realmDefault) : RESOLVED_SAFE_DEFAULTS;
    } else if (result === false) {
      return RESOLVED_SAFE_DEFAULTS;
    }

    return mergeOver(SAFE_DEFAULTS, result);
  }

  return mergeOver(SAFE_DEFAULTS, opts);
}

export function applyChildPolicy(
  parent: ResolvedHostAccessOptions,
  childHostObj: object,
): ResolvedHostAccessOptions {
  if (!parent.childPolicy) {
    return RESOLVED_SAFE_DEFAULTS;
  }

  if (parent.childPolicy === "inherit") {
    return parent;
  }

  const result = parent.childPolicy(childHostObj);
  if (result === "inherit") {
    return parent;
  }
  if (result === false || result == null) {
    return RESOLVED_SAFE_DEFAULTS;
  }

  return mergeOver(SAFE_DEFAULTS, result);
}
