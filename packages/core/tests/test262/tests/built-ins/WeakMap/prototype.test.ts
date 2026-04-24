import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "Symbol.toStringTag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakMap/prototype/Symbol.toStringTag.js"),
  );
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakMap/prototype/constructor.js"),
  );
  describe("delete", () => {
    it(
      "delete-entry-with-object-key-initial-iterable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/delete-entry-with-object-key-initial-iterable.js",
      ),
    );
    it(
      "delete-entry-with-object-key.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/delete-entry-with-object-key.js"),
    );
    it(
      "delete-entry-with-symbol-key-initial-iterable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/delete-entry-with-symbol-key-initial-iterable.js",
      ),
    );
    it(
      "delete-entry-with-symbol-key.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/delete-entry-with-symbol-key.js"),
    );
    it(
      "delete.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/delete.js"),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-array.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-array.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-object.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      ),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/not-a-constructor.js"),
    );
    it(
      "returns-false-if-key-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/returns-false-if-key-cannot-be-held-weakly.js",
      ),
    );
    it(
      "returns-false-when-object-key-not-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/returns-false-when-object-key-not-present.js",
      ),
    );
    it(
      "returns-false-when-symbol-key-not-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/delete/returns-false-when-symbol-key-not-present.js",
      ),
    );
    it(
      "this-not-object-throw-boolean.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-boolean.js"),
    );
    it(
      "this-not-object-throw-null.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-null.js"),
    );
    it(
      "this-not-object-throw-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-number.js"),
    );
    it(
      "this-not-object-throw-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-string.js"),
    );
    it(
      "this-not-object-throw-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-symbol.js"),
    );
    it(
      "this-not-object-throw-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-undefined.js"),
    );
  });
  describe("get", () => {
    it(
      "does-not-have-weakmapdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/get/does-not-have-weakmapdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/get/does-not-have-weakmapdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/get/does-not-have-weakmapdata-internal-slot.js",
      ),
    );
    it(
      "get.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/get.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/not-a-constructor.js"),
    );
    it(
      "returns-undefined-if-key-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/get/returns-undefined-if-key-cannot-be-held-weakly.js",
      ),
    );
    it(
      "returns-undefined-with-object-key.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/returns-undefined-with-object-key.js"),
    );
    it(
      "returns-undefined-with-symbol-key.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/returns-undefined-with-symbol-key.js"),
    );
    it(
      "returns-value-with-object-key.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/returns-value-with-object-key.js"),
    );
    it(
      "returns-value-with-symbol-key.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/returns-value-with-symbol-key.js"),
    );
    it(
      "this-not-object-throw.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/get/this-not-object-throw.js"),
    );
  });
  describe("getOrInsert", () => {
    it(
      "adds-object-element.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsert/adds-object-element.js"),
    );
    it(
      "adds-symbol-element.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsert/adds-symbol-element.js"),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-array.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-array.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-object.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      ),
    );
    it(
      "getOrInsert.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsert/getOrInsert.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsert/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsert/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsert/not-a-constructor.js"),
    );
    it(
      "returns-value-if-key-is-not-present-object-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/returns-value-if-key-is-not-present-object-key.js",
      ),
    );
    it(
      "returns-value-if-key-is-not-present-symbol-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/returns-value-if-key-is-not-present-symbol-key.js",
      ),
    );
    it(
      "returns-value-if-key-is-present-object-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/returns-value-if-key-is-present-object-key.js",
      ),
    );
    it(
      "returns-value-if-key-is-present-symbol-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/returns-value-if-key-is-present-symbol-key.js",
      ),
    );
    it(
      "this-not-object-throw.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsert/this-not-object-throw.js"),
    );
    it(
      "throw-if-key-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsert/throw-if-key-cannot-be-held-weakly.js",
      ),
    );
  });
  describe("getOrInsertComputed", () => {
    it(
      "adds-object-element.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/adds-object-element.js"),
    );
    it(
      "adds-symbol-element.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/adds-symbol-element.js"),
    );
    it(
      "adds-value-different-callbackfn.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/adds-value-different-callbackfn.js",
      ),
    );
    it(
      "callbackfn-throws.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/callbackfn-throws.js"),
    );
    it(
      "check-callback-fn-args.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/check-callback-fn-args.js",
      ),
    );
    it(
      "check-state-after-callback-fn-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/check-state-after-callback-fn-throws.js",
      ),
    );
    it(
      "does-not-evaluate-callbackfn-if-key-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/does-not-evaluate-callbackfn-if-key-present.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-array.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-array.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-object.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      ),
    );
    it(
      "getOrInsertComputed.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/getOrInsertComputed.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/not-a-constructor.js"),
    );
    it(
      "not-a-function-callbackfn-throws.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/not-a-function-callbackfn-throws.js",
      ),
    );
    it(
      "overwrites-mutation-from-callbackfn.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/overwrites-mutation-from-callbackfn.js",
      ),
    );
    it(
      "returns-value-if-key-is-not-present-object-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/returns-value-if-key-is-not-present-object-key.js",
      ),
    );
    it(
      "returns-value-if-key-is-not-present-symbol-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/returns-value-if-key-is-not-present-symbol-key.js",
      ),
    );
    it(
      "returns-value-if-key-is-present-object-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/returns-value-if-key-is-present-object-key.js",
      ),
    );
    it(
      "returns-value-if-key-is-present-symbol-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/returns-value-if-key-is-present-symbol-key.js",
      ),
    );
    it(
      "this-not-object-throw.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/this-not-object-throw.js"),
    );
    it(
      "throw-if-key-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/getOrInsertComputed/throw-if-key-cannot-be-held-weakly.js",
      ),
    );
  });
  describe("has", () => {
    it(
      "does-not-have-weakmapdata-internal-slot-array.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-array.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-object.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      ),
    );
    it(
      "has.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/has.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/not-a-constructor.js"),
    );
    it(
      "returns-false-when-key-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/has/returns-false-when-key-cannot-be-held-weakly.js",
      ),
    );
    it(
      "returns-false-when-object-key-not-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/has/returns-false-when-object-key-not-present.js",
      ),
    );
    it(
      "returns-false-when-symbol-key-not-present.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/has/returns-false-when-symbol-key-not-present.js",
      ),
    );
    it(
      "returns-true-when-object-key-present.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/returns-true-when-object-key-present.js"),
    );
    it(
      "returns-true-when-symbol-key-present.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/returns-true-when-symbol-key-present.js"),
    );
    it(
      "this-not-object-throw-boolean.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-boolean.js"),
    );
    it(
      "this-not-object-throw-null.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-null.js"),
    );
    it(
      "this-not-object-throw-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-number.js"),
    );
    it(
      "this-not-object-throw-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-string.js"),
    );
    it(
      "this-not-object-throw-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-symbol.js"),
    );
    it(
      "this-not-object-throw-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-undefined.js"),
    );
  });
  it(
    "prototype-attributes.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/WeakMap/prototype/prototype-attributes.js"),
  );
  describe("set", () => {
    it(
      "adds-object-element.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/adds-object-element.js"),
    );
    it(
      "adds-symbol-element.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/adds-symbol-element.js"),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-array.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-array.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-map.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-map.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-object.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-object.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-set.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-set.js",
      ),
    );
    it(
      "does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js",
      ),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/not-a-constructor.js"),
    );
    it(
      "returns-this-when-ignoring-duplicate.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/returns-this-when-ignoring-duplicate.js"),
    );
    it(
      "returns-this.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/returns-this.js"),
    );
    it(
      "set.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/set.js"),
    );
    it(
      "this-not-object-throw-boolean.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-boolean.js"),
    );
    it(
      "this-not-object-throw-null.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-null.js"),
    );
    it(
      "this-not-object-throw-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-number.js"),
    );
    it(
      "this-not-object-throw-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-string.js"),
    );
    it(
      "this-not-object-throw-symbol.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-symbol.js"),
    );
    it(
      "this-not-object-throw-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-undefined.js"),
    );
    it(
      "throw-if-key-cannot-be-held-weakly.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/WeakMap/prototype/set/throw-if-key-cannot-be-held-weakly.js"),
    );
  });
});
