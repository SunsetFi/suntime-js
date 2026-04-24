import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("throws-when-target-cannot-be-held-weakly.js", createTestHandler("built-ins/WeakRef/throws-when-target-cannot-be-held-weakly.js"));
