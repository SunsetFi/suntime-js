import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("undefined-newtarget-throws.js", createTestHandler("built-ins/FinalizationRegistry/undefined-newtarget-throws.js"));
