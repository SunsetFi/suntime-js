import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "proto-from-ctor-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/proto-from-ctor-realm.js"),
);
