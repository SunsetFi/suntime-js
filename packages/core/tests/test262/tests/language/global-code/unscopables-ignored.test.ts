import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("unscopables-ignored.js", createTestHandler("language/global-code/unscopables-ignored.js"));
