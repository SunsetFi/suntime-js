import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("keyFor", () => {
  it(
    "arg-non-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/keyFor/arg-non-symbol.js"),
  );
  it(
    "arg-symbol-registry-hit.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/keyFor/arg-symbol-registry-hit.js"),
  );
  it(
    "arg-symbol-registry-miss.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/keyFor/arg-symbol-registry-miss.js"),
  );
  it(
    "cross-realm.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Symbol/keyFor/cross-realm.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/keyFor/length.js"),
  );
  it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Symbol/keyFor/name.js"));
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/keyFor/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Symbol/keyFor/prop-desc.js"),
  );
});
