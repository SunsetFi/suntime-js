import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("resolve-poisoned-then-deferred.js", createTestHandler("built-ins/Promise/resolve-poisoned-then-deferred.js"));
