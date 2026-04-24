import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-undef-break.js", createTestHandler("language/module-code/early-undef-break.js"));
