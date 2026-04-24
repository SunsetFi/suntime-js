import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("excessive-byteoffset-throws-sab.js", createTestHandler("built-ins/DataView/excessive-byteoffset-throws-sab.js"));
