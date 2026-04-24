import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "message_property_native_error.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/NativeErrors/message_property_native_error.js"),
);
