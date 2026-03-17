import type { DebugProtocol } from "@vscode/debugprotocol";

export type StaticJsWebDebugAdapterMessageListener = (
  message: DebugProtocol.ProtocolMessage,
) => void;
