import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Symbol.iterator.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/namespace/Symbol.iterator.js"),
);

it(
  "Symbol.toStringTag.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/namespace/Symbol.toStringTag.js"),
);

describe("internals", () => {
  it(
    "define-own-property.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/define-own-property.js"),
  );
  it(
    "delete-exported-init.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/delete-exported-init.js"),
  );
  it(
    "delete-exported-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/delete-exported-uninit.js"),
  );
  it(
    "delete-non-exported.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/delete-non-exported.js"),
  );
  it(
    "enumerate-binding-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/enumerate-binding-uninit.js"),
  );
  it(
    "get-nested-namespace-dflt-skip.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-nested-namespace-dflt-skip.js"),
  );
  it(
    "get-nested-namespace-props-nrml.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/namespace/internals/get-nested-namespace-props-nrml.js",
    ),
  );
  it(
    "get-own-property-str-found-init.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/namespace/internals/get-own-property-str-found-init.js",
    ),
  );
  it(
    "get-own-property-str-found-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/namespace/internals/get-own-property-str-found-uninit.js",
    ),
  );
  it(
    "get-own-property-str-not-found.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-own-property-str-not-found.js"),
  );
  it(
    "get-own-property-sym.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-own-property-sym.js"),
  );
  it(
    "get-prototype-of.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-prototype-of.js"),
  );
  it(
    "get-str-found-init.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-str-found-init.js"),
  );
  it(
    "get-str-found-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-str-found-uninit.js"),
  );
  it(
    "get-str-initialize.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-str-initialize.js"),
  );
  it(
    "get-str-not-found.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-str-not-found.js"),
  );
  it(
    "get-str-update.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-str-update.js"),
  );
  it(
    "get-sym-found.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-sym-found.js"),
  );
  it(
    "get-sym-not-found.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/get-sym-not-found.js"),
  );
  it(
    "has-property-str-found-init.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/has-property-str-found-init.js"),
  );
  it(
    "has-property-str-found-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/has-property-str-found-uninit.js"),
  );
  it(
    "has-property-str-not-found.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/has-property-str-not-found.js"),
  );
  it(
    "has-property-sym-found.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/has-property-sym-found.js"),
  );
  it(
    "has-property-sym-not-found.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/has-property-sym-not-found.js"),
  );
  it(
    "is-extensible.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/is-extensible.js"),
  );
  it(
    "object-hasOwnProperty-binding-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/namespace/internals/object-hasOwnProperty-binding-uninit.js",
    ),
  );
  it(
    "object-keys-binding-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/object-keys-binding-uninit.js"),
  );
  it(
    "object-propertyIsEnumerable-binding-uninit.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/namespace/internals/object-propertyIsEnumerable-binding-uninit.js",
    ),
  );
  it(
    "own-property-keys-binding-types.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/namespace/internals/own-property-keys-binding-types.js",
    ),
  );
  it(
    "own-property-keys-sort.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/own-property-keys-sort.js"),
  );
  it(
    "prevent-extensions.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/prevent-extensions.js"),
  );
  it(
    "set-prototype-of-null.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/set-prototype-of-null.js"),
  );
  it(
    "set-prototype-of.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/set-prototype-of.js"),
  );
  it(
    "set.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/namespace/internals/set.js"),
  );
});
