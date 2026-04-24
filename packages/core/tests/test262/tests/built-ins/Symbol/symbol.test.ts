import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("symbol.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Symbol/symbol.js"));
