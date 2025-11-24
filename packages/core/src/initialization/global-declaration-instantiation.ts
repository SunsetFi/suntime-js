import {
  type Node,
  type FunctionDeclaration,
  isVariableDeclaration,
} from "@babel/types";

import {
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
} from "../runtime/types/StaticJsPropertyDescriptor.js";

import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { ThrowCompletion } from "../evaluator/completions/ThrowCompletion.js";

import type EvaluationGenerator from "../evaluator/EvaluationGenerator.js";
import type EvaluationContext from "../evaluator/EvaluationContext.js";

import lexicallyDeclaredNames from "./algorithms/lexically-declared-names.js";
import varDeclaredNames from "./algorithms/var-declared-names.js";
import hasRestrictedGlobalProperty from "./algorithms/has-restricted-global-property.js";
import varScopedDeclarations from "./algorithms/var-scoped-declarations.js";
import boundNames from "./algorithms/bound-names.js";
import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";
import createFunction from "../evaluator/node-evaluators/Function.js";

export default function* globalDeclarationInstantiation(
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const lexNames = lexicallyDeclaredNames(node);
  const varNames = varDeclaredNames(node);

  for (const name of lexNames) {
    const hasBinding = yield* hasLexicalDeclaration(name, context);
    if (hasBinding) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "SyntaxError",
          `${name} has already been declared`,
        ),
      );
    }

    const restricted = yield* hasRestrictedGlobalProperty(name, context);
    if (restricted) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "SyntaxError",
          `Cannot declare lexically scoped variable ${name} in global scope`,
        ),
      );
    }
  }

  for (const name of varNames) {
    const hasBinding = yield* hasLexicalDeclaration(name, context);
    if (hasBinding) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "SyntaxError",
          `${name} has already been declared`,
        ),
      );
    }
  }

  const varDeclarations = varScopedDeclarations(node);
  const functionsToInitialize = [];
  const declaredFunctionNames = new Set<string>();
  for (const d of varDeclarations.reverse()) {
    if (d.type !== "FunctionDeclaration") {
      continue;
    }

    const fnName = boundNames(d)[0];
    if (declaredFunctionNames.has(fnName)) {
      continue;
    }
    const isDefinable = yield* canDeclareGlobalFunction(fnName, context);
    if (!isDefinable) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "TypeError",
          `Cannot declare global function ${fnName}`,
        ),
      );
    }

    declaredFunctionNames.add(fnName);
    functionsToInitialize.unshift(d);
  }

  const declaredVarNames = new Set<string>();
  for (const d of varDeclarations) {
    if (d.type !== "VariableDeclaration") {
      continue;
    }

    for (const vn of boundNames(d)) {
      if (declaredFunctionNames.has(vn)) {
        continue;
      }

      const definable = yield* canDeclareGlobalVar(vn, context);
      if (!definable) {
        throw new ThrowCompletion(
          context.realm.types.error(
            "TypeError",
            `Cannot declare global variable ${vn}`,
          ),
        );
      }

      declaredVarNames.add(vn);
    }
  }

  if (!context.strict) {
    // Annex B.3.3.3 Global var instantiation for web compatibility
    const declaredFunctionOrVarNames = [
      ...declaredFunctionNames,
      ...declaredVarNames,
    ];
    const declarations = yield* collectAnnexBFunctionDeclarations(node);
    for (const f of declarations) {
      if (!f.id || f.id.type !== "Identifier") {
        continue;
      }

      const F = f.id.name;
      // There's some notes about "if replacing the FunctionDeclaration with a VariableStatement ... would not produce any EarlyErrors for script"
      // What does that mean?  How can we tell?
      const hasDeclaration = context.lexicalEnv.hasBindingEvaluator(F);
      if (hasDeclaration) {
        continue;
      }

      const fnDefinable = yield* canDeclareGlobalFunction(F, context);
      if (!fnDefinable) {
        continue;
      }

      if (declaredFunctionOrVarNames.includes(F)) {
        continue;
      }

      yield* createGlobalVarBinding(F, false, context);
      declaredFunctionOrVarNames.push(F);

      f.extra = { ...f.extra, annexBHoisted: F };
    }
  }

  const lexDeclarations = lexicallyScopedDeclarations(node);
  for (const d of lexDeclarations) {
    for (const dn of boundNames(d)) {
      if (isVariableDeclaration(d) && d.kind === "const") {
        yield* context.lexicalEnv.createImmutableBindingEvaluator(dn, false);
      } else {
        yield* context.lexicalEnv.createMutableBindingEvaluator(dn, false);
      }
    }
  }

  for (const f of functionsToInitialize) {
    const fnName = boundNames(f)[0];
    const fn = createFunction(fnName, f, context);
    yield* createGlobalFunctionBinding(fnName, fn, false, context);
  }

  for (const vn of declaredVarNames) {
    yield* createGlobalVarBinding(vn, false, context);
  }
}

function* hasLexicalDeclaration(
  name: string,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const dclRec = context.realm.declarativeRecord;
  return yield* dclRec.hasBindingEvaluator(name);
}

function* canDeclareGlobalFunction(
  name: string,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const existingProp =
    yield* context.realm.global.getOwnPropertyDescriptorEvaluator(name);
  if (!existingProp) {
    return context.realm.global.extensible;
  }

  if (existingProp.configurable) {
    return true;
  }

  if (isStaticJsDataPropertyDescriptor(existingProp)) {
    return Boolean(existingProp.writable && existingProp.enumerable);
  }

  return false;
}

function* createGlobalFunctionBinding(
  name: string,
  value: StaticJsValue,
  deletable: boolean,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const globalObject = context.realm.global;

  const existingProp =
    yield* globalObject.getOwnPropertyDescriptorEvaluator(name);

  let desc: StaticJsPropertyDescriptor;
  if (!existingProp || existingProp.configurable) {
    desc = {
      value,
      writable: true,
      enumerable: true,
      configurable: deletable,
    };
  } else {
    desc = {
      value,
    };
  }

  const result = yield* globalObject.definePropertyEvaluator(name, desc);
  if (!result) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        `Cannot create global function binding for ${name}`,
      ),
    );
  }

  yield* globalObject.setPropertyEvaluator(name, value, false);
}

function* canDeclareGlobalVar(
  name: string,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const hasOwnProp = yield* context.realm.global.hasOwnPropertyEvaluator(name);
  if (hasOwnProp) {
    return true;
  }

  return context.realm.global.extensible;
}

function* createGlobalVarBinding(
  name: string,
  deletable: boolean,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const objRec = context.realm.objectEnv;
  const globalObject = context.realm.global;
  const hasProperty = yield* globalObject.hasOwnPropertyEvaluator(name);
  const extensible = globalObject.extensible;

  if (!hasProperty && extensible) {
    yield* objRec.createMutableBindingEvaluator(name, deletable);
    yield* objRec.initializeBindingEvaluator(
      name,
      context.realm.types.undefined,
    );
  }
}

function* collectAnnexBFunctionDeclarations(
  node: Node,
): EvaluationGenerator<FunctionDeclaration[]> {
  switch (node.type) {
    case "File":
      return yield* collectAnnexBFunctionDeclarations(node.program);
    case "Program": {
      let funcs: FunctionDeclaration[] = [];
      for (const stmt of node.body) {
        const innerFuncs = yield* collectAnnexBFunctionDeclarations(stmt);
        funcs = funcs.concat(innerFuncs);
      }
      return funcs;
    }
    case "BlockStatement": {
      let funcs: FunctionDeclaration[] = [];
      for (const stmt of node.body) {
        const innerFuncs = yield* collectAnnexBFunctionDeclarations(stmt);
        funcs = funcs.concat(innerFuncs);
      }
      return funcs;
    }
    case "SwitchStatement": {
      for (const switchCase of node.cases) {
        let funcs: FunctionDeclaration[] = [];
        const innerFuncs = yield* collectAnnexBFunctionDeclarations(switchCase);
        funcs = funcs.concat(innerFuncs);
        return funcs;
      }
      return [];
    }
    case "SwitchCase": {
      let funcs: FunctionDeclaration[] = [];
      for (const stmt of node.consequent) {
        const innerFuncs = yield* collectAnnexBFunctionDeclarations(stmt);
        funcs = funcs.concat(innerFuncs);
      }
      return funcs;
    }
    case "FunctionDeclaration":
      return [node];
    default:
      return [];
  }
}
