import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "get-fn-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/get-fn-realm.js"),
);
