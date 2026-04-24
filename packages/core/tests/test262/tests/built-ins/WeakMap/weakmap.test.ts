import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("weakmap.js", { tags: ["known-failing"] }, createTestHandler("built-ins/WeakMap/weakmap.js"));
