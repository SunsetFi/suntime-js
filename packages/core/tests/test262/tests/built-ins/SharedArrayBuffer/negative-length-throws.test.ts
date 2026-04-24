import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("negative-length-throws.js", createTestHandler("built-ins/SharedArrayBuffer/negative-length-throws.js"));
