import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";

import type { StaticJsNull } from "../StaticJsNull.js";
import type { StaticJsFunction } from "../StaticJsFunction.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import { isStaticJsObjectLike } from "../StaticJsObjectLike.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";

import StaticJsStringImpl from "./StaticJsStringImpl.js";
import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export interface StaticJsFunctionImplOptions {
  length?: number;
  prototype?: StaticJsObjectLike | StaticJsNull | null;
  construct?: boolean | ((thisArg: StaticJsValue, ...args: StaticJsValue[]) => EvaluationGenerator);
}

export default class StaticJsFunctionImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsFunction
{
  private _construct:
    | ((newTarget: StaticJsValue, ...args: StaticJsValue[]) => EvaluationGenerator)
    | null;

  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _call: (
      thisArg: StaticJsValue,
      ...args: StaticJsValue[]
    ) => EvaluationGenerator<StaticJsValue>,
    { construct, length, prototype }: StaticJsFunctionImplOptions = {},
  ) {
    super(realm, prototype ?? realm.types.prototypes.functionProto);

    if (typeof construct === "boolean") {
      this._construct = construct ? this._call : null;
    } else if (typeof construct === "function") {
      this._construct = construct;
    } else {
      this._construct = null;
    }

    // FIXME: Suspicious use of non-evaluator defineProperty during construction.
    // Invokes runEvaluatorUntilCompletion
    this.defineOwnPropertySync("name", {
      value: new StaticJsStringImpl(realm, name ?? ""),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    this.defineOwnPropertySync("length", {
      value: new StaticJsNumberImpl(realm, length ?? _call.length - 1),
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

  get runtimeTypeCode() {
    return StaticJsTypeCode.Function;
  }

  get isConstructor() {
    return this._construct !== null;
  }

  get strict(): boolean {
    return false;
  }

  toStringSync() {
    const nameValue = this.realm.invokeEvaluatorSync(this.getEvaluator("name"));
    const name = nameValue.toStringSync();

    return `function ${name ?? ""}() { [native code] }`;
  }

  *callEvaluator(
    thisArg: StaticJsValue,
    args: StaticJsValue[] = [],
  ): EvaluationGenerator<StaticJsValue> {
    if (!isStaticJsValue(thisArg)) {
      throw new TypeError("thisArg must be a StaticJsValue instance.");
    }

    if (args.some((arg) => !isStaticJsValue(arg))) {
      throw new TypeError("Arguments must be StaticJsValue instances.");
    }

    try {
      // For convienence, we support returning normal completions
      // as being equivalent to a return completion.
      const result = yield* this._call(thisArg, ...args);
      return result ?? this.realm.types.undefined;
    } catch (e) {
      if (Completion.Return.is(e)) {
        return e.value ?? this.realm.types.undefined;
      }

      Completion.ControlFlow.handleRuntime(e);

      throw e;
    }
  }

  callAsync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.callEvaluator(thisArg, args), opts);
  }

  callSync(thisArg: StaticJsValue, args?: StaticJsValue[]): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.callEvaluator(thisArg, args));
  }

  *constructEvaluator(args: StaticJsValue[] = []): EvaluationGenerator<StaticJsValue> {
    if (!this._construct) {
      throw Completion.Throw(
        this.realm.types.error("TypeError", "This function is not a constructor."),
      );
    }

    // This is far from spec compliant: https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-ecmascript-function-objects-construct-argumentslist-newtarget
    // Just hacking together something that works.
    // What even is [[ConstructorKind]]?

    let proto = yield* this.getEvaluator("prototype");
    if (!proto || !isStaticJsObjectLike(proto)) {
      proto = this.realm.types.prototypes.objectProto;
    }

    const thisObj = this.realm.types.object(undefined, proto);
    const result = yield* this._invokeConstructEvaluator(thisObj, ...args);
    if (result && isStaticJsObjectLike(result)) {
      return result;
    }

    return thisObj;
  }

  constructAsync(args: StaticJsValue[], opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.constructEvaluator(args), opts);
  }

  constructSync(args: StaticJsValue[]): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.constructEvaluator(args));
  }

  toJsSync(): (...args: unknown[]) => unknown {
    return super.toJsSync() as (...args: unknown[]) => unknown;
  }

  private *_invokeConstructEvaluator(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
  ): EvaluationGenerator {
    if (!this._construct) {
      throw Completion.Throw(
        this.realm.types.error("TypeError", "This function is not a constructor."),
      );
    }

    if (!isStaticJsValue(thisArg)) {
      throw new TypeError("thisArg must be a StaticJsValue instance.");
    }

    if (args.some((arg) => !isStaticJsValue(arg))) {
      throw new TypeError("Arguments must be StaticJsValue instances.");
    }

    try {
      // For convienence, we support returning normal completions
      // as being equivalent to a return completion.
      const result = yield* this._construct(thisArg, ...args);
      return result ?? this.realm.types.undefined;
    } catch (e) {
      if (Completion.Return.is(e)) {
        return e.value ?? this.realm.types.undefined;
      }

      Completion.ControlFlow.handleRuntime(e);

      throw e;
    }
  }

  protected _createToJsProxyTarget(): object {
    return () => {};
  }

  protected _configureToJsProxy(_traps: ProxyHandler<object>): void {
    _traps.apply = (_target: unknown, thisArg: unknown, args: unknown[]) => {
      const argValues = args.map((value) => this.realm.types.toStaticJsValue(value));
      // FIXME: This absolutely probably does not work right.
      // We should at least try to look up if we have a StaticJsValue representation of the global object.
      // At the very least, this is dangerous, and might inadvertently leak stuff from the runtime into the scripting engine.
      // They won't be able to grab prototypes, but...
      const thisArgValue = this.realm.types.toStaticJsValue(thisArg);

      const result = this.realm.invokeEvaluatorSync(this.callEvaluator(thisArgValue, argValues));

      return result.toJsSync();
    };
  }
}
