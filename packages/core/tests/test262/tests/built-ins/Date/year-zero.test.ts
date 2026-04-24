import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("year-zero.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Date/year-zero.js"));
