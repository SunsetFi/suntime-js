import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-new-target.js", createTestHandler("language/module-code/early-new-target.js"));
