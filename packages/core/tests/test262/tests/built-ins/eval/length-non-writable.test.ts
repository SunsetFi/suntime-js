import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("length-non-writable.js", createTestHandler("built-ins/eval/length-non-writable.js"));
