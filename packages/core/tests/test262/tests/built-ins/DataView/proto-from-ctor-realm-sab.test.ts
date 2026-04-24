import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "proto-from-ctor-realm-sab.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/DataView/proto-from-ctor-realm-sab.js"),
);
