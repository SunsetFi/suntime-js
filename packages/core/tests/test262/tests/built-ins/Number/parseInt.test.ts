import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("parseInt.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/parseInt.js"));
