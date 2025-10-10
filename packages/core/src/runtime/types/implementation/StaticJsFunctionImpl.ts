import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { ReturnCompletion } from "../../../evaluator/completions/ReturnCompletion.js";
import { ControlFlowCompletion } from "../../../evaluator/completions/ControlFlowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsNull } from "../StaticJsNull.js";
import type { StaticJsFunction } from "../StaticJsFunction.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import { isStaticJsObjectLike } from "../StaticJsObjectLike.js";

import StaticJsStringImpl from "./StaticJsStringImpl.js";
import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

export interface StaticJsFunctionImplOptions {
  length?: number;
  prototype?: StaticJsObjectLike | StaticJsNull | null;
  construct?:
    | boolean
    | ((
        thisArg: StaticJsValue,
        ...args: StaticJsValue[]
      ) => EvaluationGenerator);
}

export default class StaticJsFunctionImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsFunction
{
  private _construct:
    | ((
        thisArg: StaticJsValue,
        ...args: StaticJsValue[]
      ) => EvaluationGenerator)
    | null;

  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _call: (
      thisArg: StaticJsValue,
      ...args: StaticJsValue[]
    ) => EvaluationGenerator,
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
    this.definePropertySync("name", {
      value: new StaticJsStringImpl(realm, name ?? ""),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    this.definePropertySync("length", {
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

  get isConstructor() {
    return this._construct !== null;
  }

  toStringSync() {
    const nameValue = this.realm.invokeEvaluatorSync(
      this.getPropertyEvaluator("name"),
    );
    const name = nameValue.toStringSync();

    return `function ${name ?? ""}() { [native code] }`;
  }

  *callEvaluator(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
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
      if (e instanceof ReturnCompletion) {
        return e.value ?? this.realm.types.undefined;
      }

      ControlFlowCompletion.handleUnexpected(this.realm, e);

      throw e;
    }
  }

  *constructEvaluator(
    ...args: StaticJsValue[]
  ): EvaluationGenerator<StaticJsValue> {
    if (!this._construct) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "TypeError",
          "This function is not a constructor.",
        ),
      );
    }

    // This is far from spec compliant: https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-ecmascript-function-objects-construct-argumentslist-newtarget
    // Just hacking together something that works.
    // What even is [[ConstructorKind]]?

    let proto = yield* this.getPropertyEvaluator("prototype");
    if (!proto || !isStaticJsObjectLike(proto)) {
      // This appears to be what node does
      proto = this.realm.types.null;
    }

    const thisObj = this.realm.types.object(undefined, proto);
    const result = yield* this._invokeConstructEvaluator(thisObj, ...args);
    if (result && isStaticJsObjectLike(result)) {
      return result;
    }

    return thisObj;
  }

  private *_invokeConstructEvaluator(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
  ): EvaluationGenerator {
    if (!this._construct) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "TypeError",
          "This function is not a constructor.",
        ),
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
      if (e instanceof ReturnCompletion) {
        return e.value ?? this.realm.types.undefined;
      }

      ControlFlowCompletion.handleUnexpected(this.realm, e);

      throw e;
    }
  }

  protected _createToJsProxyTarget(): object {
    return () => {};
  }

  protected _configureToJsProxy(_traps: ProxyHandler<object>): void {
    _traps.apply = (target: unknown, thisArg: unknown, args: unknown[]) => {
      const argValues = args.map((value) =>
        this.realm.types.toStaticJsValue(value),
      );
      // FIXME: This absolutely probably does not work right.
      // We should at least try to look up if we have a StaticJsValue representation of the global object.
      // At the very least, this is dangerous, and might inadvertently leak stuff from the runtime into the scripting engine.
      // They won't be able to grab prototypes, but...
      const thisArgValue = this.realm.types.toStaticJsValue(thisArg);

      const result = this.realm.invokeEvaluatorSync(
        this.callEvaluator(thisArgValue, ...argValues),
      );

      return result.toJsSync();
    };
  }
}
