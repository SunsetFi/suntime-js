import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import {
  Completion,
  runEvaluatorUntilCompletion,
} from "../../../evaluator/internal.js";

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsFunction } from "../interfaces/StaticJsFunction.js";
import { isStaticJsValue, StaticJsValue } from "../interfaces/StaticJsValue.js";
import { StaticJsObject } from "../interfaces/StaticJsObject.js";

import staticJsDescriptorToObjectDescriptor from "../utils/sjs-descriptor-to-descriptor.js";

import StaticJsStringImpl from "./StaticJsStringImpl.js";
import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsFunctionImpl
  extends StaticJsObjectImpl
  implements StaticJsFunction
{
  private _toJs: unknown | null = null;
  private readonly _name: string | null;

  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _call: (
      thisArg: StaticJsValue,
      ...args: StaticJsValue[]
    ) => EvaluationGenerator<Completion>,
    length?: number,
    prototype?: StaticJsObject,
  ) {
    super(realm, prototype ?? realm.types.functionProto, "function");
    this._name = name;

    // FIXME: Suspicious use of non-eval defineProperty during construction.
    // Invokes runEvaluatorUntilCompletion
    this.defineProperty("name", {
      value: new StaticJsStringImpl(name ?? ""),
      writable: false,
      enumerable: false,
      configurable: true,
    });
    this.defineProperty("length", {
      value: new StaticJsNumberImpl(length ?? _call.length - 1),
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
        const argValues = args.map((value) =>
          this.realm.types.toStaticJsValue(value),
        );
        // FIXME: This absolutely probably does not work right.
        // We should at least try to look up if we have a StaticJsValue representation of the global object.
        // At the very least, this is dangerous, and might inadvertently leak stuff from the runtime into the scripting engine.
        // They won't be able to grab prototypes, but...
        const thisArg = this.realm.types.toStaticJsValue(this);
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
        const objDescriptor = staticJsDescriptorToObjectDescriptor(
          this.realm,
          descriptor,
        );
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
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
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
