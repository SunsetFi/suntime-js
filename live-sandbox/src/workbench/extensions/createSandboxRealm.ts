import {
  StaticJsRealm,
  createTimeBoundTaskRunner,
  createTimeSharingTaskRunner,
} from "@suntime-js/core";
import type { StaticJsValue } from "@suntime-js/core";

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
  const realm = StaticJsRealm({
    runTask: createTimeSharingTaskRunner(),
    // TODO: Make this properly handle new invocations and use it.
    // Cannot use this right now as on invoke it stores the end time and doesn't reset for new invocations.
    // runTaskSync: createTimeBoundTaskRunner(),
  });

  function makeConsoleMethod(
    name: string,
    prefix?: string,
  ): ReturnType<typeof realm.types.function> {
    return realm.types.function(name, (...args: StaticJsValue[]) => {
      const text = args.map((a) => a.toStringSync()).join(" ");
      const line = prefix ? `${prefix}${text}` : text;
      onOutput(line);
      return realm.types.undefined;
    });
  }

  const consoleObj = realm.types.object({
    log: { value: makeConsoleMethod("log"), configurable: true, enumerable: true, writable: true },
    info: {
      value: makeConsoleMethod("info"),
      configurable: true,
      enumerable: true,
      writable: true,
    },
    debug: {
      value: makeConsoleMethod("debug"),
      configurable: true,
      enumerable: true,
      writable: true,
    },
    warn: {
      value: makeConsoleMethod("warn", "[warn] "),
      configurable: true,
      enumerable: true,
      writable: true,
    },
    error: {
      value: makeConsoleMethod("error", "[error] "),
      configurable: true,
      enumerable: true,
      writable: true,
    },
  });

  realm.global.defineOwnPropertySync("console", {
    value: consoleObj,
    configurable: true,
    enumerable: true,
    writable: true,
  });

  return realm;
}
