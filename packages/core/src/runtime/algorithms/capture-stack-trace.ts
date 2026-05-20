import { SourceLocation } from "@babel/types";

import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsAstFunction } from "../types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { definePropertyOrThrow } from "./define-property-or-throw.js";
import { get } from "./get.js";
import { toString } from "./to-string.js";

// 4 spaces
const StackFrameIndent = "    ";

/**
 * Capture the stack trace into the target object, omitting calls from 'constructor' and up.
 * @param obj The object to capture the stack trace into.
 * @param constructor An optional constructor function to omit from the stack trace and all calls above it. If not provided, captures the full stack trace.
 *
 * @remarks
 * This is not part of the ECMAScript specification, but a common standard implemented by v8 and others.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
 */
export function* captureStackTrace(
  obj: StaticJsObject,
  constructor?: StaticJsValue | undefined,
): EvaluationGenerator<void> {
  const lines: string[] = [];

  let nameStr = "Error";
  let message: string | null = null;

  const nameValue = yield* get(obj, "name");
  if (nameValue) {
    nameStr = yield* toString.js(nameValue);
  }

  const messageValue = yield* get(obj, "message");
  if (messageValue) {
    message = yield* toString.js(messageValue);
  }

  lines.push(nameStr + (message ? `: ${message}` : ""));

  let seenConstructor = constructor ? false : true;

  const frames = EvaluationContext.stack.slice();
  let frame: EvaluationContext | undefined;

  while ((frame = frames.pop())) {
    if (!seenConstructor) {
      if (frame.function === constructor) {
        seenConstructor = true;
      }
      continue;
    }

    let line: string = StackFrameIndent;

    if (frame.function) {
      const func = frame.function;

      const functionName = yield* get(func, "name");

      if (isStaticJsString(functionName)) {
        line += `at ${functionName.value}`;
      } else {
        // Note: v8 somehow will magically know the original name of the function if the name is not a string.
        // Wait, what is func.ecmaScriptCode.loc.identifierName?  Would that be useful here?
        line += `at <unknown>`;
      }

      if (func instanceof StaticJsAstFunction) {
        const loc = func.ecmaScriptCode.loc;
        if (loc) {
          // TODO: Use line and column of the current node.
          line += ` (${captureStackLocation(loc)})`;
        }
      }
    } else if (frames.length === 0) {
      // Last frame.
      // Note scriptOrModule will be populated for every frame, but we are only interested in capturing it for the entrypoint script,
      // and only if we are not a function.
      // NOTE: Will this include the value for host-ran StaticJsCallable.call?
      const loc = frame.scriptOrModule?.ecmaScriptCode.loc;
      if (loc) {
        // TODO: Use the line and column of the current node.
        line += `at ${captureStackLocation(loc)}`;
      }
    }

    lines.push(line);
  }

  yield* setErrorStack(obj, EvaluationContext.current.realm.types.string(lines.join("\n")));
}

function captureStackLocation(loc: SourceLocation): string {
  return `${loc.filename}:${loc.start.line}:${loc.start.column}`;
}

function* setErrorStack(obj: StaticJsObject, stack: StaticJsValue): EvaluationGenerator<void> {
  // Note: V8 uses a getter/setter here, while firefox and others use a writable data property.
  // We are following v8 conventions, here and elsewhere, for error stacks.
  yield* definePropertyOrThrow(obj, "stack", {
    get: new StaticJsNativeFunctionImpl(obj.realm, "", function* () {
      return stack;
    }),
    set: new StaticJsNativeFunctionImpl(obj.realm, "", function* (value) {
      stack = value;
      return obj.realm.types.undefined;
    }),
    enumerable: false,
    configurable: true,
  });
}
