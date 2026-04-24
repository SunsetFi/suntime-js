import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("proxy.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Proxy/proxy.js"));
