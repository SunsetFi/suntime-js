import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("regexp-modifiers", () => {
  it(
    "add-dotAll-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-dotAll-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "add-dotAll-does-not-affect-dotAll-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-dotAll-does-not-affect-dotAll-property.js",
    ),
  );
  it(
    "add-dotAll-does-not-affect-ignoreCase-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-dotAll-does-not-affect-ignoreCase-flag.js",
    ),
  );
  it(
    "add-dotAll-does-not-affect-multiline-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-dotAll-does-not-affect-multiline-flag.js",
    ),
  );
  it(
    "add-dotAll.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-dotAll.js"),
  );
  it(
    "add-ignoreCase-affects-backreferences.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-backreferences.js"),
  );
  it(
    "add-ignoreCase-affects-characterClasses.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-characterClasses.js",
    ),
  );
  it(
    "add-ignoreCase-affects-characterEscapes.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-characterEscapes.js",
    ),
  );
  it(
    "add-ignoreCase-affects-slash-lower-b.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-slash-lower-b.js"),
  );
  it(
    "add-ignoreCase-affects-slash-lower-p.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-slash-lower-p.js"),
  );
  it(
    "add-ignoreCase-affects-slash-lower-w.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-slash-lower-w.js"),
  );
  it(
    "add-ignoreCase-affects-slash-upper-b.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-slash-upper-b.js"),
  );
  it(
    "add-ignoreCase-affects-slash-upper-p.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-slash-upper-p.js"),
  );
  it(
    "add-ignoreCase-affects-slash-upper-w.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-ignoreCase-affects-slash-upper-w.js"),
  );
  it(
    "add-ignoreCase-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-ignoreCase-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "add-ignoreCase-does-not-affect-dotAll-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-ignoreCase-does-not-affect-dotAll-flag.js",
    ),
  );
  it(
    "add-ignoreCase-does-not-affect-ignoreCase-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-ignoreCase-does-not-affect-ignoreCase-property.js",
    ),
  );
  it(
    "add-ignoreCase-does-not-affect-multiline-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-ignoreCase-does-not-affect-multiline-flag.js",
    ),
  );
  it(
    "add-ignoreCase.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-ignoreCase.js"),
  );
  it(
    "add-multiline-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-multiline-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "add-multiline-does-not-affect-dotAll-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-multiline-does-not-affect-dotAll-flag.js",
    ),
  );
  it(
    "add-multiline-does-not-affect-ignoreCase-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-multiline-does-not-affect-ignoreCase-flag.js",
    ),
  );
  it(
    "add-multiline-does-not-affect-multiline-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/add-multiline-does-not-affect-multiline-property.js",
    ),
  );
  it(
    "add-multiline.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-multiline.js"),
  );
  it(
    "add-remove-modifiers.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/add-remove-modifiers.js"),
  );
  it(
    "changing-dotAll-flag-does-not-affect-dotAll-modifier.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/changing-dotAll-flag-does-not-affect-dotAll-modifier.js",
    ),
  );
  it(
    "changing-ignoreCase-flag-does-not-affect-ignoreCase-modifier.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/changing-ignoreCase-flag-does-not-affect-ignoreCase-modifier.js",
    ),
  );
  it(
    "changing-multiline-flag-does-not-affect-multiline-modifier.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/changing-multiline-flag-does-not-affect-multiline-modifier.js",
    ),
  );
  it(
    "nested-add-remove-modifiers.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/nested-add-remove-modifiers.js"),
  );
  it(
    "nesting-add-dotAll-within-remove-dotAll.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-add-dotAll-within-remove-dotAll.js",
    ),
  );
  it(
    "nesting-add-ignoreCase-within-remove-ignoreCase.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-add-ignoreCase-within-remove-ignoreCase.js",
    ),
  );
  it(
    "nesting-add-multiline-within-remove-multiline.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-add-multiline-within-remove-multiline.js",
    ),
  );
  it(
    "nesting-dotAll-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-dotAll-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "nesting-ignoreCase-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-ignoreCase-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "nesting-multiline-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-multiline-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "nesting-remove-dotAll-within-add-dotAll.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-remove-dotAll-within-add-dotAll.js",
    ),
  );
  it(
    "nesting-remove-ignoreCase-within-add-ignoreCase.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-remove-ignoreCase-within-add-ignoreCase.js",
    ),
  );
  it(
    "nesting-remove-multiline-within-add-multiline.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/nesting-remove-multiline-within-add-multiline.js",
    ),
  );
  it(
    "remove-dotAll-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-dotAll-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "remove-dotAll-does-not-affect-dotAll-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-dotAll-does-not-affect-dotAll-property.js",
    ),
  );
  it(
    "remove-dotAll-does-not-affect-ignoreCase-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-dotAll-does-not-affect-ignoreCase-flag.js",
    ),
  );
  it(
    "remove-dotAll-does-not-affect-multiline-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-dotAll-does-not-affect-multiline-flag.js",
    ),
  );
  it(
    "remove-dotAll.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/remove-dotAll.js"),
  );
  it(
    "remove-ignoreCase-affects-backreferences.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-backreferences.js",
    ),
  );
  it(
    "remove-ignoreCase-affects-characterClasses.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-characterClasses.js",
    ),
  );
  it(
    "remove-ignoreCase-affects-characterEscapes.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-characterEscapes.js",
    ),
  );
  it(
    "remove-ignoreCase-affects-slash-lower-b.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-slash-lower-b.js",
    ),
  );
  it(
    "remove-ignoreCase-affects-slash-lower-p.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-slash-lower-p.js",
    ),
  );
  it(
    "remove-ignoreCase-affects-slash-lower-w.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-slash-lower-w.js",
    ),
  );
  it(
    "remove-ignoreCase-affects-slash-upper-b.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-slash-upper-b.js",
    ),
  );
  it(
    "remove-ignoreCase-affects-slash-upper-p.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-slash-upper-p.js",
    ),
  );
  it(
    "remove-ignoreCase-affects-slash-upper-w.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-affects-slash-upper-w.js",
    ),
  );
  it(
    "remove-ignoreCase-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "remove-ignoreCase-does-not-affect-dotAll-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-does-not-affect-dotAll-flag.js",
    ),
  );
  it(
    "remove-ignoreCase-does-not-affect-ignoreCase-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-does-not-affect-ignoreCase-property.js",
    ),
  );
  it(
    "remove-ignoreCase-does-not-affect-multiline-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-ignoreCase-does-not-affect-multiline-flag.js",
    ),
  );
  it(
    "remove-ignoreCase.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/remove-ignoreCase.js"),
  );
  it(
    "remove-multiline-does-not-affect-alternatives-outside.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-multiline-does-not-affect-alternatives-outside.js",
    ),
  );
  it(
    "remove-multiline-does-not-affect-dotAll-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-multiline-does-not-affect-dotAll-flag.js",
    ),
  );
  it(
    "remove-multiline-does-not-affect-ignoreCase-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-multiline-does-not-affect-ignoreCase-flag.js",
    ),
  );
  it(
    "remove-multiline-does-not-affect-multiline-property.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/regexp-modifiers/remove-multiline-does-not-affect-multiline-property.js",
    ),
  );
  it(
    "remove-multiline.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/regexp-modifiers/remove-multiline.js"),
  );
  describe("syntax", () => {
    describe("valid", () => {
      it(
        "add-and-remove-modifiers-can-have-empty-remove-modifiers.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/regexp-modifiers/syntax/valid/add-and-remove-modifiers-can-have-empty-remove-modifiers.js",
        ),
      );
      it(
        "add-and-remove-modifiers.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/regexp-modifiers/syntax/valid/add-and-remove-modifiers.js",
        ),
      );
      it(
        "add-modifiers-when-nested.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/regexp-modifiers/syntax/valid/add-modifiers-when-nested.js",
        ),
      );
      it(
        "add-modifiers-when-not-set-as-flags.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/regexp-modifiers/syntax/valid/add-modifiers-when-not-set-as-flags.js",
        ),
      );
      it(
        "add-modifiers-when-set-as-flags.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/regexp-modifiers/syntax/valid/add-modifiers-when-set-as-flags.js",
        ),
      );
      it(
        "remove-modifiers-when-nested.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/regexp-modifiers/syntax/valid/remove-modifiers-when-nested.js",
        ),
      );
      it(
        "remove-modifiers-when-not-set-as-flags.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/regexp-modifiers/syntax/valid/remove-modifiers-when-not-set-as-flags.js",
        ),
      );
      it(
        "remove-modifiers-when-set-as-flags.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/regexp-modifiers/syntax/valid/remove-modifiers-when-set-as-flags.js",
        ),
      );
    });
  });
});
