import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("cause_property_native_error.js", createTestHandler("built-ins/NativeErrors/cause_property_native_error.js"));
