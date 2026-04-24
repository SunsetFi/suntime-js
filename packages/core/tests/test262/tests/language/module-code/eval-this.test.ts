import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("eval-this.js", createTestHandler("language/module-code/eval-this.js"));
