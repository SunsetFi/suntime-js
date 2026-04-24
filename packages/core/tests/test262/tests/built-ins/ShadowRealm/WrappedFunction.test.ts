import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("WrappedFunction", () => {
  it(
    "length-throws-typeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ShadowRealm/WrappedFunction/length-throws-typeerror.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ShadowRealm/WrappedFunction/length.js"),
  );
  it(
    "name-throws-typeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ShadowRealm/WrappedFunction/name-throws-typeerror.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ShadowRealm/WrappedFunction/name.js"),
  );
  it(
    "throws-typeerror-on-revoked-proxy.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/ShadowRealm/WrappedFunction/throws-typeerror-on-revoked-proxy.js"),
  );
});
