import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("excessive-bytelength-throws.js", createTestHandler("built-ins/DataView/excessive-bytelength-throws.js"));
