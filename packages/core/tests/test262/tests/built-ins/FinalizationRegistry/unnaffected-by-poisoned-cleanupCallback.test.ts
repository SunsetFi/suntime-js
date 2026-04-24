import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("unnaffected-by-poisoned-cleanupCallback.js", createTestHandler("built-ins/FinalizationRegistry/unnaffected-by-poisoned-cleanupCallback.js"));
