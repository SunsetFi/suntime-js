import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("to-name-side-effects", () => {
it("class.js", createTestHandler("language/computed-property-names/to-name-side-effects/class.js"));
it("numbers-class.js", createTestHandler("language/computed-property-names/to-name-side-effects/numbers-class.js"));
it("numbers-object.js", createTestHandler("language/computed-property-names/to-name-side-effects/numbers-object.js"));
it("object.js", createTestHandler("language/computed-property-names/to-name-side-effects/object.js"));
});
