import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("resolve-non-thenable-deferred.js", createTestHandler("built-ins/Promise/resolve-non-thenable-deferred.js"));
