import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "create-target-is-revoked-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/create-target-is-revoked-proxy.js"),
);
