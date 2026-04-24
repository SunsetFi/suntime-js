import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/eval/name.js"));
