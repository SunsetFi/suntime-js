import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("basic.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Symbol/species/basic.js"));

it(
  "builtin-getter-name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/species/builtin-getter-name.js"),
);

it(
  "cross-realm.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Symbol/species/cross-realm.js"),
);

it(
  "subclassing.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/species/subclassing.js"),
);
