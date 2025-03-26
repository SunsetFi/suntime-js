import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import {
  Completion,
  NormalCompletion,
  runEvaluatorUntilCompletion,
} from "../../../evaluator/internal.js";

import { StaticJsString, StaticJsValue } from "../factories/index.js";
import StaticJsUndefined from "../factories/StaticJsUndefined.js";

import {
  isStaticJsValue,
  StaticJsFunction,
  StaticJsValue as IStaticJsValue,
} from "../interfaces/index.js";
import { StaticJsObjectPropertyDescriptor } from "../interfaces/StaticJsObject.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default abstract class StaticJsEnvFunction<
  TArgs extends IStaticJsValue[] = IStaticJsValue[],
> implements StaticJsFunction<TArgs>
{
  private readonly _name: string | null;

  constructor(
    name: string | null,
    private readonly _call: (
      thisArg: IStaticJsValue,
      ...args: TArgs
    ) => EvaluationGenerator<Completion>,
  ) {
    this._name = name;
  }

  get [StaticJsTypeSymbol]() {
    return "function" as const;
  }

  get typeOf() {
    return "function" as const;
  }

  toJs() {
    return (...args: any[]) => {
      const argValues = args.map(StaticJsValue) as TArgs;
      // FIXME: This absolutely probably does not work right.
      // We should at least try to look up if we have a StaticJsValue representation of the global object.
      // At the very least, this is dangerous, and might inadvertently leak stuff from the runtime into the scripting engine.
      // They won't be able to grab prototypes, but...
      const thisArg = StaticJsValue(this);
      const result = runEvaluatorUntilCompletion(
        this._call(thisArg, ...argValues),
      );
      switch (result.type) {
        case "throw":
          // FIXME: wrap the error
          throw result.value.toJs();
        case "return":
          return result.value.toJs();
      }

      return NormalCompletion();
    };
  }

  toString() {
    return `function ${this._name ?? ""}() { [native code] }`;
  }

  toNumber(): number {
    return Number.NaN;
  }

  toBoolean(): boolean {
    return true;
  }

  call(
    thisArg: IStaticJsValue,
    ...args: TArgs
  ): EvaluationGenerator<Completion> {
    if (!isStaticJsValue(thisArg)) {
      throw new Error("thisArg must be a StaticJsValue instance.");
    }

    if (args.some((arg) => !isStaticJsValue(arg))) {
      throw new Error("Arguments must be StaticJsValue instances.");
    }

    const callResult = this._call(thisArg, ...args);
    return callResult;
  }

  hasProperty(name: string): boolean {
    switch (name) {
      case "name":
      case "length":
        return true;
      default:
        return false;
    }
  }

  getProperty(name: string): IStaticJsValue {
    switch (name) {
      case "name":
        return this._name ? StaticJsString(this._name) : StaticJsUndefined();
      case "length":
        return new StaticJsEnvNumber(this._call.length);
      default:
        return StaticJsEnvUndefined.Instance;
    }
  }

  getIsReadOnlyProperty(name: string): boolean {
    return true;
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    switch (name) {
      case "name":
        return {
          value: this._name ? StaticJsString(this._name) : StaticJsUndefined(),
          writable: false,
          enumerable: false,
          configurable: false,
        };
      case "length":
        return {
          value: new StaticJsEnvNumber(this._call.length),
          writable: false,
          enumerable: false,
          configurable: false,
        };
      default:
        return undefined;
    }
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    throw new Error("Functions are read-only.");
  }

  deleteProperty(name: string): boolean {
    return false;
  }

  setProperty(name: string, value: IStaticJsValue): void {
    throw new Error("Functions are read-only.");
  }

  enumerateKeys(): string[] {
    return [];
  }
}
