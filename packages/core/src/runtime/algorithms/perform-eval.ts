import { Node } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { StaticJsSyntaxError } from "../../errors/StaticJsSyntaxError.js";
import { EvaluateNodeCommand } from "../../evaluator/commands/EvaluateNodeCommand.js";
import { captureThrownCompletion } from "../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import evalDeclarationInstantiation from "../../evaluator/instantiation/eval-declaration-instantiation.js";
import { containsArguments } from "../../parser/contains-arguments.js";
import { containsNewTarget } from "../../parser/contains-new-target.js";
import { containsSuperCall } from "../../parser/contains-super-call.js";
import { containsSuperProperty } from "../../parser/contains-super-property.js";
import { parseScript } from "../../parser/parse-script.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsFunctionEnvironmentRecord } from "../environments/implementation/StaticJsFunctionEnvironmentRecord.js";
import { StaticJsPrivateEnvironmentRecord } from "../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { StaticJsClassConstructorFunction } from "../types/implementation/functions/StaticJsClassConstructorFunction.js";
import { StaticJsMethodFunction } from "../types/implementation/functions/StaticJsMethodFunction.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { getThisEnvironment } from "./get-this-environment.js";

export function* performEval(
  source: StaticJsValue,
  strictCaller: boolean,
  direct: boolean,
): EvaluationGenerator<StaticJsValue> {
  if (direct === false && strictCaller !== false) {
    throw new StaticJsEngineError("Indirect eval calls cannot be made from strict mode code");
  }

  if (!isStaticJsString(source)) {
    return source;
  }

  const evalRealm = EvaluationContext.current.realm;

  let inFunction = false;
  let inMethod = false;
  let inDerivedConstructor = false;
  let inClassFieldInitializer = false;

  if (direct) {
    const thisEnvRec = yield* getThisEnvironment();
    if (thisEnvRec instanceof StaticJsFunctionEnvironmentRecord) {
      const func = thisEnvRec.functionObject;
      inFunction = true;
      inMethod = yield* thisEnvRec.hasSuperBindingEvaluator();
      if (func instanceof StaticJsClassConstructorFunction) {
        if (func.constructorKind === "derived") {
          inDerivedConstructor = true;
        }
      }
      if (func instanceof StaticJsMethodFunction) {
        if (func.classFieldInitializerName) {
          inClassFieldInitializer = true;
        }
      }
    }
  }

  let node: Node;
  try {
    node = parseScript(source.value, "eval", {
      strictMode: strictCaller,
      evalMode: direct ? "direct" : "indirect",
    });
  } catch (e: unknown) {
    if (e instanceof StaticJsSyntaxError) {
      throw Completion.Throw("SyntaxError", e.message);
    }

    throw e;
  }

  if (!inFunction && containsNewTarget(node)) {
    throw Completion.Throw("SyntaxError", "new.target is not allowed outside of functions");
  }

  if (!inMethod && containsSuperProperty(node)) {
    throw Completion.Throw("SyntaxError", "super is not allowed outside of methods");
  }

  if (!inDerivedConstructor && containsSuperCall(node)) {
    throw Completion.Throw(
      "SyntaxError",
      "new.target is not allowed outside of derived constructors",
    );
  }

  if (inClassFieldInitializer && containsArguments(node)) {
    throw Completion.Throw("SyntaxError", "arguments is not allowed in class field initializers");
  }

  // Very grossness due to our strict tracking not being at all
  // spec aligned.
  // In theory we should be able to walk the node tree up
  // to find this, but we currently can't go to a node's parent from itself.
  const strict = node.program.directives.some((dir) => dir.value.value === "use strict");
  let strictEval = strictCaller || strict || EvaluationContext.current.strict;
  const runningContext = EvaluationContext.current;

  let lexEnv: StaticJsEnvironmentRecord;
  let varEnv: StaticJsEnvironmentRecord;
  let privateEnv: StaticJsPrivateEnvironmentRecord | null;
  if (direct) {
    lexEnv = new StaticJsDeclarativeEnvironmentRecord(runningContext.lexicalEnv, evalRealm);
    varEnv = runningContext.variableEnv;
    privateEnv = runningContext.privateEnv;
  } else {
    lexEnv = new StaticJsDeclarativeEnvironmentRecord(evalRealm.globalEnv, evalRealm);
    varEnv = evalRealm.globalEnv;
    privateEnv = null;
  }

  if (strictEval) {
    varEnv = lexEnv;
  }

  const evalContext = EvaluationContext.createRootContext(
    runningContext.scriptOrModule,
    strictEval,
    evalRealm,
    lexEnv,
  );
  evalContext.variableEnv = varEnv;
  evalContext.lexicalEnv = lexEnv;
  evalContext.privateEnv = privateEnv;

  EvaluationContext.push(evalContext);
  try {
    let result: Completion = yield* captureThrownCompletion(
      evalDeclarationInstantiation(node, varEnv, lexEnv, privateEnv, strictEval),
    );
    if (Completion.Normal.is(result)) {
      result = yield* captureThrownCompletion(EvaluateNodeCommand(node));
    }
    if (Completion.Normal.is(result) && result === null) {
      result = evalRealm.types.undefined;
    }

    // Spec doesn't specify calling getValue here,
    // I think it expects ScriptBody to always return a value or empty?
    return yield* Q.val(result);
  } finally {
    EvaluationContext.pop();
  }
}
