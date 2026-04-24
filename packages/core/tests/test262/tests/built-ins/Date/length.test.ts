import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Date/length.js"));
