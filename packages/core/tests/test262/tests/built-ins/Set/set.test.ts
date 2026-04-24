import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("set.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Set/set.js"));
