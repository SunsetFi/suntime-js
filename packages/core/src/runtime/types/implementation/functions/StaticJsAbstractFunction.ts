import type { Node } from "@babel/types";

import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsScriptOrModuleRecord } from "../../../../evaluator/ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "../../../tasks/StaticJsRunTaskOptions.js";
import type { StaticJsFunction } from "../../StaticJsFunction.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsValue } from "../../StaticJsValue.js";

import { get } from "../../../algorithms/get.js";
import toString from "../../../algorithms/to-string.js";
import { StaticJsNull } from "../../StaticJsNull.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsObjectProxyTarget } from "../objects/create-object-proxy.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

export abstract class StaticJsAbstractFunction
  extends StaticJsOrdinaryObjectImpl
  implements StaticJsFunction
{
  constructor(
    realm: StaticJsRealm,
    length: number,
    prototype: StaticJsObject | StaticJsNull | null,
  ) {
    super(realm, prototype ?? realm.types.prototypes.functionProto);

    this.defineOwnPropertySync("length", {
      value: realm.types.number(length),
      writable: false,
      enumerable: false,
      configurable: true,
    });
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

  getNameAsync(opts?: StaticJsRunTaskOptions): Promise<string> {
    return this.realm.invokeEvaluatorAsync(this._getNameEvaluator(), opts);
  }

  getNameSync(opts?: StaticJsRunTaskOptions): string {
    return this.realm.invokeEvaluatorSync(this._getNameEvaluator(), opts);
  }

  private *_getNameEvaluator(): EvaluationGenerator<string> {
    const nameValue = yield* get(this, "name");
    const nameStr = yield* toString.js(nameValue);
    return nameStr.toString();
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
    return this.realm.invokeEvaluatorAsync(this.callEvaluator(thisArg, args), opts);
  }

  callSync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.callEvaluator(thisArg, args), opts);
  }

  // TODO: newTarget
  abstract constructEvaluator(args: StaticJsValue[]): EvaluationGenerator<StaticJsObject>;

  constructAsync(args: StaticJsValue[], opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.constructEvaluator(args), opts);
  }

  constructSync(args: StaticJsValue[], opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.constructEvaluator(args), opts);
  }

  override toNative(): (...args: unknown[]) => unknown {
    return super.toNative() as (...args: unknown[]) => unknown;
  }

  protected override _createtoNativeProxyTarget(): StaticJsObjectProxyTarget {
    return (() => {}) as StaticJsObjectProxyTarget;
  }

  protected override _configuretoNativeProxy(
    _traps: ProxyHandler<StaticJsObjectProxyTarget>,
  ): void {
    _traps.apply = (_target: unknown, thisArg: unknown, args: unknown[]) => {
      const argValues = args.map((value) => this.realm.types.toStaticJsValue(value));
      // FIXME: Not sure of the wisdom of this.  This might result in leaking host concerns into the runtime,
      // if the caller is not aware that this is happening.
      // In general, .toNative() is a security nightmare anyway...
      const thisArgValue = this.realm.types.toStaticJsValue(thisArg);

      const result = this.realm.invokeEvaluatorSync(this.callEvaluator(thisArgValue, argValues));

      return result.toNative();
    };
  }
}
