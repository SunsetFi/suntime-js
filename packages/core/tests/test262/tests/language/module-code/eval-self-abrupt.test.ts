import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("eval-self-abrupt.js", createTestHandler("language/module-code/eval-self-abrupt.js"));
