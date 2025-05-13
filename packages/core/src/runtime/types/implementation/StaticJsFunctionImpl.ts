import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../../evaluator/completions/Completion.js";
import { NormalCompletion } from "../../../evaluator/completions/NormalCompletion.js";
import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsFunction } from "../interfaces/StaticJsFunction.js";
import { isStaticJsValue, StaticJsValue } from "../interfaces/StaticJsValue.js";
import {
  isStaticJsObjectLike,
  StaticJsObjectLike,
} from "../interfaces/StaticJsObject.js";

import staticJsDescriptorToObjectDescriptor from "../utils/sjs-descriptor-to-descriptor.js";

import StaticJsStringImpl from "./StaticJsStringImpl.js";
import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";
import StaticJsEngineError from "../../../evaluator/StaticJsEngineError.js";

export interface StaticJsFunctionImplOptions {
  length?: number;
  prototype?: StaticJsObjectLike;
  isConstructor?: boolean;
}

// FIXME:
// Class constructors MUST be called with construct(), not call()
// Lambdas MUST NOT BE called with construct(), only call()

export default class StaticJsFunctionImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsFunction
{
  private _isConstructor: boolean;

  private _toJs: unknown | null = null;

  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _call: (
      thisArg: StaticJsValue,
      ...args: StaticJsValue[]
    ) => EvaluationGenerator<Completion>,
    { isConstructor, length, prototype }: StaticJsFunctionImplOptions = {},
  ) {
    super(realm, prototype ?? realm.types.prototypes.functionProto);

    this._isConstructor = isConstructor ?? false;

    // FIXME: Suspicious use of non-eval defineProperty during construction.
    // Invokes runEvaluatorUntilCompletion
    this.defineProperty("name", {
      value: new StaticJsStringImpl(realm, name ?? ""),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    this.defineProperty("length", {
      value: new StaticJsNumberImpl(this.realm, length ?? _call.length - 1),
      writable: false,
      enumerable: false,
      configurable: true,
    });
  }

  get typeOf() {
    return "function" as const;
  }

  get runtimeTypeOf() {
    return "function" as const;
  }

  get isConstructor() {
    return this._isConstructor;
  }

  toJs(): unknown {
    if (!this._toJs) {
      const realm = this.realm;
      const _call = this._call;
      this._toJs = function (...args: unknown[]) {
        const argValues = args.map((value) =>
          realm.types.toStaticJsValue(value),
        );
        // FIXME: This absolutely probably does not work right.
        // We should at least try to look up if we have a StaticJsValue representation of the global object.
        // At the very least, this is dangerous, and might inadvertently leak stuff from the runtime into the scripting engine.
        // They won't be able to grab prototypes, but...
        const thisArg = realm.types.toStaticJsValue(this);
        const result = runEvaluatorUntilCompletion(
          _call(thisArg, ...argValues),
        );
        switch (result.type) {
          case "throw":
            // FIXME: wrap the error
            throw result.value.toJs();
          case "return":
          case "normal":
            return (result.value ?? realm.types.undefined).toJs();
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
    const nameValue = runEvaluatorUntilCompletion(
      this.getPropertyEvaluator("name"),
    );
    const name = nameValue.toString();

    return `function ${name ?? ""}() { [native code] }`;
  }

  toNumber(): number {
    return Number.NaN;
  }

  toBoolean(): boolean {
    return true;
  }

  *call(thisArg: StaticJsValue, ...args: StaticJsValue[]): EvaluationGenerator {
    if (!isStaticJsValue(thisArg)) {
      throw new Error("thisArg must be a StaticJsValue instance.");
    }

    if (args.some((arg) => !isStaticJsValue(arg))) {
      throw new Error("Arguments must be StaticJsValue instances.");
    }

    const callResult = yield* this._call(thisArg, ...args);
    switch (callResult.type) {
      case "normal":
      case "return":
        return NormalCompletion(callResult.value ?? this.realm.types.undefined);
      case "throw":
        return callResult;

      default:
        throw new StaticJsEngineError(
          `Invalid function completion type: ${callResult.type}. Expected normal, throw, or return.`,
        );
    }
  }

  *construct(...args: StaticJsValue[]): EvaluationGenerator {
    let proto = yield* this.getPropertyEvaluator("prototype");
    if (!proto || !isStaticJsObjectLike(proto)) {
      // This appears to be what node does
      proto = this.realm.types.null;
    }

    const thisObj = this.realm.types.object(undefined, proto);
    const result = yield* this.call(thisObj, ...args);
    if (result.type === "normal" && isStaticJsObjectLike(result.value)) {
      return NormalCompletion(result.value);
    }

    return NormalCompletion(thisObj);
  }
}
