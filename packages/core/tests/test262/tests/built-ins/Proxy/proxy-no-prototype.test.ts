import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "proxy-no-prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Proxy/proxy-no-prototype.js"),
);
