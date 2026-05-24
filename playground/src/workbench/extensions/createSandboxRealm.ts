import type { StaticJsTypeFactory, StaticJsValue } from "@suntime-js/core";

import {
  StaticJsRealm,
  createTimeBoundTaskRunner,
  createTimeSharingTaskRunner,
} from "@suntime-js/core";

/**
 * Create a sandboxed realm whose `console` global routes output through a
 * provided callback.
 *
 * The callback is typically wired to emit a DAP "output" event so that output
 * appears in the VS Code debug console panel.
 *
 * Each call returns a fresh realm, so every debug session gets a clean
 * execution environment.
 *
 * @param onOutput  Called with the formatted output line (no trailing newline).
 */
export function createSandboxRealm(
  onOutput: (text: string) => void,
): ReturnType<typeof StaticJsRealm> {
  function makeConsoleMethod(
    types: StaticJsTypeFactory,
    name: string,
    prefix?: string,
  ): ReturnType<typeof types.function> {
    return types.function(name, (...args: StaticJsValue[]) => {
      const text = args.map((a) => a.toStringSync()).join(" ");
      const line = prefix ? `${prefix}${text}` : text;
      onOutput(line);
      return types.undefined;
    });
  }

  const realm = StaticJsRealm({
    // Time-share the evaluation to not deadlock the browser.
    runTask: createTimeSharingTaskRunner({
      // Conservative numbers to keep the site responsive at the cost of performance.
      operationsPerIteration: 2000,
      yieldTime: 10,
    }),
    // Capture any synchronous invocations.
    runTaskSync: createTimeBoundTaskRunner(),
    global: (types) =>
      types.object({
        console: {
          value: types.object({
            log: {
              value: makeConsoleMethod(types, "log"),
              configurable: true,
              enumerable: true,
              writable: true,
            },
            info: {
              value: makeConsoleMethod(types, "info"),
              configurable: true,
              enumerable: true,
              writable: true,
            },
            debug: {
              value: makeConsoleMethod(types, "debug"),
              configurable: true,
              enumerable: true,
              writable: true,
            },
            warn: {
              value: makeConsoleMethod(types, "warn", "[warn] "),
              configurable: true,
              enumerable: true,
              writable: true,
            },
            error: {
              value: makeConsoleMethod(types, "error", "[error] "),
              configurable: true,
              enumerable: true,
              writable: true,
            },
          }),
          configurable: true,
          enumerable: true,
          writable: true,
        },
      }),
  });

  return realm;
}
