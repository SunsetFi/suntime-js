import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "proto-from-ctor-realm-one.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/proto-from-ctor-realm-one.js"),
);
