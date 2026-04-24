import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("proxy.js", createTestHandler("built-ins/Proxy/proxy.js"));
