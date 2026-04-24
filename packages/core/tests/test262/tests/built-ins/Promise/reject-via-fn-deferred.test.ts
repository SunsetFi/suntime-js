import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("reject-via-fn-deferred.js", createTestHandler("built-ins/Promise/reject-via-fn-deferred.js"));
