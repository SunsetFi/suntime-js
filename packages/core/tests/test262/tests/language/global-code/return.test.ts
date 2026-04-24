import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("return.js", { tags: ["known-passing"] }, createTestHandler("language/global-code/return.js"));
