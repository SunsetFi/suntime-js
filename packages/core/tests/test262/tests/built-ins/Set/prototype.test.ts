import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Symbol.iterator", () => {
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/Symbol.iterator/not-a-constructor.js"),
  );
});

it(
  "Symbol.iterator.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/prototype/Symbol.iterator.js"),
);

describe("Symbol.toStringTag", () => {
  it(
    "property-descriptor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/Symbol.toStringTag/property-descriptor.js"),
  );
});

it(
  "Symbol.toStringTag.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/prototype/Symbol.toStringTag.js"),
);

describe("add", () => {
  it(
    "add.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/add/add.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/does-not-have-setdata-internal-slot-array.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/does-not-have-setdata-internal-slot-map.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/does-not-have-setdata-internal-slot-object.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-set-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/add/does-not-have-setdata-internal-slot-set-prototype.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-weakset.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/does-not-have-setdata-internal-slot-weakset.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/add/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/add/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/add/not-a-constructor.js"),
  );
  it(
    "preserves-insertion-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/add/preserves-insertion-order.js"),
  );
  it(
    "returns-this-when-ignoring-duplicate.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/add/returns-this-when-ignoring-duplicate.js"),
  );
  it(
    "returns-this.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/add/returns-this.js"),
  );
  it(
    "this-not-object-throw-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/this-not-object-throw-boolean.js"),
  );
  it(
    "this-not-object-throw-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/this-not-object-throw-null.js"),
  );
  it(
    "this-not-object-throw-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/this-not-object-throw-number.js"),
  );
  it(
    "this-not-object-throw-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/this-not-object-throw-string.js"),
  );
  it(
    "this-not-object-throw-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/this-not-object-throw-symbol.js"),
  );
  it(
    "this-not-object-throw-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/add/this-not-object-throw-undefined.js"),
  );
  it(
    "will-not-add-duplicate-entry-initial-iterable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/add/will-not-add-duplicate-entry-initial-iterable.js",
    ),
  );
  it(
    "will-not-add-duplicate-entry-normalizes-zero.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/add/will-not-add-duplicate-entry-normalizes-zero.js",
    ),
  );
  it(
    "will-not-add-duplicate-entry.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/add/will-not-add-duplicate-entry.js"),
  );
});

describe("clear", () => {
  it(
    "clear.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/clear/clear.js"),
  );
  it(
    "clears-all-contents-from-iterable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/clears-all-contents-from-iterable.js"),
  );
  it(
    "clears-all-contents.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/clears-all-contents.js"),
  );
  it(
    "clears-an-empty-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/clears-an-empty-set.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/does-not-have-setdata-internal-slot-array.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/does-not-have-setdata-internal-slot-map.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/clear/does-not-have-setdata-internal-slot-object.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-set.prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/clear/does-not-have-setdata-internal-slot-set.prototype.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-weakset.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/clear/does-not-have-setdata-internal-slot-weakset.js",
    ),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/clear/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/clear/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/clear/not-a-constructor.js"),
  );
  it(
    "returns-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/returns-undefined.js"),
  );
  it(
    "this-not-object-throw-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/this-not-object-throw-boolean.js"),
  );
  it(
    "this-not-object-throw-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/this-not-object-throw-null.js"),
  );
  it(
    "this-not-object-throw-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/this-not-object-throw-number.js"),
  );
  it(
    "this-not-object-throw-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/this-not-object-throw-string.js"),
  );
  it(
    "this-not-object-throw-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/this-not-object-throw-symbol.js"),
  );
  it(
    "this-not-object-throw-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/clear/this-not-object-throw-undefined.js"),
  );
});

describe("constructor", () => {
  it(
    "set-prototype-constructor-intrinsic.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/constructor/set-prototype-constructor-intrinsic.js"),
  );
  it(
    "set-prototype-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/constructor/set-prototype-constructor.js"),
  );
});

describe("delete", () => {
  it(
    "delete-entry-initial-iterable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/delete/delete-entry-initial-iterable.js"),
  );
  it(
    "delete-entry-normalizes-zero.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/delete/delete-entry-normalizes-zero.js"),
  );
  it(
    "delete-entry.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/delete/delete-entry.js"),
  );
  it(
    "delete.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/delete/delete.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-array.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/delete/does-not-have-setdata-internal-slot-array.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/delete/does-not-have-setdata-internal-slot-map.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/delete/does-not-have-setdata-internal-slot-object.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-set-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/delete/does-not-have-setdata-internal-slot-set-prototype.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-weakset.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/delete/does-not-have-setdata-internal-slot-weakset.js",
    ),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/delete/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/delete/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/delete/not-a-constructor.js"),
  );
  it(
    "returns-false-when-delete-is-noop.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/delete/returns-false-when-delete-is-noop.js"),
  );
  it(
    "returns-true-when-delete-operation-occurs.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/delete/returns-true-when-delete-operation-occurs.js",
    ),
  );
  it(
    "this-not-object-throw-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/delete/this-not-object-throw-boolean.js"),
  );
  it(
    "this-not-object-throw-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/delete/this-not-object-throw-null.js"),
  );
  it(
    "this-not-object-throw-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/delete/this-not-object-throw-number.js"),
  );
  it(
    "this-not-object-throw-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/delete/this-not-object-throw-string.js"),
  );
  it(
    "this-not-object-throw-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/delete/this-not-object-throw-symbol.js"),
  );
  it(
    "this-not-object-throw-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/delete/this-not-object-throw-undefined.js"),
  );
});

describe("difference", () => {
  it(
    "add-not-called.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/add-not-called.js"),
  );
  it(
    "allows-set-like-class.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/allows-set-like-class.js"),
  );
  it(
    "allows-set-like-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/allows-set-like-object.js"),
  );
  it(
    "array-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/array-throws.js"),
  );
  it(
    "builtins.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/builtins.js"),
  );
  it(
    "called-with-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/called-with-object.js"),
  );
  it(
    "combines-Map.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/combines-Map.js"),
  );
  it(
    "combines-empty-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/combines-empty-sets.js"),
  );
  it(
    "combines-itself.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/combines-itself.js"),
  );
  it(
    "combines-same-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/combines-same-sets.js"),
  );
  it(
    "combines-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/combines-sets.js"),
  );
  it(
    "converts-negative-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/converts-negative-zero.js"),
  );
  it(
    "difference.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/difference.js"),
  );
  it(
    "has-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/has-is-callable.js"),
  );
  it(
    "keys-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/keys-is-callable.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/not-a-constructor.js"),
  );
  it(
    "receiver-not-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/receiver-not-set.js"),
  );
  it(
    "require-internal-slot.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/require-internal-slot.js"),
  );
  it(
    "result-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/result-order.js"),
  );
  it(
    "set-like-array.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/set-like-array.js"),
  );
  it(
    "set-like-class-mutation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/set-like-class-mutation.js"),
  );
  it(
    "set-like-class-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/set-like-class-order.js"),
  );
  it(
    "size-is-a-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/difference/size-is-a-number.js"),
  );
  it(
    "subclass-receiver-methods.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/subclass-receiver-methods.js"),
  );
  it(
    "subclass-symbol-species.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/subclass-symbol-species.js"),
  );
  it(
    "subclass.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/difference/subclass.js"),
  );
});

describe("entries", () => {
  it(
    "does-not-have-setdata-internal-slot-array.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/entries/does-not-have-setdata-internal-slot-array.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/entries/does-not-have-setdata-internal-slot-map.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/entries/does-not-have-setdata-internal-slot-object.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-set-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/entries/does-not-have-setdata-internal-slot-set-prototype.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-weakset.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/entries/does-not-have-setdata-internal-slot-weakset.js",
    ),
  );
  it(
    "entries.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/entries/entries.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/entries/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/entries/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/entries/not-a-constructor.js"),
  );
  it(
    "returns-iterator-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/entries/returns-iterator-empty.js"),
  );
  it(
    "returns-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/entries/returns-iterator.js"),
  );
  it(
    "this-not-object-throw-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/entries/this-not-object-throw-boolean.js"),
  );
  it(
    "this-not-object-throw-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/entries/this-not-object-throw-null.js"),
  );
  it(
    "this-not-object-throw-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/entries/this-not-object-throw-number.js"),
  );
  it(
    "this-not-object-throw-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/entries/this-not-object-throw-string.js"),
  );
  it(
    "this-not-object-throw-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/entries/this-not-object-throw-symbol.js"),
  );
  it(
    "this-not-object-throw-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/entries/this-not-object-throw-undefined.js"),
  );
});

describe("forEach", () => {
  it(
    "callback-not-callable-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/callback-not-callable-boolean.js"),
  );
  it(
    "callback-not-callable-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/callback-not-callable-null.js"),
  );
  it(
    "callback-not-callable-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/callback-not-callable-number.js"),
  );
  it(
    "callback-not-callable-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/callback-not-callable-string.js"),
  );
  it(
    "callback-not-callable-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/callback-not-callable-symbol.js"),
  );
  it(
    "callback-not-callable-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/callback-not-callable-undefined.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-array.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/forEach/does-not-have-setdata-internal-slot-array.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/does-not-have-setdata-internal-slot-map.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/forEach/does-not-have-setdata-internal-slot-object.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-set-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/forEach/does-not-have-setdata-internal-slot-set-prototype.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-weakset.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/forEach/does-not-have-setdata-internal-slot-weakset.js",
    ),
  );
  it(
    "forEach.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/forEach.js"),
  );
  it(
    "iterates-in-insertion-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/iterates-in-insertion-order.js"),
  );
  it(
    "iterates-in-iterable-entry-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/iterates-in-iterable-entry-order.js"),
  );
  it(
    "iterates-values-added-after-foreach-begins.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/forEach/iterates-values-added-after-foreach-begins.js",
    ),
  );
  it(
    "iterates-values-deleted-then-readded.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/iterates-values-deleted-then-readded.js"),
  );
  it(
    "iterates-values-not-deleted.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/iterates-values-not-deleted.js"),
  );
  it(
    "iterates-values-revisits-after-delete-re-add.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/forEach/iterates-values-revisits-after-delete-re-add.js",
    ),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/not-a-constructor.js"),
  );
  it(
    "returns-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/returns-undefined.js"),
  );
  it(
    "this-arg-explicit-cannot-override-lexical-this-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/forEach/this-arg-explicit-cannot-override-lexical-this-arrow.js",
    ),
  );
  it(
    "this-arg-explicit.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-arg-explicit.js"),
  );
  it(
    "this-non-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-non-strict.js"),
  );
  it(
    "this-not-object-throw-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-not-object-throw-boolean.js"),
  );
  it(
    "this-not-object-throw-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-not-object-throw-null.js"),
  );
  it(
    "this-not-object-throw-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-not-object-throw-number.js"),
  );
  it(
    "this-not-object-throw-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-not-object-throw-string.js"),
  );
  it(
    "this-not-object-throw-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-not-object-throw-symbol.js"),
  );
  it(
    "this-not-object-throw-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-not-object-throw-undefined.js"),
  );
  it(
    "this-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/this-strict.js"),
  );
  it(
    "throws-when-callback-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/forEach/throws-when-callback-throws.js"),
  );
});

describe("has", () => {
  it(
    "does-not-have-setdata-internal-slot-array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/does-not-have-setdata-internal-slot-array.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/does-not-have-setdata-internal-slot-map.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/does-not-have-setdata-internal-slot-object.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-set-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/has/does-not-have-setdata-internal-slot-set-prototype.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-weakset.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/does-not-have-setdata-internal-slot-weakset.js"),
  );
  it(
    "has.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/has.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/not-a-constructor.js"),
  );
  it(
    "returns-false-when-undefined-added-deleted-not-present-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/has/returns-false-when-undefined-added-deleted-not-present-undefined.js",
    ),
  );
  it(
    "returns-false-when-value-not-present-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/has/returns-false-when-value-not-present-boolean.js",
    ),
  );
  it(
    "returns-false-when-value-not-present-nan.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-false-when-value-not-present-nan.js"),
  );
  it(
    "returns-false-when-value-not-present-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-false-when-value-not-present-null.js"),
  );
  it(
    "returns-false-when-value-not-present-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-false-when-value-not-present-number.js"),
  );
  it(
    "returns-false-when-value-not-present-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-false-when-value-not-present-string.js"),
  );
  it(
    "returns-false-when-value-not-present-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-false-when-value-not-present-symbol.js"),
  );
  it(
    "returns-false-when-value-not-present-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/has/returns-false-when-value-not-present-undefined.js",
    ),
  );
  it(
    "returns-true-when-value-present-boolean.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-true-when-value-present-boolean.js"),
  );
  it(
    "returns-true-when-value-present-nan.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-true-when-value-present-nan.js"),
  );
  it(
    "returns-true-when-value-present-null.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-true-when-value-present-null.js"),
  );
  it(
    "returns-true-when-value-present-number.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-true-when-value-present-number.js"),
  );
  it(
    "returns-true-when-value-present-string.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-true-when-value-present-string.js"),
  );
  it(
    "returns-true-when-value-present-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-true-when-value-present-symbol.js"),
  );
  it(
    "returns-true-when-value-present-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/has/returns-true-when-value-present-undefined.js"),
  );
  it(
    "this-not-object-throw-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/this-not-object-throw-boolean.js"),
  );
  it(
    "this-not-object-throw-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/this-not-object-throw-null.js"),
  );
  it(
    "this-not-object-throw-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/this-not-object-throw-number.js"),
  );
  it(
    "this-not-object-throw-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/this-not-object-throw-string.js"),
  );
  it(
    "this-not-object-throw-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/this-not-object-throw-symbol.js"),
  );
  it(
    "this-not-object-throw-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/has/this-not-object-throw-undefined.js"),
  );
});

describe("intersection", () => {
  it(
    "add-not-called.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/add-not-called.js"),
  );
  it(
    "allows-set-like-class.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/allows-set-like-class.js"),
  );
  it(
    "allows-set-like-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/allows-set-like-object.js"),
  );
  it(
    "array-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/array-throws.js"),
  );
  it(
    "builtins.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/builtins.js"),
  );
  it(
    "called-with-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/called-with-object.js"),
  );
  it(
    "combines-Map.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/combines-Map.js"),
  );
  it(
    "combines-empty-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/combines-empty-sets.js"),
  );
  it(
    "combines-itself.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/combines-itself.js"),
  );
  it(
    "combines-same-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/combines-same-sets.js"),
  );
  it(
    "combines-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/combines-sets.js"),
  );
  it(
    "converts-negative-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/converts-negative-zero.js"),
  );
  it(
    "has-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/has-is-callable.js"),
  );
  it(
    "intersection.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/intersection.js"),
  );
  it(
    "keys-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/keys-is-callable.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/not-a-constructor.js"),
  );
  it(
    "receiver-not-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/receiver-not-set.js"),
  );
  it(
    "require-internal-slot.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/require-internal-slot.js"),
  );
  it(
    "result-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/result-order.js"),
  );
  it(
    "set-like-array.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/set-like-array.js"),
  );
  it(
    "set-like-class-mutation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/set-like-class-mutation.js"),
  );
  it(
    "set-like-class-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/set-like-class-order.js"),
  );
  it(
    "size-is-a-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/intersection/size-is-a-number.js"),
  );
  it(
    "subclass-receiver-methods.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/subclass-receiver-methods.js"),
  );
  it(
    "subclass-symbol-species.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/subclass-symbol-species.js"),
  );
  it(
    "subclass.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/intersection/subclass.js"),
  );
});

describe("isDisjointFrom", () => {
  it(
    "allows-set-like-class.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/allows-set-like-class.js"),
  );
  it(
    "allows-set-like-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/allows-set-like-object.js"),
  );
  it(
    "array-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/array-throws.js"),
  );
  it(
    "builtins.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/builtins.js"),
  );
  it(
    "called-with-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/called-with-object.js"),
  );
  it(
    "compares-Map.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/compares-Map.js"),
  );
  it(
    "compares-empty-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/compares-empty-sets.js"),
  );
  it(
    "compares-itself.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/compares-itself.js"),
  );
  it(
    "compares-same-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/compares-same-sets.js"),
  );
  it(
    "compares-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/compares-sets.js"),
  );
  it(
    "converts-negative-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/converts-negative-zero.js"),
  );
  it(
    "has-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/has-is-callable.js"),
  );
  it(
    "isDisjointFrom.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/isDisjointFrom.js"),
  );
  it(
    "keys-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/keys-is-callable.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/not-a-constructor.js"),
  );
  it(
    "receiver-not-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/receiver-not-set.js"),
  );
  it(
    "require-internal-slot.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/require-internal-slot.js"),
  );
  it(
    "set-like-array.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/set-like-array.js"),
  );
  it(
    "set-like-class-mutation.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/set-like-class-mutation.js"),
  );
  it(
    "set-like-class-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/set-like-class-order.js"),
  );
  it(
    "set-like-iter-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/set-like-iter-return.js"),
  );
  it(
    "size-is-a-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/size-is-a-number.js"),
  );
  it(
    "subclass-receiver-methods.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isDisjointFrom/subclass-receiver-methods.js"),
  );
});

describe("isSubsetOf", () => {
  it(
    "allows-set-like-class.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/allows-set-like-class.js"),
  );
  it(
    "allows-set-like-object.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/allows-set-like-object.js"),
  );
  it(
    "array-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/array-throws.js"),
  );
  it(
    "builtins.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/builtins.js"),
  );
  it(
    "called-with-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/called-with-object.js"),
  );
  it(
    "compares-Map.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/compares-Map.js"),
  );
  it(
    "compares-empty-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/compares-empty-sets.js"),
  );
  it(
    "compares-itself.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/compares-itself.js"),
  );
  it(
    "compares-same-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/compares-same-sets.js"),
  );
  it(
    "compares-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/compares-sets.js"),
  );
  it(
    "has-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/has-is-callable.js"),
  );
  it(
    "isSubsetOf.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/isSubsetOf.js"),
  );
  it(
    "keys-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/keys-is-callable.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/not-a-constructor.js"),
  );
  it(
    "receiver-not-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/receiver-not-set.js"),
  );
  it(
    "require-internal-slot.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/require-internal-slot.js"),
  );
  it(
    "set-like-array.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/set-like-array.js"),
  );
  it(
    "set-like-class-mutation.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/set-like-class-mutation.js"),
  );
  it(
    "set-like-class-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/set-like-class-order.js"),
  );
  it(
    "size-is-a-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/size-is-a-number.js"),
  );
  it(
    "subclass-receiver-methods.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSubsetOf/subclass-receiver-methods.js"),
  );
});

describe("isSupersetOf", () => {
  it(
    "allows-set-like-class.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/allows-set-like-class.js"),
  );
  it(
    "allows-set-like-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/allows-set-like-object.js"),
  );
  it(
    "array-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/array-throws.js"),
  );
  it(
    "builtins.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/builtins.js"),
  );
  it(
    "called-with-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/called-with-object.js"),
  );
  it(
    "compares-Map.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/compares-Map.js"),
  );
  it(
    "compares-empty-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/compares-empty-sets.js"),
  );
  it(
    "compares-itself.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/compares-itself.js"),
  );
  it(
    "compares-same-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/compares-same-sets.js"),
  );
  it(
    "compares-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/compares-sets.js"),
  );
  it(
    "converts-negative-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/converts-negative-zero.js"),
  );
  it(
    "has-is-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/has-is-callable.js"),
  );
  it(
    "isSupersetOf.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/isSupersetOf.js"),
  );
  it(
    "keys-is-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/keys-is-callable.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/not-a-constructor.js"),
  );
  it(
    "receiver-not-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/receiver-not-set.js"),
  );
  it(
    "require-internal-slot.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/require-internal-slot.js"),
  );
  it(
    "set-like-array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/set-like-array.js"),
  );
  it(
    "set-like-class-mutation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/set-like-class-mutation.js"),
  );
  it(
    "set-like-class-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/set-like-class-order.js"),
  );
  it(
    "set-like-iter-return.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/set-like-iter-return.js"),
  );
  it(
    "size-is-a-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/size-is-a-number.js"),
  );
  it(
    "subclass-receiver-methods.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/isSupersetOf/subclass-receiver-methods.js"),
  );
});

describe("keys", () => {
  it(
    "keys.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/keys/keys.js"),
  );
});

describe("size", () => {
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/size/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/size/name.js"),
  );
  it(
    "returns-count-of-present-values-before-after-add-delete.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/size/returns-count-of-present-values-before-after-add-delete.js",
    ),
  );
  it(
    "returns-count-of-present-values-by-insertion.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/size/returns-count-of-present-values-by-insertion.js",
    ),
  );
  it(
    "returns-count-of-present-values-by-iterable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "built-ins/Set/prototype/size/returns-count-of-present-values-by-iterable.js",
    ),
  );
  it(
    "size.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/size/size.js"),
  );
});

describe("symmetricDifference", () => {
  it(
    "add-not-called.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/add-not-called.js"),
  );
  it(
    "allows-set-like-class.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/allows-set-like-class.js"),
  );
  it(
    "allows-set-like-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/allows-set-like-object.js"),
  );
  it(
    "array-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/array-throws.js"),
  );
  it(
    "builtins.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/builtins.js"),
  );
  it(
    "called-with-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/called-with-object.js"),
  );
  it(
    "combines-Map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/combines-Map.js"),
  );
  it(
    "combines-empty-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/combines-empty-sets.js"),
  );
  it(
    "combines-itself.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/combines-itself.js"),
  );
  it(
    "combines-same-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/combines-same-sets.js"),
  );
  it(
    "combines-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/combines-sets.js"),
  );
  it(
    "converts-negative-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/converts-negative-zero.js"),
  );
  it(
    "has-is-callable.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/has-is-callable.js"),
  );
  it(
    "keys-is-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/keys-is-callable.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/not-a-constructor.js"),
  );
  it(
    "receiver-not-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/receiver-not-set.js"),
  );
  it(
    "require-internal-slot.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/require-internal-slot.js"),
  );
  it(
    "result-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/result-order.js"),
  );
  it(
    "set-like-array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/set-like-array.js"),
  );
  it(
    "set-like-class-mutation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/set-like-class-mutation.js"),
  );
  it(
    "set-like-class-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/set-like-class-order.js"),
  );
  it(
    "size-is-a-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/size-is-a-number.js"),
  );
  it(
    "subclass-receiver-methods.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/subclass-receiver-methods.js"),
  );
  it(
    "subclass-symbol-species.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/subclass-symbol-species.js"),
  );
  it(
    "subclass.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/subclass.js"),
  );
  it(
    "symmetricDifference.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/symmetricDifference/symmetricDifference.js"),
  );
});

describe("union", () => {
  it(
    "add-not-called.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/add-not-called.js"),
  );
  it(
    "allows-set-like-class.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/allows-set-like-class.js"),
  );
  it(
    "allows-set-like-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/allows-set-like-object.js"),
  );
  it(
    "appends-new-values.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/appends-new-values.js"),
  );
  it(
    "array-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/array-throws.js"),
  );
  it(
    "builtins.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/builtins.js"),
  );
  it(
    "called-with-object.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/called-with-object.js"),
  );
  it(
    "combines-Map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/combines-Map.js"),
  );
  it(
    "combines-empty-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/combines-empty-sets.js"),
  );
  it(
    "combines-itself.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/combines-itself.js"),
  );
  it(
    "combines-same-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/combines-same-sets.js"),
  );
  it(
    "combines-sets.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/combines-sets.js"),
  );
  it(
    "converts-negative-zero.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/converts-negative-zero.js"),
  );
  it(
    "has-is-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/has-is-callable.js"),
  );
  it(
    "keys-is-callable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/keys-is-callable.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/not-a-constructor.js"),
  );
  it(
    "receiver-not-set.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/receiver-not-set.js"),
  );
  it(
    "require-internal-slot.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/require-internal-slot.js"),
  );
  it(
    "result-order.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/result-order.js"),
  );
  it(
    "set-like-array.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/set-like-array.js"),
  );
  it(
    "set-like-class-mutation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/set-like-class-mutation.js"),
  );
  it(
    "set-like-class-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/set-like-class-order.js"),
  );
  it(
    "size-is-a-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/union/size-is-a-number.js"),
  );
  it(
    "subclass-receiver-methods.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/subclass-receiver-methods.js"),
  );
  it(
    "subclass-symbol-species.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/subclass-symbol-species.js"),
  );
  it(
    "subclass.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/subclass.js"),
  );
  it(
    "union.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/union/union.js"),
  );
});

describe("values", () => {
  it(
    "does-not-have-setdata-internal-slot-array.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/values/does-not-have-setdata-internal-slot-array.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-map.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/values/does-not-have-setdata-internal-slot-map.js"),
  );
  it(
    "does-not-have-setdata-internal-slot-object.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/values/does-not-have-setdata-internal-slot-object.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-set-prototype.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/values/does-not-have-setdata-internal-slot-set-prototype.js",
    ),
  );
  it(
    "does-not-have-setdata-internal-slot-weakset.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Set/prototype/values/does-not-have-setdata-internal-slot-weakset.js",
    ),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/values/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/values/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/values/not-a-constructor.js"),
  );
  it(
    "returns-iterator-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/values/returns-iterator-empty.js"),
  );
  it(
    "returns-iterator.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/values/returns-iterator.js"),
  );
  it(
    "this-not-object-throw-boolean.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/values/this-not-object-throw-boolean.js"),
  );
  it(
    "this-not-object-throw-null.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/values/this-not-object-throw-null.js"),
  );
  it(
    "this-not-object-throw-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/values/this-not-object-throw-number.js"),
  );
  it(
    "this-not-object-throw-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/values/this-not-object-throw-string.js"),
  );
  it(
    "this-not-object-throw-symbol.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/values/this-not-object-throw-symbol.js"),
  );
  it(
    "this-not-object-throw-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Set/prototype/values/this-not-object-throw-undefined.js"),
  );
  it(
    "values-iteration-mutable.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/values/values-iteration-mutable.js"),
  );
  it(
    "values.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Set/prototype/values/values.js"),
  );
});
