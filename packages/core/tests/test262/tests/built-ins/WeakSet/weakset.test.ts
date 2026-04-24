import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("weakset.js", { tags: ["known-failing"] }, createTestHandler("built-ins/WeakSet/weakset.js"));
