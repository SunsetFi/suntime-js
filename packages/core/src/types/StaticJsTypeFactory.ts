import type { MaybeEvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { IntrinsicSymbols } from "../runtime/intrinsics/intrinsics.js";

import type { HostAccessArg } from "./HostAccessOptions.js";
import type { StaticJsArray } from "./StaticJsArray.js";
import type { StaticJsBoolean } from "./StaticJsBoolean.js";
import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsNull } from "./StaticJsNull.js";
import type { StaticJsNumber } from "./StaticJsNumber.js";
import type { StaticJsObject } from "./StaticJsObject.js";
import type { StaticJsPlainObject } from "./StaticJsPlainObject.js";
import type { StaticJsPropertyDescriptorRecord } from "./StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "./StaticJsPropertyKey.js";
import type { StaticJsProxy, StaticJsProxyHandlers, StaticJsProxyTarget } from "./StaticJsProxy.js";
import type { StaticJsString } from "./StaticJsString.js";
import type { StaticJsSymbol } from "./StaticJsSymbol.js";
import type { StaticJsUndefined } from "./StaticJsUndefined.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import type { WellKnownErrorName } from "./well-known-errors.js";

export type StaticJsTypeCreationPrototype = StaticJsObject | StaticJsNull | null;

export interface StaticJsFunctionTypeCreationOptions {
  isConstructor?: boolean;
  length?: number;
  prototype?: StaticJsTypeCreationPrototype;
}

export interface StaticJsTypeFactory {
  /**
   * Well-defined symbols.
   */
  readonly symbols: IntrinsicSymbols;

  /**
   * The symbol registry for `Symbol.for` and `Symbol.keyFor`.
   */
  readonly symbolRegistry: Map<string, StaticJsSymbol>;

  /**
   * JavaScript primitive `undefined`.
   */
  readonly undefined: StaticJsUndefined;

  /**
   * JavaScript primitive `null`.
   */
  readonly null: StaticJsNull;

  /**
   * JavaScript boolean `true`.
   */
  readonly true: StaticJsBoolean;
  /**
   * JavaScript boolean `false`.
   */
  readonly false: StaticJsBoolean;

  /**
   * JavaScript number `0`.
   */
  readonly zero: StaticJsNumber;
  /**
   * JavaScript number `NaN`.
   */
  readonly NaN: StaticJsNumber;
  /**
   * JavaScript number `Infinity`.
   */
  readonly Infinity: StaticJsNumber;

  /**
   * Gets the sandboxed JavaScript value for the given boolean.
   *
   * The returned instances will be consistent for both true and false, and
   * will be the same as the {@link StaticJsTypeFactory.true} and {@link StaticJsTypeFactory.false} properties.
   * @returns Either {@link StaticJsTypeFactory.true} or {@link StaticJsTypeFactory.false} depending on the input value.
   * @param value The boolean value to convert.
   */
  boolean(value: boolean): StaticJsBoolean;

  /**
   * Gets the sandboxed JavaScript value for the given number.
   *
   * Note that the returned references are not consistent for the same numbers.
   * To compare two StaticJsNumber values, use their {@link StaticJsNumber["value"]} property.
   * @returns The StaticJsNumber representing the given number.
   * @param value The number value to convert.
   */
  number(value: number): StaticJsNumber;

  /**
   * Gets the sandboxed JavaScript value for the given string.
   *
   * Note that the returned references are not consistent for the same strings.
   * To compare two StaticJsString values, use their {@link StaticJsString["value"]} property.
   * @returns The StaticJsString representing the given string.
   * @param value The string value to convert.
   */
  string(value: string): StaticJsString;

  /**
   * Gets the sandboxed JavaScript symbol for the given description.
   *
   * This will return consistent references for the same symbol input, but will
   * create new symbols for string descriptions.
   *
   * For well-known symbols, this will return the same references as the {@link StaticJsTypeFactory.symbols} property.
   * @param description The symbol or string description to convert.
   * @returns The corresponding StaticJsSymbol.
   * @see StaticJsTypeFactory.symbols
   */
  symbol(description?: string | symbol): StaticJsSymbol;

  /**
   * Create a plain sandboxed object.
   * @param properties The property descriptors to define on the object.
   * @param prototype The prototype to set for the object.
   */
  object(
    properties?:
      | Record<string, StaticJsPropertyDescriptorRecord>
      | Map<StaticJsPropertyKey, StaticJsPropertyDescriptorRecord>,
    prototype?: StaticJsTypeCreationPrototype,
  ): StaticJsPlainObject;

  /**
   * Create a plain sandbox array with the given items or length.
   * @param itemsOrLength The items to include in the array, or the length of the array to create.
   */
  array(itemsOrLength?: StaticJsValue[] | number): StaticJsArray;

  /**
   * Create a sandboxed function with the given name, implementation, and options.
   *
   * Important: If you are going to call into other StaticJs methods from your function,
   * you SHOULD use a generator function implementation and yield *Evaluator calls.
   * Doing so will allow your function to properly participate in the task system, and avoid potential issues with long-running or unbounded computations.
   * @param name The name of the function.
   * @param func The implementation of the function, which will be called with the sandboxed `this` value and arguments, and can return either a StaticJsValue directly, or an EvaluationGenerator for functions that participate in tasks.
   * @param opts The options for creating the function.
   * @see EvaluationGenerator
   */
  function(
    name: string,
    func: (
      this: StaticJsValue,
      ...args: StaticJsValue[]
    ) => MaybeEvaluationGenerator<StaticJsValue>,
    opts?: StaticJsFunctionTypeCreationOptions,
  ): StaticJsFunction;

  /**
   * Create a well-known error object with the given message.
   * @param errorType The type of the well-known error.
   * @param message The error message.
   * @returns A StaticJsObject representing the error, with the appropriate prototype and properties for the given error type.
   */
  error(errorType: WellKnownErrorName, message: string): StaticJsObject;

  /**
   * Create a generic error object with the given message.
   * @param message The error message.
   * @returns A StaticJsObject representing the error, with the appropriate prototype and properties for a generic Error.
   */
  error(message: string): StaticJsObject;

  /**
   * Create a sandbox Proxy object.
   * @param target The proxy target, which can be a StaticJsObject, a StaticJsFunction, or "object" or "function" to target a basic object or no-op function.
   * @param handlers The proxy handlers, which define the behavior of the proxy.
   * @returns A StaticJsProxy object that behaves according to the given target and handlers.
   */
  proxy(target: StaticJsProxyTarget, handlers: StaticJsProxyHandlers): StaticJsProxy;

  /**
   * Convert a host-native function to a StaticJsFunction, with the given options.
   *
   * Warning: Host coercion is considered unsafe, and can lead to unexpectedly leaking host concerns if not careful.
   * @param value The function to convert.
   * @param opts Options for host access.  If unset, the default host access of the {@link StaticJsRealm} is used.
   * @returns A StaticJsFunction that wraps the given host function according to the provided options.
   * @see StaticJsRealmOptions.hostAccessDefaults
   */
  toStaticJsValue(value: (...args: unknown[]) => unknown, opts?: HostAccessArg): StaticJsFunction;

  /**
   * Convert a host-native value to a StaticJsValue, with the given options.
   * The returned value is stable, and will be either {@link StaticJsTypeFactory.true} or {@link StaticJsTypeFactory.false}.
   * Generally, {@link StaticJsTypeFactory.boolean} should be used for boolean conversions instead of this method.
   * @param value The value to convert.
   * @returns A StaticJsBoolean representing the given boolean value.
   * @see StaticJsTypeFactory.true
   * @see StaticJsTypeFactory.true
   * @see StaticJsTypeFactory.boolean
   */
  toStaticJsValue(value: boolean): StaticJsBoolean;

  /**
   * Convert a host-native value to a StaticJsValue, with the given options.
   * Generally, {@link StaticJsTypeFactory.number} should be used for number conversions instead of this method.
   * @param value The value to convert.
   * @returns A StaticJsNumber representing the given number value.
   * @see StaticJsTypeFactory.number
   */
  toStaticJsValue(value: number): StaticJsNumber;

  /**
   * Convert a host-native value to a StaticJsValue, with the given options.
   * Generally, {@link StaticJsTypeFactory.string} should be used for string conversions instead of this method.
   * @param value The value to convert.
   * @returns A StaticJsString representing the given string value.
   * @see StaticJsTypeFactory.string
   */
  toStaticJsValue(value: string): StaticJsString;

  /**
   * Convert a host-native value to a StaticJsValue, with the given options.
   *
   * Warning: Host coercion is considered unsafe, and can lead to unexpectedly leaking host concerns if not careful.
   * @param value The value to convert.
   * @param opts Options for host access.  If unset, the default host access of the {@link StaticJsRealm} is used.
   */
  toStaticJsValue(value: unknown[], opts?: HostAccessArg): StaticJsArray;

  /**
   * Convert a host-native object to a StaticJsObject, with the given options.
   *
   * Warning: Host coercion is considered unsafe, and can lead to unexpectedly leaking host concerns if not careful.
   * @param value The object to convert.
   * @param opts Options for host access.  If unset, the default host access of the {@link StaticJsRealm} is used.
   */
  toStaticJsValue(value: object, opts?: HostAccessArg): StaticJsObject;

  /**
   * Convert a host-native function to a StaticJsFunction, with the given options.
   *
   * Warning: Host coercion is considered unsafe, and can lead to unexpectedly leaking host concerns if not careful.
   * @param value The function to convert.
   * @param opts Options for host access.  If unset, the default host access of the {@link StaticJsRealm} is used.
   * @returns A StaticJsFunction that wraps the given host function according to the provided options.
   * @see StaticJsRealmOptions.hostAccessDefaults
   */
  toStaticJsValue(value: Function, opts?: HostAccessArg): StaticJsFunction;

  /**
   * Convert a host-native symbol to a StaticJsSymbol, with the given options.
   * Generally, {@link StaticJsTypeFactory.symbol} should be used for symbol conversions instead of this method.
   * @param value The symbol to convert.
   * @returns A StaticJsSymbol representing the given symbol value.
   * @see StaticJsTypeFactory.symbol
   */
  toStaticJsValue(value: symbol): StaticJsSymbol;

  /**
   * Convert a host-native value to a StaticJsValue, with the given options.
   * Generally, {@link StaticJsTypeFactory.null} should be used over this method.
   * @param value The value to convert.
   * @return A StaticJsNull representing the given null value.
   * @see StaticJsTypeFactory.null
   */
  toStaticJsValue(value: null): StaticJsNull;

  /**
   * Convert a host-native value to a StaticJsValue, with the given options.
   * Generally, {@link StaticJsTypeFactory.undefined} should be used over this method.
   * @param value The value to convert.
   * @return A StaticJsUndefined representing the given undefined value.
   * @see StaticJsTypeFactory.undefined
   */
  toStaticJsValue(value: undefined): StaticJsUndefined;

  /**
   * Convert a host-native value to a StaticJsValue, with the given options.
   *
   * Warning: Host coercion is considered unsafe, and can lead to unexpectedly leaking host concerns if not careful.
   * @param value The value to convert.
   * @param opts Options for host access.  If unset, the default host access of the {@link StaticJsRealm} is used.
   * @returns A StaticJsValue representing the given value, converted according to the provided options.
   * @see StaticJsRealmOptions.hostAccessDefaults
   */
  toStaticJsValue(value: unknown, opts?: HostAccessArg): StaticJsValue;
}
