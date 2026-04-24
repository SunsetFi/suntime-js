import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("keys.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Temporal/keys.js"));
