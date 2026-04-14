import {
  blockStatement,
  Expression,
  Function,
  functionDeclaration,
  identifier,
  isFunction,
} from "@babel/types";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsAstFunction, validateStaticJsAstFunctionParams } from "./StaticJsAstFunction.js";
import { StaticJsCallable } from "../../StaticJsCallable.js";
import { StaticJsValue } from "../../StaticJsValue.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { StaticJsPrivateElement } from "../../../../evaluator/node-evaluators/Classes/PrivateElement.js";
import { StaticJsClassFieldDefinitionRecord } from "../../../../evaluator/node-evaluators/Classes/ClassFieldDefinitionRecord.js";
import { FunctionEvaluateBodyCommand } from "../../../../evaluator/commands/FunctionEvaluateCommand.js";
import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";

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
    let resolvedParams: Function["params"];
    let resolvedNode: Function | Expression;
    let resolvedConstruct: StaticJsClassConstructorNativeConstruct | null;
    if (typeof node === "function") {
      resolvedNode = functionDeclaration(identifier(""), [], blockStatement([]));
      resolvedParams = [];
      resolvedConstruct = node;
    } else {
      resolvedNode = node;
      resolvedParams = isFunction(node) ? node.params : [];
      resolvedConstruct = null;
    }

    validateStaticJsAstFunctionParams(resolvedParams);

    super(realm, null, resolvedParams, resolvedNode, {
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

  privateMethods: StaticJsPrivateElement[] = [];
  fields: StaticJsClassFieldDefinitionRecord[] = [];

  override *callEvaluator(thisArg: StaticJsValue, args?: StaticJsValue[]) {
    if (this._nativeFunc) {
      return yield* this._runNativeFunc(thisArg, undefined, args ?? []);
    }

    return yield* super.callEvaluator(thisArg, args);
  }

  override *constructEvaluator(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
  ): EvaluationGenerator<StaticJsObject> {
    if (this._nativeFunc) {
      return yield* this._runNativeFunc(undefined, newTarget, args ?? []);
    }

    return yield* super.constructEvaluator(args, newTarget);
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
