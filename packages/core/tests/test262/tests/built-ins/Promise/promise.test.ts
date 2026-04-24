import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("promise.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Promise/promise.js"));
