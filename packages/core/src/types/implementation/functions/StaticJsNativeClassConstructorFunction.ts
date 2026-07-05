import type { StaticJsEnvironmentRecord } from "#environments/StaticJsEnvironmentRecord.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsClassFieldDefinitionRecord } from "#evaluator/node-evaluators/Classes/ClassFieldDefinitionRecord.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { definePropertyOrThrow } from "#algorithms/define-property-or-throw.js";
import { StaticJsFunctionEnvironmentRecord } from "#environments/implementation/StaticJsFunctionEnvironmentRecord.js";
import { StaticJsPrivateEnvironmentRecord } from "#environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { EvaluateFunctionBodyCommand } from "#evaluator/commands/EvaluateFunctionBodyCommand.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { allocated } from "#memory/allocated.js";

import type { StaticJsCallable } from "../../StaticJsCallable.js";
import type {
  StaticJsPrivateElementAccessor,
  StaticJsPrivateElementMethod,
} from "../../StaticJsPrivateElement.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import type { StaticJsClassConstructorFunction } from "./StaticJsClassConstructorFunction.js";

import { type StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsAbstractFunction } from "./StaticJsAbstractFunction.js";

export type StaticJsClassConstructorNativeConstruct = (
  thisArg: StaticJsValue | undefined,
  newTarget: StaticJsCallable | undefined,
  args: StaticJsValue[],
) => EvaluationGenerator<StaticJsObject>;

export interface StaticJsNativeClassConstructorFunctionCreateParams {
  realm: StaticJsRealm;
  construct: StaticJsClassConstructorNativeConstruct;
  homeObject: StaticJsObject;
  env: StaticJsEnvironmentRecord;
  privateEnv: StaticJsPrivateEnvironmentRecord | null;
  prototype?: StaticJsObject | undefined;
  sourceText?: string | undefined;
  captures?: readonly StaticJsAllocation[] | undefined;
}

/**
 * The native (default) class constructor: a class with no explicit `constructor`
 * body. Unlike {@link StaticJsAstClassConstructorFunction}, it has no AST node,
 * so it lives on the native branch (a sibling of the AST function family). This
 * keeps it from allocating a dummy AST wrapper and lets it properly account for
 * the allocations its native construct closure captures.
 */
export class StaticJsNativeClassConstructorFunction
  extends StaticJsAbstractFunction
  implements StaticJsClassConstructorFunction
{
  private readonly _nativeFunc: StaticJsClassConstructorNativeConstruct;
  private readonly _environment: StaticJsEnvironmentRecord;
  private readonly _privateEnv: StaticJsPrivateEnvironmentRecord | null;
  private readonly _homeObject: StaticJsObject;
  private readonly _captures: readonly StaticJsAllocation[];
  private _sourceText: string;
  private _constructorKind: null | "base" | "derived" = null;

  static create(
    params: StaticJsNativeClassConstructorFunctionCreateParams,
  ): StaticJsNativeClassConstructorFunction {
    const {
      realm,
      construct,
      homeObject,
      env,
      privateEnv,
      prototype,
      sourceText = "",
      captures = [],
    } = params;
    return allocated(
      new StaticJsNativeClassConstructorFunction(
        realm,
        construct,
        homeObject,
        env,
        privateEnv,
        prototype ?? undefined,
        sourceText,
        captures,
      ),
    );
  }

  protected constructor(
    realm: StaticJsRealm,
    construct: StaticJsClassConstructorNativeConstruct,
    homeObject: StaticJsObject,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord | null,
    prototype: StaticJsObject = realm.intrinsics["Function.prototype"],
    sourceText: string = "",
    captures: readonly StaticJsAllocation[] = [],
  ) {
    super(realm, prototype);

    this._nativeFunc = construct;
    this._homeObject = homeObject;
    this._environment = env;
    this._privateEnv = privateEnv;
    this._sourceText = sourceText;
    this._captures = captures;
  }

  privateMethods: (StaticJsPrivateElementMethod | StaticJsPrivateElementAccessor)[] = [];
  fields: StaticJsClassFieldDefinitionRecord[] = [];

  override get isConstructor(): boolean {
    return this._constructorKind !== null;
  }

  get constructorKind(): null | "base" | "derived" {
    return this._constructorKind;
  }

  set constructorKind(value: "base" | "derived") {
    if (this._constructorKind === null) {
      throw new StaticJsEngineError("Cannot set constructorKind before calling makeConstructor");
    }
    if (value === null) {
      throw new StaticJsEngineError("constructorKind cannot be set to null");
    }

    this._constructorKind = value;
  }

  get homeObject(): StaticJsObject {
    return this._homeObject;
  }

  get sourceText(): string {
    return this._sourceText;
  }

  set sourceText(value: string) {
    this._sourceText = value;
  }

  *makeConstructor(writablePrototype: boolean = true, prototype?: StaticJsObject) {
    if (this._constructorKind !== null) {
      throw new StaticJsEngineError("Function is already a constructor");
    }

    this._constructorKind = "base";
    if (!prototype) {
      prototype = this.realm.types.object();
      yield* definePropertyOrThrow(prototype, "constructor", {
        value: this,
        writable: writablePrototype,
        enumerable: false,
        configurable: true,
      });
    }

    yield* definePropertyOrThrow(this, "prototype", {
      value: prototype,
      writable: writablePrototype,
      enumerable: false,
      configurable: false,
    });
  }

  override *callEvaluator(): EvaluationGenerator<StaticJsValue> {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Class constructor cannot be invoked without 'new'",
    );
  }

  override *constructEvaluator(
    args: StaticJsValue[] = [],
    newTarget: StaticJsCallable = this,
  ): EvaluationGenerator<StaticJsObject> {
    const nativeFunc = this._nativeFunc;

    yield* this._prepareForOrdinaryCall(newTarget);
    return yield* EvaluateFunctionBodyCommand(this, function* () {
      const result = yield* captureThrownCompletion(nativeFunc(undefined, newTarget, args));
      EvaluationContext.pop();
      return yield* Q(result);
    });
  }

  override toStringSync() {
    const name = this.getNameSync();
    return `function ${name ?? ""}() { ${this._sourceText} }`;
  }

  override mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks);

    this._environment.mark(marks);
    this._homeObject.mark(marks);
    for (const capture of this._captures) {
      capture.mark(marks);
    }
  }

  override allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    super.allocateSelf(allocate);
  }

  private *_prepareForOrdinaryCall(newTarget: StaticJsCallable): EvaluationGenerator<void> {
    const env = StaticJsFunctionEnvironmentRecord.create({
      functionObject: this,
      newTarget,
      lexical: false,
      outerEnv: this._environment,
      realm: this.realm,
    });
    const context = EvaluationContext.createFunctionInvocationContext(
      this,
      this.scriptOrModule,
      this.realm,
      env,
      this._privateEnv ?? undefined,
    );
    EvaluationContext.push(context);
  }
}
