import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "descriptor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/descriptor.js"),
);

it(
  "hasown.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown.js"),
);

it(
  "hasown_inherited_exists.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_inherited_exists.js"),
);

it(
  "hasown_inherited_getter.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_inherited_getter.js"),
);

it(
  "hasown_inherited_getter_and_setter.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_inherited_getter_and_setter.js"),
);

it(
  "hasown_inherited_getter_and_setter_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_getter_and_setter_configurable_enumerable.js",
  ),
);

it(
  "hasown_inherited_getter_and_setter_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_getter_and_setter_configurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_getter_and_setter_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_getter_and_setter_nonconfigurable_enumerable.js",
  ),
);

it(
  "hasown_inherited_getter_and_setter_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_getter_and_setter_nonconfigurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_getter_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_inherited_getter_configurable_enumerable.js"),
);

it(
  "hasown_inherited_getter_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_getter_configurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_getter_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_getter_nonconfigurable_enumerable.js",
  ),
);

it(
  "hasown_inherited_getter_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_getter_nonconfigurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_nonwritable_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_nonwritable_configurable_enumerable.js",
  ),
);

it(
  "hasown_inherited_nonwritable_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_nonwritable_configurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_nonwritable_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_nonwritable_nonconfigurable_enumerable.js",
  ),
);

it(
  "hasown_inherited_nonwritable_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_nonwritable_nonconfigurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_setter.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_inherited_setter.js"),
);

it(
  "hasown_inherited_setter_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_inherited_setter_configurable_enumerable.js"),
);

it(
  "hasown_inherited_setter_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_setter_configurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_setter_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_setter_nonconfigurable_enumerable.js",
  ),
);

it(
  "hasown_inherited_setter_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_setter_nonconfigurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_writable_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_inherited_writable_configurable_enumerable.js"),
);

it(
  "hasown_inherited_writable_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_writable_configurable_nonenumerable.js",
  ),
);

it(
  "hasown_inherited_writable_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_writable_nonconfigurable_enumerable.js",
  ),
);

it(
  "hasown_inherited_writable_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_inherited_writable_nonconfigurable_nonenumerable.js",
  ),
);

it(
  "hasown_nonexistent.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_nonexistent.js"),
);

it(
  "hasown_own_getter.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_getter.js"),
);

it(
  "hasown_own_getter_and_setter.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_getter_and_setter.js"),
);

it(
  "hasown_own_getter_and_setter_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_own_getter_and_setter_configurable_enumerable.js",
  ),
);

it(
  "hasown_own_getter_and_setter_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_own_getter_and_setter_configurable_nonenumerable.js",
  ),
);

it(
  "hasown_own_getter_and_setter_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_own_getter_and_setter_nonconfigurable_enumerable.js",
  ),
);

it(
  "hasown_own_getter_and_setter_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_own_getter_and_setter_nonconfigurable_nonenumerable.js",
  ),
);

it(
  "hasown_own_getter_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_getter_configurable_enumerable.js"),
);

it(
  "hasown_own_getter_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_getter_configurable_nonenumerable.js"),
);

it(
  "hasown_own_getter_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_getter_nonconfigurable_enumerable.js"),
);

it(
  "hasown_own_getter_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_getter_nonconfigurable_nonenumerable.js"),
);

it(
  "hasown_own_nonwritable_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_nonwritable_configurable_enumerable.js"),
);

it(
  "hasown_own_nonwritable_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_nonwritable_nonconfigurable_enumerable.js"),
);

it(
  "hasown_own_nonwriteable_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_own_nonwriteable_configurable_nonenumerable.js",
  ),
);

it(
  "hasown_own_nonwriteable_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/Object/hasOwn/hasown_own_nonwriteable_nonconfigurable_nonenumerable.js",
  ),
);

it(
  "hasown_own_property_exists.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_property_exists.js"),
);

it(
  "hasown_own_setter.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_setter.js"),
);

it(
  "hasown_own_setter_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_setter_configurable_enumerable.js"),
);

it(
  "hasown_own_setter_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_setter_configurable_nonenumerable.js"),
);

it(
  "hasown_own_setter_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_setter_nonconfigurable_enumerable.js"),
);

it(
  "hasown_own_setter_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_setter_nonconfigurable_nonenumerable.js"),
);

it(
  "hasown_own_writable_configurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_writable_configurable_enumerable.js"),
);

it(
  "hasown_own_writable_configurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_writable_configurable_nonenumerable.js"),
);

it(
  "hasown_own_writable_nonconfigurable_enumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_writable_nonconfigurable_enumerable.js"),
);

it(
  "hasown_own_writable_nonconfigurable_nonenumerable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/hasown_own_writable_nonconfigurable_nonenumerable.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/hasOwn/length.js"),
);

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Object/hasOwn/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/not-a-constructor.js"),
);

it(
  "prototype.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/prototype.js"),
);

it(
  "symbol_own_property.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/hasOwn/symbol_own_property.js"),
);

it(
  "symbol_property_toPrimitive.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/hasOwn/symbol_property_toPrimitive.js"),
);

it(
  "symbol_property_toString.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/hasOwn/symbol_property_toString.js"),
);

it(
  "symbol_property_valueOf.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/hasOwn/symbol_property_valueOf.js"),
);

it(
  "toobject_before_topropertykey.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/toobject_before_topropertykey.js"),
);

it(
  "toobject_null.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/toobject_null.js"),
);

it(
  "toobject_undefined.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Object/hasOwn/toobject_undefined.js"),
);
