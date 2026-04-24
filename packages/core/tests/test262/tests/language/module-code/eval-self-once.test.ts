import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("eval-self-once.js", createTestHandler("language/module-code/eval-self-once.js"));
