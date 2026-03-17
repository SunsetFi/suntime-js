import type { DebugProtocol } from "@vscode/debugprotocol";

import type { StaticJsWebDebugAdapterMessageListener } from "./StaticJsWebDebugAdapterMessageListener.js";

export interface StaticJsWebDebugAdapter {
  onDidSendMessage(listener: StaticJsWebDebugAdapterMessageListener): () => void;
  handleMessage(message: DebugProtocol.ProtocolMessage): void;
  dispose(): void;
}
