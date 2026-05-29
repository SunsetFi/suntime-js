/**
 * Policy controlling how a host JavaScript object is exposed to a
 * StaticJsRealm sandbox via `StaticJsTypeFactory.toStaticJsValue`.
 *
 * Default behavior (no options, or all fields false) reproduces the
 * locked-down view: own enumerable properties only, read-only, no
 * prototype walk, sandbox's `Object.prototype`.
 */
export interface HostAccessOptions {
  /**
   * Walk the host object's prototype chain when answering property lookups.
   *
   * When false, the sandbox-visible [[Prototype]] is always the realm's
   * Object.prototype, regardless of the host object's actual prototype
   * (including null).
   */
  walkPrototype?: boolean;

  /** Expose non-enumerable own properties (e.g. ES class methods). */
  includeNonEnumerable?: boolean;

  /**
   * Allow sandbox writes to mutate the host object.
   * If true, the sandbox can modify data properties on the host.
   * If false, the sandbox cannot modify data properties.
   * If "transparent", the sandbox can modify data properties, but those modifications are not reflected back to the host (i.e. the wrapper stores its own copy of the data property value once it's written to).
   * */
  writable?: boolean | "transparent";

  /**
   * Allow the sandbox to add properties to the host object.
   * If true, the sandbox can add properties to the host object, and those properties are reflected back to the host.
   * If false, the sandbox cannot add properties to the host object.
   * If "transparent", the sandbox can add properties to the host object, but those properties are not reflected back to the host (i.e. the wrapper stores its own copy of the added property and value).
   */
  extensible?: boolean | "transparent";

  /**
   * When a host method is invoked from the sandbox, pass the sandbox-side
   * `this` (round-tripped to its backing host value) instead of the
   * captured backing object.
   */
  useSandboxThis?: boolean;

  /**
   * Opt out of substituting host builtin prototypes with the realm's
   * intrinsic equivalents. Default false; host builtin prototypes are
   * mapped to the matching sandbox intrinsic so host builtin identities
   * are never reachable from inside the sandbox.
   */
  rawPrototypes?: boolean;

  /**
   * Policy for objects reached transitively from this one (property
   * values, function return values, prototype-chain entries that are
   * themselves host objects).
   *
   * If "inherit", it will reuse the parent's resolved policy (sticky)
   * If false, safe / immutable defaults will be used.
   * If an object, the returned HostAccessOptions will be used for that child object and its descendants, unless overridden by a closer ancestor.
   * If a function, it will be invoked with the child host object to determine the policy. Decide on a per-object basis.
   *
   * childHostObj may be any non-primitive host value — plain object, host
   * function, host class instance, host prototype.
   *
   * Not consulted for the root object itself.
   */
  childPolicy?: HostAccessChildOptions;
}

/**
 * Query function to check whether the given host object should be exposed and at what level.
 * If "inherit", the host object is exposed at the level of its parent, or the realm default if no parent is involved.
 * If false, the host object is wrapped with safe defaults.
 * If an object, that child becomes a new sub-root governed by these options.
 */
export type HostAccessQueryFunction = (
  childHostObj: object,
) => "inherit" | false | HostAccessOptions;

/**
 * Policy for child host objects reached from a parent host object. See HostAccessOptions.childPolicy.
 * If inherit, the child uses the same policy as the parent (sticky).
 */
export type HostAccessChildOptions = "inherit" | false | HostAccessQueryFunction;

/**
 * Argument option for specifying host access level to a host object in the sandbox.
 */
export type HostAccessArg = HostAccessOptions | HostAccessQueryFunction;
