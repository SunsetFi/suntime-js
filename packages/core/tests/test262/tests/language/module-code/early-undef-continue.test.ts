import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("early-undef-continue.js", createTestHandler("language/module-code/early-undef-continue.js"));
