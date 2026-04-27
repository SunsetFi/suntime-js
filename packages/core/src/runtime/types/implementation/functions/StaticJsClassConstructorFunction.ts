import {
  blockStatement,
  Expression,
  Function,
  functionDeclaration,
  identifier,
} from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { FunctionEvaluateBodyCommand } from "../../../../evaluator/commands/FunctionEvaluateCommand.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { rethrowCompletion } from "../../../../evaluator/completions/rethrow-completion.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { StaticJsClassFieldDefinitionRecord } from "../../../../evaluator/node-evaluators/Classes/ClassFieldDefinitionRecord.js";
import { initializeInstanceElements } from "../../../../evaluator/node-evaluators/Classes/evaluation/initialize-instance-elements.js";
import { ordinaryCreateFromConstructor } from "../../../algorithms/ordinary-create-from-constructor.js";
import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsCallable } from "../../StaticJsCallable.js";
import { isStaticJsObject, StaticJsObject } from "../../StaticJsObject.js";
import {
  StaticJsPrivateElementAccessor,
  StaticJsPrivateElementMethod,
} from "../../StaticJsPrivateElement.js";
import { isStaticJsUndefined } from "../../StaticJsUndefined.js";
import { isStaticJsValue, StaticJsValue } from "../../StaticJsValue.js";

import { StaticJsMethodFunction } from "./StaticJsMethodFunction.js";

export type StaticJsClassConstructorNativeConstruct = (
  thisArg: StaticJsValue | undefined,
  newTarget: StaticJsCallable | undefined,
  args: StaticJsValue[],
) => EvaluationGenerator<StaticJsObject>;
export class StaticJsClassConstructorFunction extends StaticJsMethodFunction {
  private readonly _nativeFunc: StaticJsClassConstructorNativeConstruct | null;

  constructor(
    realm: StaticJsRealm,
    node: Function | Expression | StaticJsClassConstructorNativeConstruct,
    homeObject: StaticJsObject,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord,
    prototype = realm.types.prototypes.functionProto,
  ) {
    // Hacky, to let us implement default constructors
    let resolvedNode: Function | Expression;
    let resolvedConstruct: StaticJsClassConstructorNativeConstruct | null;
    if (typeof node === "function") {
      resolvedNode = functionDeclaration(identifier(""), [], blockStatement([]));
      resolvedConstruct = node;
    } else {
      resolvedNode = node;
      resolvedConstruct = null;
    }

    super(realm, resolvedNode, homeObject, env, privateEnv, prototype);

    this._nativeFunc = resolvedConstruct;
  }

  privateMethods: (StaticJsPrivateElementMethod | StaticJsPrivateElementAccessor)[] = [];
  fields: StaticJsClassFieldDefinitionRecord[] = [];

  override *callEvaluator(): EvaluationGenerator<StaticJsValue> {
    throw Completion.Throw("TypeError", "Class constructor cannot be invoked without 'new'");
  }

  override *constructEvaluator(
    args: StaticJsValue[] = [],
    newTarget: StaticJsCallable = this,
  ): EvaluationGenerator<StaticJsObject> {
    if (this._nativeFunc) {
      return yield* this._runNativeFunc(undefined, newTarget, args);
    }

    const kind = this.constructorKind;
    if (kind === null) {
      // FIXME: Better error message.  What does NodeJs say?
      throw Completion.Throw("TypeError", "This function is not a constructor.");
    }

    let thisArg: StaticJsObject | undefined;
    if (kind === "base") {
      thisArg = yield* ordinaryCreateFromConstructor(newTarget, "objectProto");
    }

    const calleeContext = yield* this._prepareForOrdinaryCall(newTarget);

    // oxlint-disable-next-line typescript/no-this-alias
    const func = this;
    return yield* FunctionEvaluateBodyCommand(func, function* () {
      if (kind === "base") {
        yield* func._ordinaryCallBindThis(calleeContext, thisArg!);
        if (func instanceof StaticJsClassConstructorFunction) {
          const initializationResult = yield* initializeInstanceElements(thisArg!, func);
          if (Completion.Abrupt.is(initializationResult)) {
            EvaluationContext.pop();
            rethrowCompletion(initializationResult);
          }
        }
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

  private *_runNativeFunc(
    thisArg: StaticJsValue | undefined,
    newTarget: StaticJsCallable | undefined,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsObject> {
    const nativeFunc = this._nativeFunc;
    if (!nativeFunc) {
      throw new StaticJsEngineError(
        "Cannot invoke ClassConstructorFunction runNativeFunc: Not native.",
      );
    }

    yield* this._prepareForOrdinaryCall(newTarget ?? null);
    return yield* FunctionEvaluateBodyCommand(this, function* () {
      const result = yield* captureThrownCompletion(nativeFunc(thisArg, newTarget, args));
      EvaluationContext.pop();
      return yield* Q(result);
    });
  }
}
