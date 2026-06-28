import type { SourceLocation } from "@babel/types";

import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import { containerMarkable } from "#memory/implementation/container-markable.js";
import { StaticJsAstFunction } from "#types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsFunction } from "#types/StaticJsFunction.js";
import { isStaticJsString } from "#types/StaticJsString.js";

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
 * https://v8.dev/docs/stack-trace-api
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
      } else if (isStaticJsFunction(func)) {
        line += `at ${func.initialName ?? "<anonymous>"}`;
      } else {
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

  // Note: v8 avoids formatting the strings until the first stack access.

  yield* setErrorStack(obj, EvaluationContext.current.realm.types.string(lines.join("\n")));
}

function captureStackLocation(loc: SourceLocation): string {
  return `${loc.filename}:${loc.start.line}:${loc.start.column}`;
}

function* setErrorStack(obj: StaticJsObject, stack: StaticJsValue): EvaluationGenerator<void> {
  const realm = obj.realm;
  const markable = containerMarkable(stack);

  // Note: V8 uses a getter/setter here, as it avoids formatting the string until it's accessed.
  // Firefox and others use a writable data property instead.
  // We are following v8 conventions, here and elsewhere, for error stacks,
  // but we (currently) don't lazy format it.
  yield* definePropertyOrThrow(obj, "stack", {
    get: new StaticJsNativeFunctionImpl(
      realm,
      "",
      function* () {
        return stack;
      },
      {
        mark: [markable],
      },
    ),
    set: new StaticJsNativeFunctionImpl(
      realm,
      "",
      function* (value) {
        stack = value;
        markable.set(value);
        return realm.types.undefined;
      },
      {
        mark: [markable],
      },
    ),
    enumerable: false,
    configurable: true,
  });
}
