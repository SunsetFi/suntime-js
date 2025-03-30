import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import {
  Completion,
  runEvaluatorUntilCompletion,
} from "../../../evaluator/internal.js";

import {
  isStaticJsValue,
  StaticJsFunction,
  StaticJsValue as IStaticJsValue,
} from "../interfaces/index.js";
import staticJsDescriptorToObjectDescriptor from "../utils/sjs-descriptor-to-descriptor.js";

import StaticJsValue from "../factories/StaticJsValue.js";

import StaticJsEnvString from "./StaticJsEnvString.js";
import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvObject from "./StaticJsEnvObject.js";

export default class StaticJsEnvFunction
  extends StaticJsEnvObject
  implements StaticJsFunction<IStaticJsValue[]>
{
  private _toJs: unknown | null = null;
  private readonly _name: string | null;

  constructor(
    name: string | null,
    private readonly _call: (
      thisArg: IStaticJsValue,
      ...args: IStaticJsValue[]
    ) => EvaluationGenerator<Completion>,
    length?: number,
  ) {
    // FIXME: function prototype.
    super(null, "function");
    this._name = name;
    this.defineProperty("name", {
      value: new StaticJsEnvString(name ?? ""),
      writable: false,
      enumerable: false,
      configurable: true,
    });
    this.defineProperty("length", {
      value: new StaticJsEnvNumber(length ?? _call.length - 1),
      writable: false,
      enumerable: false,
      configurable: true,
    });
  }

  get typeOf() {
    return "function" as const;
  }

  get runtimeTypeOf() {
    return "function";
  }

  toJs(): unknown {
    if (!this._toJs) {
      this._toJs = (...args: unknown[]) => {
        const argValues = args.map(StaticJsValue);
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
          case "continue":
          case "break":
            throw new Error(
              "Invalid completion type: Functions must end with return or throw.",
            );
        }

        return undefined;
      };

      for (const key of this.getOwnKeys()) {
        const descriptor = this.getOwnPropertyDescriptor(key)!;
        const objDescriptor = staticJsDescriptorToObjectDescriptor(descriptor);
        Object.defineProperty(this._toJs, key, objDescriptor);
      }

      // FIXME: Set if not default Function.prototype
      // Object.setPrototypeOf(this._toJs, this.prototype?.toJs() ?? null);
    }

    return this._toJs;
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
    ...args: IStaticJsValue[]
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
}
