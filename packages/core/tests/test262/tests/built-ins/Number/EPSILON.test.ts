import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("EPSILON.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/EPSILON.js"));
