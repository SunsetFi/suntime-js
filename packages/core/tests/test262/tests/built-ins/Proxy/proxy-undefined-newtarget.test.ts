import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "proxy-undefined-newtarget.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Proxy/proxy-undefined-newtarget.js"),
);
