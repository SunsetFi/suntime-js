import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("NaN.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/NaN.js"));
