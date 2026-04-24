import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("u180e.js", { tags: ["known-failing"] }, createTestHandler("built-ins/RegExp/u180e.js"));
