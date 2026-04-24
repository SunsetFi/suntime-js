import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("export.js", { tags: ["known-passing"] }, createTestHandler("language/global-code/export.js"));
