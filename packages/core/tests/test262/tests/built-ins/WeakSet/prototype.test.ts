import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "Symbol.toStringTag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakSet/prototype/Symbol.toStringTag.js"),
  );
  describe("add", () => {
    it(
      "add.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/add.js"),
    );
    it(
      "adds-object-element.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/adds-object-element.js"),
    );
    it(
      "adds-symbol-element.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/adds-symbol-element.js"),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-array.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/add/does-not-have-weaksetdata-internal-slot-array.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/add/does-not-have-weaksetdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/add/does-not-have-weaksetdata-internal-slot-object.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/add/does-not-have-weaksetdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-weakset-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/add/does-not-have-weaksetdata-internal-slot-weakset-prototype.js",
      ),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/not-a-constructor.js"),
    );
    it(
      "returns-this-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/returns-this-symbol.js"),
    );
    it(
      "returns-this-when-ignoring-duplicate-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/add/returns-this-when-ignoring-duplicate-symbol.js",
      ),
    );
    it(
      "returns-this-when-ignoring-duplicate.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/returns-this-when-ignoring-duplicate.js"),
    );
    it(
      "returns-this.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/returns-this.js"),
    );
    it(
      "this-not-object-throw-boolean.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/this-not-object-throw-boolean.js"),
    );
    it(
      "this-not-object-throw-null.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/this-not-object-throw-null.js"),
    );
    it(
      "this-not-object-throw-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/this-not-object-throw-number.js"),
    );
    it(
      "this-not-object-throw-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/this-not-object-throw-string.js"),
    );
    it(
      "this-not-object-throw-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/this-not-object-throw-symbol.js"),
    );
    it(
      "this-not-object-throw-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/add/this-not-object-throw-undefined.js"),
    );
    it(
      "throw-when-value-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/add/throw-when-value-cannot-be-held-weakly.js",
      ),
    );
  });
  describe("constructor", () => {
    it(
      "weakset-prototype-constructor-intrinsic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/constructor/weakset-prototype-constructor-intrinsic.js",
      ),
    );
    it(
      "weakset-prototype-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/constructor/weakset-prototype-constructor.js"),
    );
  });
  describe("delete", () => {
    it(
      "delete-entry-initial-iterable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/delete-entry-initial-iterable.js"),
    );
    it(
      "delete-object-entry.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/delete-object-entry.js"),
    );
    it(
      "delete-symbol-entry.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/delete-symbol-entry.js"),
    );
    it(
      "delete.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/delete.js"),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-array.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/delete/does-not-have-weaksetdata-internal-slot-array.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/delete/does-not-have-weaksetdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/delete/does-not-have-weaksetdata-internal-slot-object.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/delete/does-not-have-weaksetdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-weakset-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/delete/does-not-have-weaksetdata-internal-slot-weakset-prototype.js",
      ),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/not-a-constructor.js"),
    );
    it(
      "returns-false-when-delete-is-noop.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/returns-false-when-delete-is-noop.js"),
    );
    it(
      "returns-false-when-value-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/delete/returns-false-when-value-cannot-be-held-weakly.js",
      ),
    );
    it(
      "this-not-object-throw-boolean.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/this-not-object-throw-boolean.js"),
    );
    it(
      "this-not-object-throw-null.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/this-not-object-throw-null.js"),
    );
    it(
      "this-not-object-throw-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/this-not-object-throw-number.js"),
    );
    it(
      "this-not-object-throw-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/this-not-object-throw-string.js"),
    );
    it(
      "this-not-object-throw-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/this-not-object-throw-symbol.js"),
    );
    it(
      "this-not-object-throw-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/delete/this-not-object-throw-undefined.js"),
    );
  });
  describe("has", () => {
    it(
      "does-not-have-weaksetdata-internal-slot-array.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/does-not-have-weaksetdata-internal-slot-array.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/does-not-have-weaksetdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/does-not-have-weaksetdata-internal-slot-object.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/does-not-have-weaksetdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weaksetdata-internal-slot-weakset-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/does-not-have-weaksetdata-internal-slot-weakset-prototype.js",
      ),
    );
    it(
      "has.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/has.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/not-a-constructor.js"),
    );
    it(
      "returns-false-when-object-value-not-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/returns-false-when-object-value-not-present.js",
      ),
    );
    it(
      "returns-false-when-symbol-value-not-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/returns-false-when-symbol-value-not-present.js",
      ),
    );
    it(
      "returns-false-when-value-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/returns-false-when-value-cannot-be-held-weakly.js",
      ),
    );
    it(
      "returns-true-when-object-value-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/returns-true-when-object-value-present.js",
      ),
    );
    it(
      "returns-true-when-symbol-value-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakSet/prototype/has/returns-true-when-symbol-value-present.js",
      ),
    );
    it(
      "this-not-object-throw-boolean.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/this-not-object-throw-boolean.js"),
    );
    it(
      "this-not-object-throw-null.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/this-not-object-throw-null.js"),
    );
    it(
      "this-not-object-throw-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/this-not-object-throw-number.js"),
    );
    it(
      "this-not-object-throw-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/this-not-object-throw-string.js"),
    );
    it(
      "this-not-object-throw-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/this-not-object-throw-symbol.js"),
    );
    it(
      "this-not-object-throw-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakSet/prototype/has/this-not-object-throw-undefined.js"),
    );
  });
  it(
    "prototype-attributes.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakSet/prototype/prototype-attributes.js"),
  );
});
