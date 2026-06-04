import type { Node } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsScriptOrModuleRecord } from "../../../../evaluator/ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";
import { get } from "../../../algorithms/get.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "../../../tasks/StaticJsRunTaskOptions.js";
import type { HostAccessArg } from "../../HostAccessOptions.js";
import { StaticJsCallable, StaticJsCallableToNativeOpts } from "../../StaticJsCallable.js";
import type { StaticJsFunction } from "../../StaticJsFunction.js";
import { isStaticJsNull, StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import { isStaticJsScalar } from "../../StaticJsScalar.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { isStaticJsUndefined } from "../../StaticJsUndefined.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsObjectProxyTarget } from "../objects/create-object-proxy.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

export abstract class StaticJsAbstractFunction
  extends StaticJsOrdinaryObjectImpl
  implements StaticJsFunction
{
  private _initialName: string | null = null;

  constructor(realm: StaticJsRealm, prototype: StaticJsObject | StaticJsNull | null) {
    super(realm, prototype ?? realm.intrinsics["Function.prototype"]);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsFunction";
  }

  override get typeOf() {
    return "function" as const;
  }

  get runtimeTypeOf() {
    return "function" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Function;
  }

  get ecmaScriptCode(): Node | null {
    return null;
  }

  get scriptOrModule(): StaticJsScriptOrModuleRecord | null {
    return null;
  }

  get isConstructor() {
    return false;
  }

  get strict(): boolean {
    return false;
  }

  get initialName(): string | null {
    return this._initialName;
  }

  setInitialName(value: string) {
    if (typeof value !== "string") {
      throw new StaticJsEngineError("Initial name must be a string");
    }

    if (this._initialName !== null) {
      throw new StaticJsEngineError("Initial name can only be set once");
    }

    this._initialName = value;
  }

  getNameAsync(opts?: StaticJsRunTaskOptions): Promise<string> {
    return this.realm.invokeEvaluatorAsync(this._getNameEvaluator(), opts);
  }

  getNameSync(opts?: StaticJsRunTaskOptions): string {
    return this.realm.invokeEvaluatorSync(this._getNameEvaluator(), opts);
  }

  private *_getNameEvaluator(): EvaluationGenerator<string> {
    const nameValue = yield* get(this, "name");
    if (
      isStaticJsScalar(nameValue) &&
      !isStaticJsNull(nameValue) &&
      !isStaticJsUndefined(nameValue)
    ) {
      return String(nameValue.value);
    }

    if (this._initialName) {
      return this._initialName;
    }

    return "";
  }

  override toStringSync() {
    const name = this.getNameSync();

    // TODO: If its an AST function, we should return the body
    return `function ${name ?? ""}() { [unknown code] }`;
  }

  abstract callEvaluator(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue>;

  callAsync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    // oxlint-disable-next-line typescript/no-this-alias
    const self = this;
    return this.realm.invokeEvaluatorAsync(function* evaluate() {
      try {
        return yield* self.callEvaluator(thisArg, args);
      } catch (e) {
        Completion.handleRuntime(e);
        throw e;
      }
    }, opts);
  }

  callSync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue {
    // oxlint-disable-next-line typescript/no-this-alias
    const self = this;
    return this.realm.invokeEvaluatorSync(function* evaluate() {
      try {
        return yield* self.callEvaluator(thisArg, args);
      } catch (e) {
        Completion.handleRuntime(e);
        throw e;
      }
    }, opts);
  }

  abstract constructEvaluator(
    args: StaticJsValue[],
    newTarget?: StaticJsCallable,
  ): EvaluationGenerator<StaticJsObject>;

  constructAsync(
    args: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsObject> {
    return this.realm.invokeEvaluatorAsync(this.constructEvaluator(args, newTarget), opts);
  }

  constructSync(
    args: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsObject {
    return this.realm.invokeEvaluatorSync(this.constructEvaluator(args, newTarget), opts);
  }

  override toNative(opts?: StaticJsCallableToNativeOpts): Function {
    return super.toNative(opts) as Function;
  }

  protected override _createToNativeProxyTarget(access?: HostAccessArg): StaticJsObjectProxyTarget {
    // oxlint-disable-next-line typescript/no-this-alias
    const self = this;
    // Each value handed back to the function is wrapped under `access` (the
    // access the caller resolved for this function, e.g. via the parent's
    // childPolicy) — passed straight through as toStaticJsValue's opts.
    const toValue = (value: unknown): StaticJsValue =>
      self.realm.types.toStaticJsValue(value, access);
    return function (this: unknown, ...args: unknown[]) {
      const argValues = args.map(toValue);
      const thisArgValue = toValue(this);

      const result = self.realm.invokeEvaluatorSync(
        captureThrownCompletion(self.callEvaluator(thisArgValue, argValues)),
      );

      if (Completion.Throw.is(result)) {
        throw result.value.toNative({ access });
      }

      if (Completion.Normal.is(result)) {
        return result.toNative({ access });
      }

      Completion.handleRuntime(result);
      return undefined;
    } as StaticJsObjectProxyTarget;
  }
}
