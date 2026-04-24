import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("negative-bytelength-throws-sab.js", createTestHandler("built-ins/DataView/negative-bytelength-throws-sab.js"));
