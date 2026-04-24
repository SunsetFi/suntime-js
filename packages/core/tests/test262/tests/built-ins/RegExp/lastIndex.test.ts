import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("lastIndex.js", { tags: ["known-failing"] }, createTestHandler("built-ins/RegExp/lastIndex.js"));
