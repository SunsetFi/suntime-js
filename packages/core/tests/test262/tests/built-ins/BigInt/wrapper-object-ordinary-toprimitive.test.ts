import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "wrapper-object-ordinary-toprimitive.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/BigInt/wrapper-object-ordinary-toprimitive.js"),
);
