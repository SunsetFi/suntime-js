import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("exception-after-resolve-in-thenable-job.js", createTestHandler("built-ins/Promise/exception-after-resolve-in-thenable-job.js"));
