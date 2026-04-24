import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("bigint.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Object/bigint.js"));
