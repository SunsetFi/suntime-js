import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("resolve-poisoned-then-immed.js", createTestHandler("built-ins/Promise/resolve-poisoned-then-immed.js"));
