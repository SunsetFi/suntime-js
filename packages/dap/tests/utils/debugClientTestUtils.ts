import { DebugClient } from "@vscode/debugadapter-testsupport";
import type { DebugProtocol } from "@vscode/debugprotocol";
import { resolve } from "node:path";

import type { StaticJsLaunchRequestArguments } from "../../src/index.js";

const packageRoot = resolve(__dirname, "../..");
const adapterEntry = resolve(packageRoot, "src", "run.ts");
const tsxRuntime = resolve(
  packageRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "tsx.cmd" : "tsx",
);

export function createDebugClient(): DebugClient {
  return new DebugClient(tsxRuntime, adapterEntry, "staticjs");
}

export async function initialize(client: DebugClient): Promise<DebugProtocol.InitializeResponse> {
  return client.initializeRequest({
    adapterID: "staticjs",
    clientID: "vitest",
    columnsStartAt1: true,
    linesStartAt1: true,
    pathFormat: "path",
  });
}

export async function initializeAndWait(
  client: DebugClient,
): Promise<DebugProtocol.InitializeResponse> {
  const initialized = client.waitForEvent("initialized");
  const response = await initialize(client);
  await initialized;
  return response;
}

export async function launchStoppedScript(
  client: DebugClient,
  launchArgs: StaticJsLaunchRequestArguments,
): Promise<DebugProtocol.StoppedEvent> {
  const stopped = client.waitForEvent("stopped");
  await client.launchRequest(launchArgs);
  await client.configurationDoneRequest();
  const ev = await stopped;
  return ev as DebugProtocol.StoppedEvent;
}
