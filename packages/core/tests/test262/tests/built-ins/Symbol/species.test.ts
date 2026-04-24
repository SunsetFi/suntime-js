import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("species", () => {
it("basic.js", createTestHandler("built-ins/Symbol/species/basic.js"));
it("builtin-getter-name.js", createTestHandler("built-ins/Symbol/species/builtin-getter-name.js"));
it("cross-realm.js", createTestHandler("built-ins/Symbol/species/cross-realm.js"));
it("subclassing.js", createTestHandler("built-ins/Symbol/species/subclassing.js"));
});
