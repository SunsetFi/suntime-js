import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("executor-not-callable.js", createTestHandler("built-ins/Promise/executor-not-callable.js"));
