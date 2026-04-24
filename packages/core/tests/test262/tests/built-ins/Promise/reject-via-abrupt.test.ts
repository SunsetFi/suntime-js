import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("reject-via-abrupt.js", createTestHandler("built-ins/Promise/reject-via-abrupt.js"));
