import {
  blockStatement,
  Expression,
  Function,
  functionDeclaration,
  identifier,
} from "@babel/types";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { StaticJsPrivateEnvironmentRecord } from "../../../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../../../../runtime/environments/StaticJsEnvironmentRecord.js";
import { StaticJsRealm } from "../../../../runtime/realm/StaticJsRealm.js";
import { isStaticJsObject, StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { StaticJsAstFunction } from "../../../../runtime/types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsCallable } from "../../../../runtime/types/StaticJsCallable.js";
import { isStaticJsValue, StaticJsValue } from "../../../../runtime/types/StaticJsValue.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import {
  StaticJsPrivateElementAccessor,
  StaticJsPrivateElementMethod,
} from "../../../../runtime/types/StaticJsPrivateElement.js";
import { StaticJsClassFieldDefinitionRecord } from "../ClassFieldDefinitionRecord.js";
import { FunctionEvaluateBodyCommand } from "../../../commands/FunctionEvaluateCommand.js";
import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "../../../completions/capture-thrown-completion.js";
import { Q } from "../../../completions/Q.js";
import { Completion } from "../../../completions/Completion.js";
import { ordinaryCreateFromConstructor } from "../../../../runtime/algorithms/ordinary-create-from-constructor.js";
import { initializeInstanceElements } from "../evaluation/initialize-instance-elements.js";
import { isStaticJsUndefined } from "../../../../runtime/types/StaticJsUndefined.js";
import { rethrowCompletion } from "../../../completions/rethrow-completion.js";

export type StaticJsClassConstructorNativeConstruct = (
  thisArg: StaticJsValue | undefined,
  newTarget: StaticJsCallable | undefined,
  args: StaticJsValue[],
) => EvaluationGenerator<StaticJsObject>;
export class StaticJsClassConstructorFunction extends StaticJsAstFunction {
  private readonly _nativeFunc: StaticJsClassConstructorNativeConstruct | null;

  constructor(
    realm: StaticJsRealm,
    node: Function | Expression | StaticJsClassConstructorNativeConstruct,
    env: StaticJsEnvironmentRecord,
    privateEnv: StaticJsPrivateEnvironmentRecord,
    prototype = realm.types.prototypes.functionProto,
  ) {
    // Source + node should be the same thing to the spec...
    const { strict, scriptOrModule } = EvaluationContext.current;

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

    super(realm, resolvedNode, {
      // Not used if this is a native function
      // This is a little confusing, as native funcs are
      // created with CreateBuiltinFunction and are a different code path.
      // We can swap between the two because this is the only way we currently
      // can support the class-specific slots.
      thisMode: "non-lexical-this",
      env,
      privateEnv,
      prototype,
      scriptOrModule,
      strict,
    });

    this._nativeFunc = resolvedConstruct;
  }

  privateMethods: (StaticJsPrivateElementMethod | StaticJsPrivateElementAccessor)[] = [];
  fields: StaticJsClassFieldDefinitionRecord[] = [];

  override *callEvaluator(thisArg: StaticJsValue, args?: StaticJsValue[]) {
    if (this._nativeFunc) {
      return yield* this._runNativeFunc(thisArg, undefined, args ?? []);
    }

    return yield* super.callEvaluator(thisArg, args);
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
