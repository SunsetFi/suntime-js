import { ClassDeclaration, ClassExpression } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { privateBoundIdentifiers } from "../../../../grammar/private-bound-identifiers.js";
import call from "../../../../runtime/algorithms/call.js";
import { get } from "../../../../runtime/algorithms/get.js";
import isConstructor from "../../../../runtime/algorithms/is-constructor.js";
import { ordinaryCreateFromConstructor } from "../../../../runtime/algorithms/ordinary-create-from-constructor.js";
import { setFunctionName } from "../../../../runtime/algorithms/set-function-name.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../../../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsPrivateEnvironmentRecord } from "../../../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsAstFunction } from "../../../../runtime/types/implementation/functions/StaticJsAstFunction.js";
import { isStaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";
import { isStaticJsNull, StaticJsNull } from "../../../../runtime/types/StaticJsNull.js";
import { isStaticJsObject, StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import {
  isStaticJsPrivateElement,
  StaticJsPrivateElement,
  StaticJsPrivateElementAccessor,
  StaticJsPrivateElementMethod,
} from "../../../../runtime/types/StaticJsPrivateElement.js";
import { StaticJsPrivateName } from "../../../../runtime/types/StaticJsPrivateName.js";
import { StaticJsPropertyKey } from "../../../../runtime/types/StaticJsPropertyKey.js";
import { StaticJsValue } from "../../../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../../../commands/EvaluateNodeCommand.js";
import { captureThrownCompletion } from "../../../completions/capture-thrown-completion.js";
import { Completion } from "../../../completions/Completion.js";
import { Q } from "../../../completions/Q.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import {
  isStaticJsClassFieldDefinitionRecord,
  StaticJsClassFieldDefinitionRecord,
} from "../ClassFieldDefinitionRecord.js";
import {
  isStaticJsClassStaticBlockDefinitionRecord,
  StaticJsClassStaticBlockDefinitionRecord,
} from "../ClassStaticBlockDefinitionRecord.js";
import { StaticJsClassConstructorFunction } from "../types/StaticJsClassConstructorFunction.js";
import {
  classElementEvaluation,
  ClassElementEvaluationResult,
} from "./class-element-evaluation.js";
import { constructorMethod } from "./constructor-method.js";
import { defineField } from "./define-field.js";
import { defineMethodProperty } from "./define-method-property.js";
import { defineMethod } from "./define-method.js";
import { initializeInstanceElements } from "./initialize-instance-elements.js";
import { isStatic } from "./is-static.js";
import { nonConstructorElements } from "./non-constructor-elements.js";
import { privateMethodOrAccessorAdd } from "./private-method-or-accessor-add.js";

export const classDefinitionEvaluation = Q.makeReceiver(function* classDefinitionEvaluation(
  node: ClassDeclaration | ClassExpression,
  classBinding: string | null,
  className: StaticJsPropertyKey | StaticJsPrivateName,
): EvaluationGenerator<StaticJsValue> {
  const context = EvaluationContext.current;
  const { lexicalEnv: env, realm, privateEnv: outerPrivateEnvironment } = context;
  const classEnv = new StaticJsDeclarativeEnvironmentRecord(env, realm);
  if (classBinding) {
    yield* classEnv.createImmutableBindingEvaluator(classBinding, true);
  }

  const classPrivateEnvironment = new StaticJsPrivateEnvironmentRecord(outerPrivateEnvironment);
  if (node.body.body.length > 0) {
    for (const dn of privateBoundIdentifiers(node.body)) {
      if (!classPrivateEnvironment.hasPrivateName(dn)) {
        classPrivateEnvironment.addPrivateName(dn);
      }
    }
  }

  let protoParent: StaticJsObject | StaticJsNull;
  let constructorParent: StaticJsObject;
  if (!node.superClass) {
    protoParent = realm.types.prototypes.objectProto;
    constructorParent = realm.types.prototypes.functionProto;
  } else {
    context.lexicalEnv = classEnv;
    const superclassRef = yield* EvaluateNodeCommand(node.superClass);
    context.lexicalEnv = env;
    const superclass = yield* Q.val(superclassRef);
    if (isStaticJsNull(superclass)) {
      protoParent = realm.types.null;
      constructorParent = realm.types.prototypes.functionProto;
    } else if (!isConstructor(superclass)) {
      throw Completion.Throw("TypeError", "Superclass must be null or a constructor");
    } else {
      const superProto = yield* Q(get(superclass, "prototype"));
      if (!isStaticJsObject(superProto) && !isStaticJsNull(superProto)) {
        throw Completion.Throw("TypeError", "Superclass prototype must be an object or null");
      }
      protoParent = superProto;
      constructorParent = superclass;
    }
  }

  const proto = realm.types.object(undefined, protoParent);
  const constructor = constructorMethod(node.body);

  // Another gross try/finally as we haven't fully converted to completions.
  context.lexicalEnv = classEnv;
  context.privateEnv = classPrivateEnvironment;
  try {
    let constructorKind: "derived" | "base";
    let F: StaticJsClassConstructorFunction;
    if (!constructor) {
      F = new StaticJsClassConstructorFunction(
        realm,
        function* (
          _thisArg: StaticJsValue | undefined,
          newTarget: StaticJsObject | undefined,
          args: StaticJsValue[],
        ) {
          const F = EvaluationContext.current.function;
          if (!isStaticJsFunction(F)) {
            throw new StaticJsEngineError(
              "Default class constructor running, but current function is not a function",
            );
          }
          // The spec is clear that it wants us to check the "current running function", but our system
          // requires it to be this type of function specifically
          if (F instanceof StaticJsClassConstructorFunction === false) {
            throw new StaticJsEngineError(
              "Cannot invoke a class default constructor on a current function that is not a StaticJsClassConstructorFunction",
            );
          }

          if (!newTarget) {
            throw Completion.Throw(
              "TypeError",
              "Default class constructor cannot be called without new",
            );
          }

          if (!isStaticJsFunction(newTarget)) {
            throw new StaticJsEngineError(
              "Default class constructor's new target is not a function",
            );
          }

          let result: StaticJsObject;
          if (constructorKind! === "derived") {
            const func = yield* F.getPrototypeOfEvaluator();
            if (!isConstructor(func)) {
              throw Completion.Throw("TypeError", "Superclass constructor must be a constructor");
            }
            result = yield* func.constructEvaluator(args);
          } else {
            // The spec says newTarget is an object like, but we always set it to a callable,
            // and the spec says OrdinaryCreateFromConstructor must receive a function???
            // Reflect.construct gates it to be a function constructor, so...
            result = yield* Q(ordinaryCreateFromConstructor(newTarget, "objectProto"));
          }
          yield* initializeInstanceElements(result, F);
          return result;
        },
        // Aren't used for native ctor mode.
        classEnv,
        classPrivateEnvironment,
        constructorParent,
      );
    } else {
      const constructorInfo = yield* Q(defineMethod(constructor, proto, constructorParent));

      if (constructorInfo.closure instanceof StaticJsClassConstructorFunction === false) {
        throw new StaticJsEngineError(
          "Class defineMethod on constructor did not result in a ClassConstructor function.",
        );
      }

      F = constructorInfo.closure;

      yield* setFunctionName(F, className);
    }

    // This is supposed to apply to our native default constructor too, but...
    // I think we do everything manually above???
    if (F instanceof StaticJsAstFunction) {
      yield* F.makeConstructor(false, proto);
      if (node.superClass) {
        F.constructorKind = "derived";
        // Jank: Native functions don't have this, so we set the local variable here too
        constructorKind = "derived";
      }
    }

    yield* defineMethodProperty(proto, "constructor", F, false);

    let elements = nonConstructorElements(node.body);
    let instancePrivateMethods: (StaticJsPrivateElementMethod | StaticJsPrivateElementAccessor)[] =
      [];
    let staticPrivateMethods: StaticJsPrivateElementMethod[] = [];
    let instanceFields: StaticJsClassFieldDefinitionRecord[] = [];
    let staticElements: (
      | StaticJsClassFieldDefinitionRecord
      | StaticJsClassStaticBlockDefinitionRecord
    )[] = [];
    for (const e of elements) {
      // public, private, protected
      if (e.type === "ClassAccessorProperty") {
        throw new StaticJsEngineError("Class accessor properties are not supported");
      }

      const isEStatic = isStatic(e);
      let element: ClassElementEvaluationResult | Completion.Abrupt | null;
      if (!isEStatic) {
        element = yield* classElementEvaluation(e, proto);
      } else {
        element = yield* classElementEvaluation(e, F);
      }

      if (Completion.Abrupt.is(element)) {
        // Done by Finally
        // EvaluationContext.current.lexicalEnv = env;
        // EvaluationContext.current.privateEnv = outerPrivateEnvironment;
        return yield* Q(element);
      }

      if (isStaticJsPrivateElement(element)) {
        if (element.kind !== "method" && element.kind !== "accessor") {
          throw new StaticJsEngineError("Private class elements must be methods or accessors");
        }

        let container: StaticJsPrivateElement[];
        if (!isEStatic) {
          container = instancePrivateMethods;
        } else {
          container = staticPrivateMethods;
        }

        const peIndex = container.findIndex((m) => m.key === element.key);
        const pe = peIndex !== -1 ? container[peIndex] : undefined;
        if (pe) {
          if (element.kind !== "accessor" || pe.kind !== "accessor") {
            throw new StaticJsEngineError("Duplicate private element keys must be accessors");
          }
          let combined: StaticJsPrivateElement;
          if (element.get === undefined) {
            combined = {
              type: "private-element",
              key: element.key,
              kind: "accessor",
              get: pe.get,
              set: element.set,
            };
          } else {
            combined = {
              type: "private-element",
              key: element.key,
              kind: "accessor",
              get: element.get,
              set: pe.set,
            };
          }
          container[peIndex] = combined;
        } else {
          container.push(element);
        }
      } else if (isStaticJsClassFieldDefinitionRecord(element)) {
        if (!isEStatic) {
          instanceFields.push(element);
        } else {
          staticElements.push(element);
        }
      } else if (isStaticJsClassStaticBlockDefinitionRecord(element)) {
        staticElements.push(element);
      }
    }

    EvaluationContext.current.lexicalEnv = env;
    if (classBinding) {
      yield* classEnv.initializeBindingEvaluator(classBinding, F);
    }

    F.privateMethods = instancePrivateMethods;
    F.fields = instanceFields;

    for (const method of staticPrivateMethods) {
      yield* privateMethodOrAccessorAdd(F, method);
    }

    for (const elementRecord of staticElements) {
      let result: void | Completion;
      if (isStaticJsClassFieldDefinitionRecord(elementRecord)) {
        result = yield* defineField(F, elementRecord);
      } else {
        if (!isStaticJsClassStaticBlockDefinitionRecord(elementRecord)) {
          throw new StaticJsEngineError("Expected class static block definition record");
        }
        result = yield* captureThrownCompletion(call(elementRecord.bodyFunction, F));
      }

      if (Completion.Abrupt.is(result)) {
        EvaluationContext.current.privateEnv = outerPrivateEnvironment;
        return yield* Q(result);
      }
    }

    return F;
  } finally {
    const ctx = EvaluationContext.current;
    ctx.lexicalEnv = env;
    ctx.privateEnv = outerPrivateEnvironment;
  }
});
