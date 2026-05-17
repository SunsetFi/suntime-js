import {
  type Node,
  type Function,
  type Identifier,
  type Pattern,
  type RestElement,
  type Expression,
  type ArrowFunctionExpression,
  isFunction,
  isIdentifier,
  isPattern,
  isRestElement,
  isExpression,
  StaticBlock,
} from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";
import { FunctionEvaluateBodyCommand } from "../../../../evaluator/commands/FunctionEvaluateCommand.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../../evaluator/completions/completion-types/ThrowCompletion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import functionDeclarationInstantiation from "../../../../evaluator/instantiation/function-declaration-instantiation.js";
import type { StaticJsScriptOrModuleRecord } from "../../../../evaluator/ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";
import { asyncFunctionStart } from "../../../algorithms/async-function-start.js";
import { call } from "../../../algorithms/call.js";
import { definePropertyOrThrow } from "../../../algorithms/define-property-or-throw.js";
import { getPrototypeFromConstructor } from "../../../algorithms/get-prototype-from-constructor.js";
import { getValue } from "../../../algorithms/get-value.js";
import { newPromiseCapability } from "../../../algorithms/new-promise-capability.js";
import { ordinaryCreateFromConstructor } from "../../../algorithms/ordinary-create-from-constructor.js";
import { toObject } from "../../../algorithms/to-object.js";
import { StaticJsFunctionEnvironmentRecord } from "../../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";
import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import type { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsCallable } from "../../StaticJsCallable.js";
import { isStaticJsNull } from "../../StaticJsNull.js";
import { isStaticJsObject, StaticJsObject } from "../../StaticJsObject.js";
import { isStaticJsUndefined } from "../../StaticJsUndefined.js";
import { isStaticJsValue, type StaticJsValue } from "../../StaticJsValue.js";

import { StaticJsAbstractFunction } from "./StaticJsAbstractFunction.js";
import { StaticJsAsyncGeneratorImpl } from "./StaticJsAsyncGeneratorImpl.js";
import { StaticJsGeneratorImpl } from "./StaticJsGeneratorImpl.js";

export interface StaticJsAstFunctionOptions {
  thisMode: "lexical-this" | "non-lexical-this";
  strict: boolean;
  env: StaticJsEnvironmentRecord;
  prototype?: StaticJsObject | null;
  privateEnv?: StaticJsPrivateEnvironmentRecord | null;
  scriptOrModule: StaticJsScriptOrModuleRecord | null;
  construct?: boolean;
}

export type StaticJsAstFunctionArgument = Identifier | Pattern | RestElement;
export function isStaticJsAstFunctionArgumentDeclaration(
  node: Node,
): node is StaticJsAstFunctionArgument {
  return isIdentifier(node) || isPattern(node) || isRestElement(node);
}

export function validateStaticJsAstFunctionParams(
  params: Function["params"],
): asserts params is StaticJsAstFunctionArgument[] {
  for (const param of params) {
    if (!isStaticJsAstFunctionArgumentDeclaration(param)) {
      throw new StaticJsEngineError("TypeScript parameter properties are not supported");
    }
  }
}

export type StaticJsAstFunctionNode = Function | Expression | StaticBlock;
export class StaticJsAstFunction extends StaticJsAbstractFunction {
  private readonly _argumentDeclarations: StaticJsAstFunctionArgument[];

  private readonly _strict: boolean;
  private readonly _scriptOrModule: StaticJsScriptOrModuleRecord | null;
  private readonly _environment: StaticJsEnvironmentRecord;
  private readonly _privateEnv: StaticJsPrivateEnvironmentRecord | null;
  private readonly _thisMode: "lexical" | "strict" | "global";

  private _constructorKind: null | "base" | "derived" = null;

  constructor(
    realm: StaticJsRealm,
    protected readonly _node: StaticJsAstFunctionNode,
    {
      thisMode,
      strict,
      env,
      privateEnv,
      scriptOrModule,
      construct,
      prototype,
    }: StaticJsAstFunctionOptions,
  ) {
    const params = isFunction(_node) ? _node.params : [];
    validateStaticJsAstFunctionParams(params);

    super(realm, prototype !== undefined ? prototype : realm.intrinsics["Function.prototype"]);

    this._argumentDeclarations = params;

    if (strict) {
      this._strict = true;
    } else if (
      isFunction(_node) &&
      _node.body.type === "BlockStatement" &&
      _node.body.directives.some(({ value }) => value.value === "use strict")
    ) {
      this._strict = true;
    } else {
      this._strict = false;
    }

    if (thisMode === "lexical-this") {
      this._thisMode = "lexical";
    } else if (this._strict) {
      this._thisMode = "strict";
    } else {
      this._thisMode = "global";
    }

    this._scriptOrModule = scriptOrModule;
    this._environment = env;
    this._privateEnv = privateEnv ?? null;

    // Another shim from old pre-spec era
    if (construct) {
      this.realm.invokeEvaluatorSync(this.makeConstructor());
    }
  }

  override get ecmaScriptCode(): Node {
    return this._node;
  }

  override get scriptOrModule(): StaticJsScriptOrModuleRecord | null {
    return this._scriptOrModule;
  }

  override get strict(): boolean {
    return this._strict;
  }

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

  get thisMode(): "lexical" | "strict" | "global" {
    return this._thisMode;
  }

  get environment(): StaticJsEnvironmentRecord {
    return this._environment;
  }

  get formalParameters(): StaticJsAstFunctionArgument[] {
    return this._argumentDeclarations;
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

    const calleeContext = yield* this._prepareForOrdinaryCall(null);

    // oxlint-disable-next-line typescript/no-this-alias
    const func = this;
    return yield* FunctionEvaluateBodyCommand(this, function* () {
      // TODO: If class constructor, throw TypeError.
      yield* func._ordinaryCallBindThis(calleeContext, thisArg);

      const result = yield* captureThrownCompletion(func._evaluateBody(args));
      EvaluationContext.pop();

      if (Completion.Throw.is(result)) {
        throw result;
      }

      if (Completion.Return.is(result)) {
        return result.value;
      }

      // For convienence, we support returning normal completions
      // as being equivalent to a return completion.
      if (isStaticJsValue(result)) {
        return result;
      } else {
        return func.realm.types.undefined;
      }
    });
  }

  *constructEvaluator(
    args: StaticJsValue[] = [],
    newTarget: StaticJsCallable = this,
  ): EvaluationGenerator<StaticJsObject> {
    const kind = this.constructorKind;
    if (kind === null) {
      // FIXME: Better error message.  What does NodeJs say?
      throw Completion.Throw("TypeError", "This function is not a constructor.");
    }

    let thisArg: StaticJsObject | undefined;
    if (kind === "base") {
      thisArg = yield* ordinaryCreateFromConstructor(newTarget, "Object.prototype");
    }

    const calleeContext = yield* this._prepareForOrdinaryCall(newTarget);

    // oxlint-disable-next-line typescript/no-this-alias
    const func = this;
    return yield* FunctionEvaluateBodyCommand(func, function* () {
      if (kind === "base") {
        yield* func._ordinaryCallBindThis(calleeContext, thisArg!);
        // Note: NOT doing initializeInstanceElements here,
        // that's done by StaticJsClassConstructorFunction, which overrides this method.
      }

      const constructorEnv = EvaluationContext.current.lexicalEnv;

      // Would be used for derived constructors.
      // const constructorEnv = context.lexicalEnv;

      let result = yield* captureThrownCompletion(func._evaluateBody(args));
      EvaluationContext.pop();

      if (Completion.Throw.is(result)) {
        throw result;
      }

      // HACK: Supporting internal caller shorthand
      if (isStaticJsValue(result)) {
        result = Completion.Return(result);
      }

      // Apparently typescript is upset about Completion.Return.assert?
      if (!Completion.Return.is(result)) {
        throw new StaticJsEngineError("Constructor did not return a value or threw an exception.");
      }

      const value = result.value;
      if (isStaticJsObject(value)) {
        return value;
      }

      if (kind === "base") {
        return thisArg!;
      }

      if (!isStaticJsUndefined(value)) {
        throw Completion.Throw("TypeError", "Derived constructor returned a non-object value.");
      }

      const thisBinding = yield* Q(constructorEnv.getThisBindingEvaluator());
      if (!isStaticJsObject(thisBinding)) {
        throw new StaticJsEngineError("Expected object this binding after constructor evaluation.");
      }

      return thisBinding;
    });
  }

  *makeConstructor(writablePrototype: boolean = true, prototype?: StaticJsObject) {
    if (this._constructorKind !== null) {
      throw new StaticJsEngineError("Function is already a constructor");
    }

    // MakeConstructor 10.2.5.1
    // When is MakeConstructor called when F is NOT a function object?
    // Says use 10.3.2 for that case, but 10.3.2 says input F IS a function object!
    // Anyway, 10.2.5.1 is done in our construct method.

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

  protected *_evaluateBody(
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const node = this._node;
    switch (node.type) {
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "ObjectMethod":
      case "ClassMethod":
      case "ClassPrivateMethod":
        if (node.async) {
          if (node.generator) {
            return yield* this._evaluateAsyncGeneratorBody(node, args);
          } else {
            return yield* this._evaluateAsyncFunctionBody(node, args);
          }
        } else if (node.generator) {
          return yield* this._evaluateGeneratorBody(node, args);
        } else {
          return yield* this._evaluateFunctionBody(node, args);
        }
      case "ArrowFunctionExpression":
        if (node.async) {
          return yield* this._evaluateAsyncConciseBody(node, args);
        }
        return yield* this._evaluateConciseBody(node, args);
      case "StaticBlock":
        if (args.length !== 0) {
          throw new StaticJsEngineError("Static blocks cannot have arguments.");
        }
        return yield* this._evaluateClassStaticBlockBody(node);
    }

    if (isExpression(node)) {
      return yield* this._evaluateConciseBody(node, args);
    }

    // @ts-expect-error Should be unreachable if types are correct
    throw new StaticJsEngineError(`Unknown function body type: ${node.type}`);
  }

  private *_evaluateFunctionBody(
    node: Function,
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm } = this;

    yield* functionDeclarationInstantiation(this, args);

    try {
      yield* Q(EvaluateNodeCommand(node.body));
      return Completion.Return(realm.types.undefined);
    } catch (e) {
      if (Completion.Return.is(e)) {
        return e;
      } else {
        throw e;
      }
    }
  }

  private *_evaluateAsyncFunctionBody(
    node: Function,
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm } = this;

    const promiseCapability = yield* newPromiseCapability(realm.intrinsics.Promise);

    const completion = yield* captureThrownCompletion(functionDeclarationInstantiation(this, args));
    if (Completion.Abrupt.is(completion)) {
      yield* call(promiseCapability.reject, realm.types.undefined, [Completion.value(completion)]);
    } else {
      yield* asyncFunctionStart(promiseCapability, node.body);
    }
    return Completion.Return(promiseCapability.promise);
  }

  private *_evaluateAsyncGeneratorBody(
    node: Function,
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm } = this;

    // it looks like errors thrown during argument initialization are not caught by the generator, so we don't need to catch them here.
    yield* functionDeclarationInstantiation(this, args);

    function* evaluator() {
      yield* Q(EvaluateNodeCommand(node.body));
      throw Completion.Return(realm.types.undefined);
    }

    const proto = yield* getPrototypeFromConstructor(this, "AsyncGeneratorPrototype");
    const generator = new StaticJsAsyncGeneratorImpl(evaluator, null, realm, proto);

    return Completion.Return(generator);
  }

  private *_evaluateGeneratorBody(
    node: Function,
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm } = this;

    // it looks like errors thrown during argument initialization are not caught by the generator, so we don't need to catch them here.
    yield* functionDeclarationInstantiation(this, args);

    const evaluator = Q(EvaluateNodeCommand(node.body));

    const proto = yield* getPrototypeFromConstructor(this, "GeneratorPrototype");
    const generator = new StaticJsGeneratorImpl(evaluator, null, realm, proto);

    return Completion.Return(generator);
  }

  private *_evaluateConciseBody(
    node: ArrowFunctionExpression | Expression,
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm } = this;

    yield* functionDeclarationInstantiation(this, args);

    const expression = node.type == "ArrowFunctionExpression" ? node.body : node;

    let result: StaticJsValue = realm.types.undefined;
    try {
      // I can't tell at all what the spec wants here.  It's all over the place and doesn't match up with
      // what i know.
      // This is 15.3.5 - Arrow Function Definitions - Evaluation
      // This function is 15.3.3 - Runtime Semantics: EvaluateConciseBody
      // But this only covers the case of ConciseBody: ExpressionBody.
      // There's also ConciseBody : { FunctionBody }, but I cannot find anywhere
      // in the spec where that production is handled.
      // So... Just yolo I guess.
      const completion = yield* Q(EvaluateNodeCommand(expression));
      if (expression.type === "BlockStatement") {
        // Fuck it we ball
        return Completion.Return(realm.types.undefined);
      }
      if (completion) {
        result = yield* getValue(completion);
      }
      return Completion.Return(result);
    } catch (e) {
      if (Completion.Return.is(e)) {
        return e;
      } else {
        throw e;
      }
    }
  }

  private *_evaluateAsyncConciseBody(
    node: ArrowFunctionExpression | Expression,
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm } = this;

    const promiseCapability = yield* newPromiseCapability(realm.intrinsics.Promise);

    const completion = yield* captureThrownCompletion(functionDeclarationInstantiation(this, args));
    if (Completion.Abrupt.is(completion)) {
      yield* call(promiseCapability.reject, realm.types.undefined, [Completion.value(completion)]);
    } else {
      const expression = node.type === "ArrowFunctionExpression" ? node.body : node;
      // This is expected to be the ExpressionBody AST type, but babel doesn't have that.
      // Shamefully wrap it in a closure to get the expected behavior
      function* closure() {
        const value = yield* Q.val(EvaluateNodeCommand(expression));
        return Completion.Return(value);
      }

      yield* asyncFunctionStart(promiseCapability, closure());
    }

    return Completion.Return(promiseCapability.promise);
  }

  private *_evaluateClassStaticBlockBody(
    node: StaticBlock,
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    yield* functionDeclarationInstantiation(this, []);
    yield* Q(EvaluateNodeCommand(node));
    return Completion.Return(this.realm.types.undefined);
  }

  protected *_ordinaryCallBindThis(
    calleeContext: EvaluationContext,
    thisArgument: StaticJsValue,
  ): EvaluationGenerator<void> {
    const thisMode = this._thisMode;
    if (thisMode === "lexical") {
      return;
    }

    let thisValue: StaticJsValue;

    const localEnv = calleeContext.lexicalEnv;
    if (thisMode === "strict") {
      thisValue = thisArgument;
    } else {
      if (isStaticJsUndefined(thisArgument) || isStaticJsNull(thisArgument)) {
        thisValue = this.realm.globalThis;
      } else {
        thisValue = yield* toObject(thisArgument);
      }
    }

    if (localEnv instanceof StaticJsFunctionEnvironmentRecord === false) {
      throw new StaticJsEngineError(
        "Expected function environment record in ordinaryCallBindThis.",
      );
    }

    yield* localEnv.bindThisValue(thisValue);
  }

  protected *_prepareForOrdinaryCall(
    newTarget: StaticJsObject | null,
  ): EvaluationGenerator<EvaluationContext> {
    const env = yield* this._newFunctionEnvironment(newTarget);
    const context = EvaluationContext.createFunctionInvocationContext(
      this,
      this.scriptOrModule,
      this.realm,
      env,
      this._privateEnv ?? undefined,
    );

    EvaluationContext.push(context);
    return context;
  }

  protected *_newFunctionEnvironment(
    newTarget: StaticJsObject | null,
  ): EvaluationGenerator<StaticJsFunctionEnvironmentRecord> {
    const env = new StaticJsFunctionEnvironmentRecord(
      this,
      newTarget,
      this._thisMode === "lexical",
      this._environment,
      this.realm,
    );
    return env;
  }
}
