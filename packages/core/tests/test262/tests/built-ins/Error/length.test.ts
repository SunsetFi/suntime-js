import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Error/length.js"));
