import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("allocation-limit.js", createTestHandler("built-ins/SharedArrayBuffer/allocation-limit.js"));
