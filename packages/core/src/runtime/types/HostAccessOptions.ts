import { StaticJsValue } from "./StaticJsValue.js";

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
   * Whether to stub well-known host types (e.g. Array, Function) with sandbox-local equivalents that have the same identity as the realm intrinsics, so instanceof and prototype checks work as expected.
   * This defaults to true, as .toNative() on functions can appear non-functional without it.
   *
   * When turning this off, expect native arrays to be treated as plain objects with no array behavior, including lacking an iterator.  Usually, this should only be turned off
   * if you intend to enable prototypePolicy.
   *
   * Possible values:
   * - "array": Stub arrays into sandboxed arrays, invoking childPolicy for array items.
   * - "error": Stub Errors into sandboxed Errors, with message and name properties but no stack traces.
   *
   * Note that all stubs are read-only, regardless of the writable/extensible options.  The exception is functions, which will still invoke, but will invoke childPolicy for return values.
   * @default true
   */
  stubWellKnownTypes?: boolean | readonly HostAccessStubType[];

  /**
   * Expose non-enumerable own properties (e.g. ES class methods).
   *
   * Note: This applies to enumerable non-well-known symbols as well.
   *
   * @default false
   */
  includeNonEnumerable?: boolean;

  /**
   * Expose well-known symbols (e.g. Symbol.iterator) as property keys on host objects.
   * This defaults to true, to allow arrays and other items to iterate.  However, it typically
   * will not engage for most builtins without prototypePolicy.
   *
   * @default true
   */
  includeWellKnownSymbols?: boolean;

  /**
   * Allow sandbox writes to mutate the host object.
   * If true, the sandbox can modify data properties on the host.
   * If false, the sandbox cannot modify data properties.
   * If "transparent", the sandbox can modify data properties, but those modifications are not reflected back to the host (i.e. the wrapper stores its own copy of the data property value once it's written to).
   * @default false
   * */
  writable?: boolean | "transparent";

  /**
   * Allow the sandbox to add properties to the host object.
   * If true, the sandbox can add properties to the host object, and those properties are reflected back to the host.
   * If false, the sandbox cannot add properties to the host object.
   * If "transparent", the sandbox can add properties to the host object, but those properties are not reflected back to the host (i.e. the wrapper stores its own copy of the added property and value).
   * @default false
   */
  extensible?: boolean | "transparent";

  /**
   * When a host method is invoked from the sandbox, pass the sandbox-side
   * `this` (round-tripped to its backing host value) instead of the
   * captured backing object.
   * @default false
   */
  useSandboxThis?: boolean;

  /**
   * Policy for the prototype of the host object.
   *
   * If "inherit", it will reuse the parent's resolved policy.
   * If "default", the realm default policy is used.
   * If false, the sandbox-visible [[Prototype]] is always the realm's default prototype for the type (Object.prototype for objects, Function.prototype for functions, etc.),
   * regardless of the host object's actual prototype (including null).
   * If a StaticJsValue, the returned value will be used as the sandbox-visible [[Prototype]] for the host object, and the host object's actual prototype will not be visible in the sandbox.
   * If an object, the returned HostAccessOptions will be used for prototypes as well as own properties, and for their descendants, unless overridden by a closer ancestor.
   * If a function, it will be invoked with each prototype object to determine the policy.
   * @default false
   */
  prototypePolicy?: HostAccessChildOptions;

  /**
   * Policy for objects reached transitively from this one (property
   * values, function return values, prototype-chain entries that are
   * themselves host objects).
   *
   * If "inherit", it will reuse the parent's resolved policy.
   * If "default", the realm default policy is used.
   * If false, the child is not exposed — it resolves to `undefined`.
   * If an object, the returned HostAccessOptions will be used for that child object and its descendants, unless overridden by a closer ancestor.
   * If a function, it will be invoked with the child host object to determine the policy. Decide on a per-object basis.
   *
   * childHostValue may be any value reached from the parent host object, including property values and function return values.  Primitive values are included.
   * Note that returning false for a property will NOT hide it from the sandbox, but will instead resolve to undefined.
   *
   * Not consulted for the root object itself.
   * @default "default"
   */
  childPolicy?: HostAccessChildOptions;
}

export const HostAccessOptionKeys: readonly (keyof HostAccessOptions)[] = Object.freeze([
  "stubWellKnownTypes",
  "includeNonEnumerable",
  "includeWellKnownSymbols",
  "writable",
  "extensible",
  "useSandboxThis",
  "prototypePolicy",
  "childPolicy",
] as const);

export type HostAccessStubType = "array" | "error" | "promise";
export const AllHostAccessStubTypes = ["array", "error", "promise"] as const;

/*
 * Policy for host objects.
 * If "inherit", the child uses the same policy as the parent (sticky).
 * If "default", the child uses the realm default policy.
 * If "false", the child instead resolves to undefined.
 * If a StaticJsValue, the returned value will be used for the host object.
 * If an object, the returned HostAccessOptions will be used for that child object and its descendants, unless overridden by a closer ancestor.
 */
export type HostAccessQueryResult =
  | "inherit"
  | "default"
  | boolean
  | HostAccessOptions
  | StaticJsValue;

/**
 * Query function to check whether the given child of a host object should be exposed and at what level.
 * If "inherit", the child uses the same policy as the parent (sticky).
 * If "default", the child uses the realm default policy.
 * If false, the child is not exposed — it resolves to `undefined`.
 * If an object, that child becomes a new sub-root governed by these options.
 */
export type HostAccessQueryFunction = (childHostValue: unknown) => HostAccessQueryResult;

/**
 * Policy for child host objects reached from a parent host object. See HostAccessOptions.childPolicy.
 * If "inherit", the child uses the same policy as the parent (sticky).
 * If "default", the child uses the realm default policy.
 * If "false", the child instead resolves to undefined.
 * If a function, it will be invoked with the child host object to determine the policy. Decide on a per-object basis.
 */
export type HostAccessChildOptions = HostAccessQueryResult | HostAccessQueryFunction;

/**
 * Query function to check whether the given host object should be exposed and at what level.
 * If "default", the realm's defaults are used.
 * If a StaticJsValue, the returned value will be used for the host object.
 * If an object, that host object becomes a new root governed by these options.
 */
export type HostAccessRootQueryFunction = (
  childHostObj: unknown,
) => "default" | HostAccessOptions | StaticJsValue;

/**
 * Argument option for specifying host access level to a host object in the sandbox.
 */
export type HostAccessArg = HostAccessOptions | HostAccessRootQueryFunction;
