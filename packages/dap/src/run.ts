import { DebugSession } from "@vscode/debugadapter";

import { StaticJsDebugAdapter } from "./adapter/StaticJsDebugAdapter.js";

DebugSession.run(StaticJsDebugAdapter);
