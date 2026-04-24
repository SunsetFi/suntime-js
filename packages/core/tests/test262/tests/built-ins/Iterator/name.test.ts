import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Iterator/name.js"));
