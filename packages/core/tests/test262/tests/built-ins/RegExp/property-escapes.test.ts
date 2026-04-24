import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("property-escapes", () => {
  it(
    "binary-property-with-value-ASCII_-_F-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_F-negated.js",
    ),
  );
  it(
    "binary-property-with-value-ASCII_-_F.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_F.js"),
  );
  it(
    "binary-property-with-value-ASCII_-_Invalid-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_Invalid-negated.js",
    ),
  );
  it(
    "binary-property-with-value-ASCII_-_Invalid.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_Invalid.js",
    ),
  );
  it(
    "binary-property-with-value-ASCII_-_N-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_N-negated.js",
    ),
  );
  it(
    "binary-property-with-value-ASCII_-_N.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_N.js"),
  );
  it(
    "binary-property-with-value-ASCII_-_No-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_No-negated.js",
    ),
  );
  it(
    "binary-property-with-value-ASCII_-_No.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_No.js"),
  );
  it(
    "binary-property-with-value-ASCII_-_T-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_T-negated.js",
    ),
  );
  it(
    "binary-property-with-value-ASCII_-_T.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_T.js"),
  );
  it(
    "binary-property-with-value-ASCII_-_Y-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_Y-negated.js",
    ),
  );
  it(
    "binary-property-with-value-ASCII_-_Y.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_Y.js"),
  );
  it(
    "binary-property-with-value-ASCII_-_Yes-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_Yes-negated.js",
    ),
  );
  it(
    "binary-property-with-value-ASCII_-_Yes.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/binary-property-with-value-ASCII_-_Yes.js",
    ),
  );
  it(
    "character-class-range-end.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/character-class-range-end.js"),
  );
  it(
    "character-class-range-no-dash-end.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/character-class-range-no-dash-end.js"),
  );
  it(
    "character-class-range-no-dash-start.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/character-class-range-no-dash-start.js"),
  );
  it(
    "character-class-range-start.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/character-class-range-start.js"),
  );
  it(
    "character-class.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/character-class.js"),
  );
  describe("generated", () => {
    it(
      "ASCII.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/ASCII.js"),
    );
    it(
      "ASCII_Hex_Digit.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/ASCII_Hex_Digit.js"),
    );
    it(
      "Alphabetic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Alphabetic.js"),
    );
    it(
      "Any.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Any.js"),
    );
    it(
      "Assigned.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Assigned.js"),
    );
    it(
      "Bidi_Control.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Bidi_Control.js"),
    );
    it(
      "Bidi_Mirrored.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Bidi_Mirrored.js"),
    );
    it(
      "Case_Ignorable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Case_Ignorable.js"),
    );
    it(
      "Cased.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Cased.js"),
    );
    it(
      "Changes_When_Casefolded.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Changes_When_Casefolded.js"),
    );
    it(
      "Changes_When_Casemapped.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Changes_When_Casemapped.js"),
    );
    it(
      "Changes_When_Lowercased.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Changes_When_Lowercased.js"),
    );
    it(
      "Changes_When_NFKC_Casefolded.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Changes_When_NFKC_Casefolded.js",
      ),
    );
    it(
      "Changes_When_Titlecased.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Changes_When_Titlecased.js"),
    );
    it(
      "Changes_When_Uppercased.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Changes_When_Uppercased.js"),
    );
    it(
      "Dash.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Dash.js"),
    );
    it(
      "Default_Ignorable_Code_Point.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Default_Ignorable_Code_Point.js",
      ),
    );
    it(
      "Deprecated.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Deprecated.js"),
    );
    it(
      "Diacritic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Diacritic.js"),
    );
    it(
      "Emoji.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Emoji.js"),
    );
    it(
      "Emoji_Component.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Emoji_Component.js"),
    );
    it(
      "Emoji_Modifier.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Emoji_Modifier.js"),
    );
    it(
      "Emoji_Modifier_Base.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Emoji_Modifier_Base.js"),
    );
    it(
      "Emoji_Presentation.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Emoji_Presentation.js"),
    );
    it(
      "Extended_Pictographic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Extended_Pictographic.js"),
    );
    it(
      "Extender.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Extender.js"),
    );
    it(
      "General_Category_-_Cased_Letter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Cased_Letter.js",
      ),
    );
    it(
      "General_Category_-_Close_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Close_Punctuation.js",
      ),
    );
    it(
      "General_Category_-_Connector_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Connector_Punctuation.js",
      ),
    );
    it(
      "General_Category_-_Control.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Control.js",
      ),
    );
    it(
      "General_Category_-_Currency_Symbol.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Currency_Symbol.js",
      ),
    );
    it(
      "General_Category_-_Dash_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Dash_Punctuation.js",
      ),
    );
    it(
      "General_Category_-_Decimal_Number.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Decimal_Number.js",
      ),
    );
    it(
      "General_Category_-_Enclosing_Mark.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Enclosing_Mark.js",
      ),
    );
    it(
      "General_Category_-_Final_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Final_Punctuation.js",
      ),
    );
    it(
      "General_Category_-_Format.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/General_Category_-_Format.js"),
    );
    it(
      "General_Category_-_Initial_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Initial_Punctuation.js",
      ),
    );
    it(
      "General_Category_-_Letter.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/General_Category_-_Letter.js"),
    );
    it(
      "General_Category_-_Letter_Number.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Letter_Number.js",
      ),
    );
    it(
      "General_Category_-_Line_Separator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Line_Separator.js",
      ),
    );
    it(
      "General_Category_-_Lowercase_Letter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Lowercase_Letter.js",
      ),
    );
    it(
      "General_Category_-_Mark.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/General_Category_-_Mark.js"),
    );
    it(
      "General_Category_-_Math_Symbol.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Math_Symbol.js",
      ),
    );
    it(
      "General_Category_-_Modifier_Letter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Modifier_Letter.js",
      ),
    );
    it(
      "General_Category_-_Modifier_Symbol.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Modifier_Symbol.js",
      ),
    );
    it(
      "General_Category_-_Nonspacing_Mark.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Nonspacing_Mark.js",
      ),
    );
    it(
      "General_Category_-_Number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/General_Category_-_Number.js"),
    );
    it(
      "General_Category_-_Open_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Open_Punctuation.js",
      ),
    );
    it(
      "General_Category_-_Other.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/General_Category_-_Other.js"),
    );
    it(
      "General_Category_-_Other_Letter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Other_Letter.js",
      ),
    );
    it(
      "General_Category_-_Other_Number.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Other_Number.js",
      ),
    );
    it(
      "General_Category_-_Other_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Other_Punctuation.js",
      ),
    );
    it(
      "General_Category_-_Other_Symbol.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Other_Symbol.js",
      ),
    );
    it(
      "General_Category_-_Paragraph_Separator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Paragraph_Separator.js",
      ),
    );
    it(
      "General_Category_-_Private_Use.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Private_Use.js",
      ),
    );
    it(
      "General_Category_-_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Punctuation.js",
      ),
    );
    it(
      "General_Category_-_Separator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Separator.js",
      ),
    );
    it(
      "General_Category_-_Space_Separator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Space_Separator.js",
      ),
    );
    it(
      "General_Category_-_Spacing_Mark.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Spacing_Mark.js",
      ),
    );
    it(
      "General_Category_-_Surrogate.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Surrogate.js",
      ),
    );
    it(
      "General_Category_-_Symbol.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/General_Category_-_Symbol.js"),
    );
    it(
      "General_Category_-_Titlecase_Letter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Titlecase_Letter.js",
      ),
    );
    it(
      "General_Category_-_Unassigned.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Unassigned.js",
      ),
    );
    it(
      "General_Category_-_Uppercase_Letter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/General_Category_-_Uppercase_Letter.js",
      ),
    );
    it(
      "Grapheme_Base.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Grapheme_Base.js"),
    );
    it(
      "Grapheme_Extend.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Grapheme_Extend.js"),
    );
    it(
      "Hex_Digit.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Hex_Digit.js"),
    );
    it(
      "IDS_Binary_Operator.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/IDS_Binary_Operator.js"),
    );
    it(
      "IDS_Trinary_Operator.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/IDS_Trinary_Operator.js"),
    );
    it(
      "ID_Continue.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/ID_Continue.js"),
    );
    it(
      "ID_Start.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/ID_Start.js"),
    );
    it(
      "Ideographic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Ideographic.js"),
    );
    it(
      "Join_Control.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Join_Control.js"),
    );
    it(
      "Logical_Order_Exception.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Logical_Order_Exception.js"),
    );
    it(
      "Lowercase.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Lowercase.js"),
    );
    it(
      "Math.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Math.js"),
    );
    it(
      "Noncharacter_Code_Point.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Noncharacter_Code_Point.js"),
    );
    it(
      "Pattern_Syntax.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Pattern_Syntax.js"),
    );
    it(
      "Pattern_White_Space.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Pattern_White_Space.js"),
    );
    it(
      "Quotation_Mark.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Quotation_Mark.js"),
    );
    it(
      "Radical.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Radical.js"),
    );
    it(
      "Regional_Indicator.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Regional_Indicator.js"),
    );
    it(
      "Script_-_Adlam.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Adlam.js"),
    );
    it(
      "Script_-_Ahom.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Ahom.js"),
    );
    it(
      "Script_-_Anatolian_Hieroglyphs.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Anatolian_Hieroglyphs.js",
      ),
    );
    it(
      "Script_-_Arabic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Arabic.js"),
    );
    it(
      "Script_-_Armenian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Armenian.js"),
    );
    it(
      "Script_-_Avestan.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Avestan.js"),
    );
    it(
      "Script_-_Balinese.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Balinese.js"),
    );
    it(
      "Script_-_Bamum.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Bamum.js"),
    );
    it(
      "Script_-_Bassa_Vah.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Bassa_Vah.js"),
    );
    it(
      "Script_-_Batak.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Batak.js"),
    );
    it(
      "Script_-_Bengali.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Bengali.js"),
    );
    it(
      "Script_-_Beria_Erfe.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Beria_Erfe.js"),
    );
    it(
      "Script_-_Bhaiksuki.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Bhaiksuki.js"),
    );
    it(
      "Script_-_Bopomofo.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Bopomofo.js"),
    );
    it(
      "Script_-_Brahmi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Brahmi.js"),
    );
    it(
      "Script_-_Braille.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Braille.js"),
    );
    it(
      "Script_-_Buginese.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Buginese.js"),
    );
    it(
      "Script_-_Buhid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Buhid.js"),
    );
    it(
      "Script_-_Canadian_Aboriginal.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Canadian_Aboriginal.js",
      ),
    );
    it(
      "Script_-_Carian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Carian.js"),
    );
    it(
      "Script_-_Caucasian_Albanian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Caucasian_Albanian.js",
      ),
    );
    it(
      "Script_-_Chakma.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Chakma.js"),
    );
    it(
      "Script_-_Cham.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Cham.js"),
    );
    it(
      "Script_-_Cherokee.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Cherokee.js"),
    );
    it(
      "Script_-_Chorasmian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Chorasmian.js"),
    );
    it(
      "Script_-_Common.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Common.js"),
    );
    it(
      "Script_-_Coptic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Coptic.js"),
    );
    it(
      "Script_-_Cuneiform.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Cuneiform.js"),
    );
    it(
      "Script_-_Cypriot.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Cypriot.js"),
    );
    it(
      "Script_-_Cypro_Minoan.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Cypro_Minoan.js"),
    );
    it(
      "Script_-_Cyrillic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Cyrillic.js"),
    );
    it(
      "Script_-_Deseret.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Deseret.js"),
    );
    it(
      "Script_-_Devanagari.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Devanagari.js"),
    );
    it(
      "Script_-_Dives_Akuru.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Dives_Akuru.js"),
    );
    it(
      "Script_-_Dogra.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Dogra.js"),
    );
    it(
      "Script_-_Duployan.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Duployan.js"),
    );
    it(
      "Script_-_Egyptian_Hieroglyphs.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Egyptian_Hieroglyphs.js",
      ),
    );
    it(
      "Script_-_Elbasan.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Elbasan.js"),
    );
    it(
      "Script_-_Elymaic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Elymaic.js"),
    );
    it(
      "Script_-_Ethiopic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Ethiopic.js"),
    );
    it(
      "Script_-_Garay.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Garay.js"),
    );
    it(
      "Script_-_Georgian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Georgian.js"),
    );
    it(
      "Script_-_Glagolitic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Glagolitic.js"),
    );
    it(
      "Script_-_Gothic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Gothic.js"),
    );
    it(
      "Script_-_Grantha.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Grantha.js"),
    );
    it(
      "Script_-_Greek.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Greek.js"),
    );
    it(
      "Script_-_Gujarati.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Gujarati.js"),
    );
    it(
      "Script_-_Gunjala_Gondi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Gunjala_Gondi.js"),
    );
    it(
      "Script_-_Gurmukhi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Gurmukhi.js"),
    );
    it(
      "Script_-_Gurung_Khema.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Gurung_Khema.js"),
    );
    it(
      "Script_-_Han.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Han.js"),
    );
    it(
      "Script_-_Hangul.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Hangul.js"),
    );
    it(
      "Script_-_Hanifi_Rohingya.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Hanifi_Rohingya.js"),
    );
    it(
      "Script_-_Hanunoo.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Hanunoo.js"),
    );
    it(
      "Script_-_Hatran.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Hatran.js"),
    );
    it(
      "Script_-_Hebrew.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Hebrew.js"),
    );
    it(
      "Script_-_Hiragana.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Hiragana.js"),
    );
    it(
      "Script_-_Imperial_Aramaic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Imperial_Aramaic.js"),
    );
    it(
      "Script_-_Inherited.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Inherited.js"),
    );
    it(
      "Script_-_Inscriptional_Pahlavi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Inscriptional_Pahlavi.js",
      ),
    );
    it(
      "Script_-_Inscriptional_Parthian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Inscriptional_Parthian.js",
      ),
    );
    it(
      "Script_-_Javanese.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Javanese.js"),
    );
    it(
      "Script_-_Kaithi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Kaithi.js"),
    );
    it(
      "Script_-_Kannada.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Kannada.js"),
    );
    it(
      "Script_-_Katakana.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Katakana.js"),
    );
    it(
      "Script_-_Kawi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Kawi.js"),
    );
    it(
      "Script_-_Kayah_Li.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Kayah_Li.js"),
    );
    it(
      "Script_-_Kharoshthi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Kharoshthi.js"),
    );
    it(
      "Script_-_Khitan_Small_Script.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Khitan_Small_Script.js",
      ),
    );
    it(
      "Script_-_Khmer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Khmer.js"),
    );
    it(
      "Script_-_Khojki.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Khojki.js"),
    );
    it(
      "Script_-_Khudawadi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Khudawadi.js"),
    );
    it(
      "Script_-_Kirat_Rai.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Kirat_Rai.js"),
    );
    it(
      "Script_-_Lao.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Lao.js"),
    );
    it(
      "Script_-_Latin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Latin.js"),
    );
    it(
      "Script_-_Lepcha.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Lepcha.js"),
    );
    it(
      "Script_-_Limbu.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Limbu.js"),
    );
    it(
      "Script_-_Linear_A.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Linear_A.js"),
    );
    it(
      "Script_-_Linear_B.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Linear_B.js"),
    );
    it(
      "Script_-_Lisu.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Lisu.js"),
    );
    it(
      "Script_-_Lycian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Lycian.js"),
    );
    it(
      "Script_-_Lydian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Lydian.js"),
    );
    it(
      "Script_-_Mahajani.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Mahajani.js"),
    );
    it(
      "Script_-_Makasar.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Makasar.js"),
    );
    it(
      "Script_-_Malayalam.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Malayalam.js"),
    );
    it(
      "Script_-_Mandaic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Mandaic.js"),
    );
    it(
      "Script_-_Manichaean.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Manichaean.js"),
    );
    it(
      "Script_-_Marchen.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Marchen.js"),
    );
    it(
      "Script_-_Masaram_Gondi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Masaram_Gondi.js"),
    );
    it(
      "Script_-_Medefaidrin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Medefaidrin.js"),
    );
    it(
      "Script_-_Meetei_Mayek.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Meetei_Mayek.js"),
    );
    it(
      "Script_-_Mende_Kikakui.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Mende_Kikakui.js"),
    );
    it(
      "Script_-_Meroitic_Cursive.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Meroitic_Cursive.js"),
    );
    it(
      "Script_-_Meroitic_Hieroglyphs.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Meroitic_Hieroglyphs.js",
      ),
    );
    it(
      "Script_-_Miao.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Miao.js"),
    );
    it(
      "Script_-_Modi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Modi.js"),
    );
    it(
      "Script_-_Mongolian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Mongolian.js"),
    );
    it(
      "Script_-_Mro.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Mro.js"),
    );
    it(
      "Script_-_Multani.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Multani.js"),
    );
    it(
      "Script_-_Myanmar.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Myanmar.js"),
    );
    it(
      "Script_-_Nabataean.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Nabataean.js"),
    );
    it(
      "Script_-_Nag_Mundari.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Nag_Mundari.js"),
    );
    it(
      "Script_-_Nandinagari.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Nandinagari.js"),
    );
    it(
      "Script_-_New_Tai_Lue.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_New_Tai_Lue.js"),
    );
    it(
      "Script_-_Newa.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Newa.js"),
    );
    it(
      "Script_-_Nko.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Nko.js"),
    );
    it(
      "Script_-_Nushu.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Nushu.js"),
    );
    it(
      "Script_-_Nyiakeng_Puachue_Hmong.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Nyiakeng_Puachue_Hmong.js",
      ),
    );
    it(
      "Script_-_Ogham.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Ogham.js"),
    );
    it(
      "Script_-_Ol_Chiki.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Ol_Chiki.js"),
    );
    it(
      "Script_-_Ol_Onal.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Ol_Onal.js"),
    );
    it(
      "Script_-_Old_Hungarian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Old_Hungarian.js"),
    );
    it(
      "Script_-_Old_Italic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Old_Italic.js"),
    );
    it(
      "Script_-_Old_North_Arabian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Old_North_Arabian.js",
      ),
    );
    it(
      "Script_-_Old_Permic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Old_Permic.js"),
    );
    it(
      "Script_-_Old_Persian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Old_Persian.js"),
    );
    it(
      "Script_-_Old_Sogdian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Old_Sogdian.js"),
    );
    it(
      "Script_-_Old_South_Arabian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_-_Old_South_Arabian.js",
      ),
    );
    it(
      "Script_-_Old_Turkic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Old_Turkic.js"),
    );
    it(
      "Script_-_Old_Uyghur.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Old_Uyghur.js"),
    );
    it(
      "Script_-_Oriya.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Oriya.js"),
    );
    it(
      "Script_-_Osage.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Osage.js"),
    );
    it(
      "Script_-_Osmanya.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Osmanya.js"),
    );
    it(
      "Script_-_Pahawh_Hmong.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Pahawh_Hmong.js"),
    );
    it(
      "Script_-_Palmyrene.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Palmyrene.js"),
    );
    it(
      "Script_-_Pau_Cin_Hau.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Pau_Cin_Hau.js"),
    );
    it(
      "Script_-_Phags_Pa.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Phags_Pa.js"),
    );
    it(
      "Script_-_Phoenician.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Phoenician.js"),
    );
    it(
      "Script_-_Psalter_Pahlavi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Psalter_Pahlavi.js"),
    );
    it(
      "Script_-_Rejang.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Rejang.js"),
    );
    it(
      "Script_-_Runic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Runic.js"),
    );
    it(
      "Script_-_Samaritan.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Samaritan.js"),
    );
    it(
      "Script_-_Saurashtra.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Saurashtra.js"),
    );
    it(
      "Script_-_Sharada.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Sharada.js"),
    );
    it(
      "Script_-_Shavian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Shavian.js"),
    );
    it(
      "Script_-_Siddham.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Siddham.js"),
    );
    it(
      "Script_-_Sidetic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Sidetic.js"),
    );
    it(
      "Script_-_SignWriting.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_SignWriting.js"),
    );
    it(
      "Script_-_Sinhala.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Sinhala.js"),
    );
    it(
      "Script_-_Sogdian.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Sogdian.js"),
    );
    it(
      "Script_-_Sora_Sompeng.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Sora_Sompeng.js"),
    );
    it(
      "Script_-_Soyombo.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Soyombo.js"),
    );
    it(
      "Script_-_Sundanese.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Sundanese.js"),
    );
    it(
      "Script_-_Sunuwar.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Sunuwar.js"),
    );
    it(
      "Script_-_Syloti_Nagri.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Syloti_Nagri.js"),
    );
    it(
      "Script_-_Syriac.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Syriac.js"),
    );
    it(
      "Script_-_Tagalog.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tagalog.js"),
    );
    it(
      "Script_-_Tagbanwa.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tagbanwa.js"),
    );
    it(
      "Script_-_Tai_Le.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tai_Le.js"),
    );
    it(
      "Script_-_Tai_Tham.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tai_Tham.js"),
    );
    it(
      "Script_-_Tai_Viet.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tai_Viet.js"),
    );
    it(
      "Script_-_Tai_Yo.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tai_Yo.js"),
    );
    it(
      "Script_-_Takri.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Takri.js"),
    );
    it(
      "Script_-_Tamil.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tamil.js"),
    );
    it(
      "Script_-_Tangsa.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tangsa.js"),
    );
    it(
      "Script_-_Tangut.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tangut.js"),
    );
    it(
      "Script_-_Telugu.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Telugu.js"),
    );
    it(
      "Script_-_Thaana.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Thaana.js"),
    );
    it(
      "Script_-_Thai.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Thai.js"),
    );
    it(
      "Script_-_Tibetan.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tibetan.js"),
    );
    it(
      "Script_-_Tifinagh.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tifinagh.js"),
    );
    it(
      "Script_-_Tirhuta.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tirhuta.js"),
    );
    it(
      "Script_-_Todhri.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Todhri.js"),
    );
    it(
      "Script_-_Tolong_Siki.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tolong_Siki.js"),
    );
    it(
      "Script_-_Toto.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Toto.js"),
    );
    it(
      "Script_-_Tulu_Tigalari.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Tulu_Tigalari.js"),
    );
    it(
      "Script_-_Ugaritic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Ugaritic.js"),
    );
    it(
      "Script_-_Unknown.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Unknown.js"),
    );
    it(
      "Script_-_Vai.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Vai.js"),
    );
    it(
      "Script_-_Vithkuqi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Vithkuqi.js"),
    );
    it(
      "Script_-_Wancho.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Wancho.js"),
    );
    it(
      "Script_-_Warang_Citi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Warang_Citi.js"),
    );
    it(
      "Script_-_Yezidi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Yezidi.js"),
    );
    it(
      "Script_-_Yi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Yi.js"),
    );
    it(
      "Script_-_Zanabazar_Square.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_-_Zanabazar_Square.js"),
    );
    it(
      "Script_Extensions_-_Adlam.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Adlam.js"),
    );
    it(
      "Script_Extensions_-_Ahom.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Ahom.js"),
    );
    it(
      "Script_Extensions_-_Anatolian_Hieroglyphs.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Anatolian_Hieroglyphs.js",
      ),
    );
    it(
      "Script_Extensions_-_Arabic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Arabic.js",
      ),
    );
    it(
      "Script_Extensions_-_Armenian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Armenian.js",
      ),
    );
    it(
      "Script_Extensions_-_Avestan.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Avestan.js",
      ),
    );
    it(
      "Script_Extensions_-_Balinese.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Balinese.js",
      ),
    );
    it(
      "Script_Extensions_-_Bamum.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Bamum.js"),
    );
    it(
      "Script_Extensions_-_Bassa_Vah.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Bassa_Vah.js",
      ),
    );
    it(
      "Script_Extensions_-_Batak.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Batak.js"),
    );
    it(
      "Script_Extensions_-_Bengali.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Bengali.js",
      ),
    );
    it(
      "Script_Extensions_-_Beria_Erfe.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Beria_Erfe.js",
      ),
    );
    it(
      "Script_Extensions_-_Bhaiksuki.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Bhaiksuki.js",
      ),
    );
    it(
      "Script_Extensions_-_Bopomofo.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Bopomofo.js",
      ),
    );
    it(
      "Script_Extensions_-_Brahmi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Brahmi.js",
      ),
    );
    it(
      "Script_Extensions_-_Braille.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Braille.js",
      ),
    );
    it(
      "Script_Extensions_-_Buginese.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Buginese.js",
      ),
    );
    it(
      "Script_Extensions_-_Buhid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Buhid.js"),
    );
    it(
      "Script_Extensions_-_Canadian_Aboriginal.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Canadian_Aboriginal.js",
      ),
    );
    it(
      "Script_Extensions_-_Carian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Carian.js",
      ),
    );
    it(
      "Script_Extensions_-_Caucasian_Albanian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Caucasian_Albanian.js",
      ),
    );
    it(
      "Script_Extensions_-_Chakma.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Chakma.js",
      ),
    );
    it(
      "Script_Extensions_-_Cham.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Cham.js"),
    );
    it(
      "Script_Extensions_-_Cherokee.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Cherokee.js",
      ),
    );
    it(
      "Script_Extensions_-_Chorasmian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Chorasmian.js",
      ),
    );
    it(
      "Script_Extensions_-_Common.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Common.js",
      ),
    );
    it(
      "Script_Extensions_-_Coptic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Coptic.js",
      ),
    );
    it(
      "Script_Extensions_-_Cuneiform.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Cuneiform.js",
      ),
    );
    it(
      "Script_Extensions_-_Cypriot.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Cypriot.js",
      ),
    );
    it(
      "Script_Extensions_-_Cypro_Minoan.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Cypro_Minoan.js",
      ),
    );
    it(
      "Script_Extensions_-_Cyrillic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Cyrillic.js",
      ),
    );
    it(
      "Script_Extensions_-_Deseret.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Deseret.js",
      ),
    );
    it(
      "Script_Extensions_-_Devanagari.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Devanagari.js",
      ),
    );
    it(
      "Script_Extensions_-_Dives_Akuru.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Dives_Akuru.js",
      ),
    );
    it(
      "Script_Extensions_-_Dogra.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Dogra.js"),
    );
    it(
      "Script_Extensions_-_Duployan.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Duployan.js",
      ),
    );
    it(
      "Script_Extensions_-_Egyptian_Hieroglyphs.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Egyptian_Hieroglyphs.js",
      ),
    );
    it(
      "Script_Extensions_-_Elbasan.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Elbasan.js",
      ),
    );
    it(
      "Script_Extensions_-_Elymaic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Elymaic.js",
      ),
    );
    it(
      "Script_Extensions_-_Ethiopic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Ethiopic.js",
      ),
    );
    it(
      "Script_Extensions_-_Garay.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Garay.js"),
    );
    it(
      "Script_Extensions_-_Georgian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Georgian.js",
      ),
    );
    it(
      "Script_Extensions_-_Glagolitic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Glagolitic.js",
      ),
    );
    it(
      "Script_Extensions_-_Gothic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Gothic.js",
      ),
    );
    it(
      "Script_Extensions_-_Grantha.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Grantha.js",
      ),
    );
    it(
      "Script_Extensions_-_Greek.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Greek.js"),
    );
    it(
      "Script_Extensions_-_Gujarati.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Gujarati.js",
      ),
    );
    it(
      "Script_Extensions_-_Gunjala_Gondi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Gunjala_Gondi.js",
      ),
    );
    it(
      "Script_Extensions_-_Gurmukhi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Gurmukhi.js",
      ),
    );
    it(
      "Script_Extensions_-_Gurung_Khema.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Gurung_Khema.js",
      ),
    );
    it(
      "Script_Extensions_-_Han.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Han.js"),
    );
    it(
      "Script_Extensions_-_Hangul.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Hangul.js",
      ),
    );
    it(
      "Script_Extensions_-_Hanifi_Rohingya.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Hanifi_Rohingya.js",
      ),
    );
    it(
      "Script_Extensions_-_Hanunoo.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Hanunoo.js",
      ),
    );
    it(
      "Script_Extensions_-_Hatran.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Hatran.js",
      ),
    );
    it(
      "Script_Extensions_-_Hebrew.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Hebrew.js",
      ),
    );
    it(
      "Script_Extensions_-_Hiragana.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Hiragana.js",
      ),
    );
    it(
      "Script_Extensions_-_Imperial_Aramaic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Imperial_Aramaic.js",
      ),
    );
    it(
      "Script_Extensions_-_Inherited.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Inherited.js",
      ),
    );
    it(
      "Script_Extensions_-_Inscriptional_Pahlavi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Inscriptional_Pahlavi.js",
      ),
    );
    it(
      "Script_Extensions_-_Inscriptional_Parthian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Inscriptional_Parthian.js",
      ),
    );
    it(
      "Script_Extensions_-_Javanese.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Javanese.js",
      ),
    );
    it(
      "Script_Extensions_-_Kaithi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Kaithi.js",
      ),
    );
    it(
      "Script_Extensions_-_Kannada.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Kannada.js",
      ),
    );
    it(
      "Script_Extensions_-_Katakana.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Katakana.js",
      ),
    );
    it(
      "Script_Extensions_-_Kawi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Kawi.js"),
    );
    it(
      "Script_Extensions_-_Kayah_Li.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Kayah_Li.js",
      ),
    );
    it(
      "Script_Extensions_-_Kharoshthi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Kharoshthi.js",
      ),
    );
    it(
      "Script_Extensions_-_Khitan_Small_Script.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Khitan_Small_Script.js",
      ),
    );
    it(
      "Script_Extensions_-_Khmer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Khmer.js"),
    );
    it(
      "Script_Extensions_-_Khojki.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Khojki.js",
      ),
    );
    it(
      "Script_Extensions_-_Khudawadi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Khudawadi.js",
      ),
    );
    it(
      "Script_Extensions_-_Kirat_Rai.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Kirat_Rai.js",
      ),
    );
    it(
      "Script_Extensions_-_Lao.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Lao.js"),
    );
    it(
      "Script_Extensions_-_Latin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Latin.js"),
    );
    it(
      "Script_Extensions_-_Lepcha.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Lepcha.js",
      ),
    );
    it(
      "Script_Extensions_-_Limbu.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Limbu.js"),
    );
    it(
      "Script_Extensions_-_Linear_A.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Linear_A.js",
      ),
    );
    it(
      "Script_Extensions_-_Linear_B.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Linear_B.js",
      ),
    );
    it(
      "Script_Extensions_-_Lisu.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Lisu.js"),
    );
    it(
      "Script_Extensions_-_Lycian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Lycian.js",
      ),
    );
    it(
      "Script_Extensions_-_Lydian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Lydian.js",
      ),
    );
    it(
      "Script_Extensions_-_Mahajani.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Mahajani.js",
      ),
    );
    it(
      "Script_Extensions_-_Makasar.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Makasar.js",
      ),
    );
    it(
      "Script_Extensions_-_Malayalam.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Malayalam.js",
      ),
    );
    it(
      "Script_Extensions_-_Mandaic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Mandaic.js",
      ),
    );
    it(
      "Script_Extensions_-_Manichaean.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Manichaean.js",
      ),
    );
    it(
      "Script_Extensions_-_Marchen.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Marchen.js",
      ),
    );
    it(
      "Script_Extensions_-_Masaram_Gondi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Masaram_Gondi.js",
      ),
    );
    it(
      "Script_Extensions_-_Medefaidrin.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Medefaidrin.js",
      ),
    );
    it(
      "Script_Extensions_-_Meetei_Mayek.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Meetei_Mayek.js",
      ),
    );
    it(
      "Script_Extensions_-_Mende_Kikakui.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Mende_Kikakui.js",
      ),
    );
    it(
      "Script_Extensions_-_Meroitic_Cursive.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Meroitic_Cursive.js",
      ),
    );
    it(
      "Script_Extensions_-_Meroitic_Hieroglyphs.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Meroitic_Hieroglyphs.js",
      ),
    );
    it(
      "Script_Extensions_-_Miao.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Miao.js"),
    );
    it(
      "Script_Extensions_-_Modi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Modi.js"),
    );
    it(
      "Script_Extensions_-_Mongolian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Mongolian.js",
      ),
    );
    it(
      "Script_Extensions_-_Mro.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Mro.js"),
    );
    it(
      "Script_Extensions_-_Multani.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Multani.js",
      ),
    );
    it(
      "Script_Extensions_-_Myanmar.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Myanmar.js",
      ),
    );
    it(
      "Script_Extensions_-_Nabataean.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Nabataean.js",
      ),
    );
    it(
      "Script_Extensions_-_Nag_Mundari.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Nag_Mundari.js",
      ),
    );
    it(
      "Script_Extensions_-_Nandinagari.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Nandinagari.js",
      ),
    );
    it(
      "Script_Extensions_-_New_Tai_Lue.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_New_Tai_Lue.js",
      ),
    );
    it(
      "Script_Extensions_-_Newa.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Newa.js"),
    );
    it(
      "Script_Extensions_-_Nko.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Nko.js"),
    );
    it(
      "Script_Extensions_-_Nushu.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Nushu.js"),
    );
    it(
      "Script_Extensions_-_Nyiakeng_Puachue_Hmong.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Nyiakeng_Puachue_Hmong.js",
      ),
    );
    it(
      "Script_Extensions_-_Ogham.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Ogham.js"),
    );
    it(
      "Script_Extensions_-_Ol_Chiki.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Ol_Chiki.js",
      ),
    );
    it(
      "Script_Extensions_-_Ol_Onal.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Ol_Onal.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_Hungarian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_Hungarian.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_Italic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_Italic.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_North_Arabian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_North_Arabian.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_Permic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_Permic.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_Persian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_Persian.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_Sogdian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_Sogdian.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_South_Arabian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_South_Arabian.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_Turkic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_Turkic.js",
      ),
    );
    it(
      "Script_Extensions_-_Old_Uyghur.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Old_Uyghur.js",
      ),
    );
    it(
      "Script_Extensions_-_Oriya.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Oriya.js"),
    );
    it(
      "Script_Extensions_-_Osage.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Osage.js"),
    );
    it(
      "Script_Extensions_-_Osmanya.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Osmanya.js",
      ),
    );
    it(
      "Script_Extensions_-_Pahawh_Hmong.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Pahawh_Hmong.js",
      ),
    );
    it(
      "Script_Extensions_-_Palmyrene.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Palmyrene.js",
      ),
    );
    it(
      "Script_Extensions_-_Pau_Cin_Hau.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Pau_Cin_Hau.js",
      ),
    );
    it(
      "Script_Extensions_-_Phags_Pa.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Phags_Pa.js",
      ),
    );
    it(
      "Script_Extensions_-_Phoenician.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Phoenician.js",
      ),
    );
    it(
      "Script_Extensions_-_Psalter_Pahlavi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Psalter_Pahlavi.js",
      ),
    );
    it(
      "Script_Extensions_-_Rejang.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Rejang.js",
      ),
    );
    it(
      "Script_Extensions_-_Runic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Runic.js"),
    );
    it(
      "Script_Extensions_-_Samaritan.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Samaritan.js",
      ),
    );
    it(
      "Script_Extensions_-_Saurashtra.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Saurashtra.js",
      ),
    );
    it(
      "Script_Extensions_-_Sharada.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Sharada.js",
      ),
    );
    it(
      "Script_Extensions_-_Shavian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Shavian.js",
      ),
    );
    it(
      "Script_Extensions_-_Siddham.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Siddham.js",
      ),
    );
    it(
      "Script_Extensions_-_Sidetic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Sidetic.js",
      ),
    );
    it(
      "Script_Extensions_-_SignWriting.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_SignWriting.js",
      ),
    );
    it(
      "Script_Extensions_-_Sinhala.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Sinhala.js",
      ),
    );
    it(
      "Script_Extensions_-_Sogdian.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Sogdian.js",
      ),
    );
    it(
      "Script_Extensions_-_Sora_Sompeng.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Sora_Sompeng.js",
      ),
    );
    it(
      "Script_Extensions_-_Soyombo.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Soyombo.js",
      ),
    );
    it(
      "Script_Extensions_-_Sundanese.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Sundanese.js",
      ),
    );
    it(
      "Script_Extensions_-_Sunuwar.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Sunuwar.js",
      ),
    );
    it(
      "Script_Extensions_-_Syloti_Nagri.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Syloti_Nagri.js",
      ),
    );
    it(
      "Script_Extensions_-_Syriac.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Syriac.js",
      ),
    );
    it(
      "Script_Extensions_-_Tagalog.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tagalog.js",
      ),
    );
    it(
      "Script_Extensions_-_Tagbanwa.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tagbanwa.js",
      ),
    );
    it(
      "Script_Extensions_-_Tai_Le.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tai_Le.js",
      ),
    );
    it(
      "Script_Extensions_-_Tai_Tham.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tai_Tham.js",
      ),
    );
    it(
      "Script_Extensions_-_Tai_Viet.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tai_Viet.js",
      ),
    );
    it(
      "Script_Extensions_-_Tai_Yo.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tai_Yo.js",
      ),
    );
    it(
      "Script_Extensions_-_Takri.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Takri.js"),
    );
    it(
      "Script_Extensions_-_Tamil.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tamil.js"),
    );
    it(
      "Script_Extensions_-_Tangsa.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tangsa.js",
      ),
    );
    it(
      "Script_Extensions_-_Tangut.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tangut.js",
      ),
    );
    it(
      "Script_Extensions_-_Telugu.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Telugu.js",
      ),
    );
    it(
      "Script_Extensions_-_Thaana.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Thaana.js",
      ),
    );
    it(
      "Script_Extensions_-_Thai.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Thai.js"),
    );
    it(
      "Script_Extensions_-_Tibetan.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tibetan.js",
      ),
    );
    it(
      "Script_Extensions_-_Tifinagh.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tifinagh.js",
      ),
    );
    it(
      "Script_Extensions_-_Tirhuta.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tirhuta.js",
      ),
    );
    it(
      "Script_Extensions_-_Todhri.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Todhri.js",
      ),
    );
    it(
      "Script_Extensions_-_Tolong_Siki.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tolong_Siki.js",
      ),
    );
    it(
      "Script_Extensions_-_Toto.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Toto.js"),
    );
    it(
      "Script_Extensions_-_Tulu_Tigalari.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Tulu_Tigalari.js",
      ),
    );
    it(
      "Script_Extensions_-_Ugaritic.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Ugaritic.js",
      ),
    );
    it(
      "Script_Extensions_-_Unknown.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Unknown.js",
      ),
    );
    it(
      "Script_Extensions_-_Vai.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Vai.js"),
    );
    it(
      "Script_Extensions_-_Vithkuqi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Vithkuqi.js",
      ),
    );
    it(
      "Script_Extensions_-_Wancho.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Wancho.js",
      ),
    );
    it(
      "Script_Extensions_-_Warang_Citi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Warang_Citi.js",
      ),
    );
    it(
      "Script_Extensions_-_Yezidi.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Yezidi.js",
      ),
    );
    it(
      "Script_Extensions_-_Yi.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Yi.js"),
    );
    it(
      "Script_Extensions_-_Zanabazar_Square.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/RegExp/property-escapes/generated/Script_Extensions_-_Zanabazar_Square.js",
      ),
    );
    it(
      "Sentence_Terminal.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Sentence_Terminal.js"),
    );
    it(
      "Soft_Dotted.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Soft_Dotted.js"),
    );
    it(
      "Terminal_Punctuation.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Terminal_Punctuation.js"),
    );
    it(
      "Unified_Ideograph.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Unified_Ideograph.js"),
    );
    it(
      "Uppercase.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Uppercase.js"),
    );
    it(
      "Variation_Selector.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/Variation_Selector.js"),
    );
    it(
      "White_Space.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/White_Space.js"),
    );
    it(
      "XID_Continue.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/XID_Continue.js"),
    );
    it(
      "XID_Start.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/RegExp/property-escapes/generated/XID_Start.js"),
    );
    describe("strings", () => {
      it(
        "Basic_Emoji-negative-CharacterClass.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/Basic_Emoji-negative-CharacterClass.js",
        ),
      );
      it(
        "Basic_Emoji-negative-P.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/Basic_Emoji-negative-P.js",
        ),
      );
      it(
        "Basic_Emoji-negative-u.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/Basic_Emoji-negative-u.js",
        ),
      );
      it(
        "Basic_Emoji.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/RegExp/property-escapes/generated/strings/Basic_Emoji.js"),
      );
      it(
        "Emoji_Keycap_Sequence-negative-CharacterClass.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/Emoji_Keycap_Sequence-negative-CharacterClass.js",
        ),
      );
      it(
        "Emoji_Keycap_Sequence-negative-P.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/Emoji_Keycap_Sequence-negative-P.js",
        ),
      );
      it(
        "Emoji_Keycap_Sequence-negative-u.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/Emoji_Keycap_Sequence-negative-u.js",
        ),
      );
      it(
        "Emoji_Keycap_Sequence.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/Emoji_Keycap_Sequence.js",
        ),
      );
      it(
        "RGI_Emoji-negative-CharacterClass.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji-negative-CharacterClass.js",
        ),
      );
      it(
        "RGI_Emoji-negative-P.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji-negative-P.js",
        ),
      );
      it(
        "RGI_Emoji-negative-u.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji-negative-u.js",
        ),
      );
      it(
        "RGI_Emoji.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji.js"),
      );
      it(
        "RGI_Emoji_Flag_Sequence-negative-CharacterClass.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Flag_Sequence-negative-CharacterClass.js",
        ),
      );
      it(
        "RGI_Emoji_Flag_Sequence-negative-P.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Flag_Sequence-negative-P.js",
        ),
      );
      it(
        "RGI_Emoji_Flag_Sequence-negative-u.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Flag_Sequence-negative-u.js",
        ),
      );
      it(
        "RGI_Emoji_Flag_Sequence.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Flag_Sequence.js",
        ),
      );
      it(
        "RGI_Emoji_Modifier_Sequence-negative-CharacterClass.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Modifier_Sequence-negative-CharacterClass.js",
        ),
      );
      it(
        "RGI_Emoji_Modifier_Sequence-negative-P.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Modifier_Sequence-negative-P.js",
        ),
      );
      it(
        "RGI_Emoji_Modifier_Sequence-negative-u.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Modifier_Sequence-negative-u.js",
        ),
      );
      it(
        "RGI_Emoji_Modifier_Sequence.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Modifier_Sequence.js",
        ),
      );
      it(
        "RGI_Emoji_Tag_Sequence-negative-CharacterClass.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Tag_Sequence-negative-CharacterClass.js",
        ),
      );
      it(
        "RGI_Emoji_Tag_Sequence-negative-P.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Tag_Sequence-negative-P.js",
        ),
      );
      it(
        "RGI_Emoji_Tag_Sequence-negative-u.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Tag_Sequence-negative-u.js",
        ),
      );
      it(
        "RGI_Emoji_Tag_Sequence.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_Tag_Sequence.js",
        ),
      );
      it(
        "RGI_Emoji_ZWJ_Sequence-negative-CharacterClass.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_ZWJ_Sequence-negative-CharacterClass.js",
        ),
      );
      it(
        "RGI_Emoji_ZWJ_Sequence-negative-P.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_ZWJ_Sequence-negative-P.js",
        ),
      );
      it(
        "RGI_Emoji_ZWJ_Sequence-negative-u.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_ZWJ_Sequence-negative-u.js",
        ),
      );
      it(
        "RGI_Emoji_ZWJ_Sequence.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/RegExp/property-escapes/generated/strings/RGI_Emoji_ZWJ_Sequence.js",
        ),
      );
    });
  });
  it(
    "grammar-extension-In-prefix-Block-implicit-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-In-prefix-Block-implicit-negated.js",
    ),
  );
  it(
    "grammar-extension-In-prefix-Block-implicit.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-In-prefix-Block-implicit.js",
    ),
  );
  it(
    "grammar-extension-In-prefix-Script-implicit-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-In-prefix-Script-implicit-negated.js",
    ),
  );
  it(
    "grammar-extension-In-prefix-Script-implicit.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-In-prefix-Script-implicit.js",
    ),
  );
  it(
    "grammar-extension-In-prefix-Script-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-In-prefix-Script-negated.js",
    ),
  );
  it(
    "grammar-extension-In-prefix-Script.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-In-prefix-Script.js"),
  );
  it(
    "grammar-extension-Is-prefix-Script-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-Is-prefix-Script-negated.js",
    ),
  );
  it(
    "grammar-extension-Is-prefix-Script.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-Is-prefix-Script.js"),
  );
  it(
    "grammar-extension-circumflex-negation-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-circumflex-negation-negated.js",
    ),
  );
  it(
    "grammar-extension-circumflex-negation.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-circumflex-negation.js"),
  );
  it(
    "grammar-extension-empty-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-empty-negated.js"),
  );
  it(
    "grammar-extension-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-empty.js"),
  );
  it(
    "grammar-extension-invalid-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-invalid-negated.js"),
  );
  it(
    "grammar-extension-invalid.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-invalid.js"),
  );
  it(
    "grammar-extension-no-braces-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-no-braces-negated.js"),
  );
  it(
    "grammar-extension-no-braces-value-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-no-braces-value-negated.js",
    ),
  );
  it(
    "grammar-extension-no-braces-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-no-braces-value.js"),
  );
  it(
    "grammar-extension-no-braces.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-no-braces.js"),
  );
  it(
    "grammar-extension-separator-and-value-only-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-separator-and-value-only-negated.js",
    ),
  );
  it(
    "grammar-extension-separator-and-value-only.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-separator-and-value-only.js",
    ),
  );
  it(
    "grammar-extension-separator-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-separator-negated.js"),
  );
  it(
    "grammar-extension-separator-only-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/grammar-extension-separator-only-negated.js",
    ),
  );
  it(
    "grammar-extension-separator-only.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-separator-only.js"),
  );
  it(
    "grammar-extension-separator.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-separator.js"),
  );
  it(
    "grammar-extension-unclosed-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-unclosed-negated.js"),
  );
  it(
    "grammar-extension-unclosed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-unclosed.js"),
  );
  it(
    "grammar-extension-unopened-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-unopened-negated.js"),
  );
  it(
    "grammar-extension-unopened.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/grammar-extension-unopened.js"),
  );
  it(
    "loose-matching-01-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-01-negated.js"),
  );
  it(
    "loose-matching-01.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-01.js"),
  );
  it(
    "loose-matching-02-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-02-negated.js"),
  );
  it(
    "loose-matching-02.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-02.js"),
  );
  it(
    "loose-matching-03-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-03-negated.js"),
  );
  it(
    "loose-matching-03.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-03.js"),
  );
  it(
    "loose-matching-04-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-04-negated.js"),
  );
  it(
    "loose-matching-04.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-04.js"),
  );
  it(
    "loose-matching-05-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-05-negated.js"),
  );
  it(
    "loose-matching-05.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-05.js"),
  );
  it(
    "loose-matching-06-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-06-negated.js"),
  );
  it(
    "loose-matching-06.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-06.js"),
  );
  it(
    "loose-matching-07-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-07-negated.js"),
  );
  it(
    "loose-matching-07.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-07.js"),
  );
  it(
    "loose-matching-08-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-08-negated.js"),
  );
  it(
    "loose-matching-08.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-08.js"),
  );
  it(
    "loose-matching-09-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-09-negated.js"),
  );
  it(
    "loose-matching-09.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-09.js"),
  );
  it(
    "loose-matching-10-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-10-negated.js"),
  );
  it(
    "loose-matching-10.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-10.js"),
  );
  it(
    "loose-matching-11-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-11-negated.js"),
  );
  it(
    "loose-matching-11.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-11.js"),
  );
  it(
    "loose-matching-12-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-12-negated.js"),
  );
  it(
    "loose-matching-12.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-12.js"),
  );
  it(
    "loose-matching-13-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-13-negated.js"),
  );
  it(
    "loose-matching-13.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-13.js"),
  );
  it(
    "loose-matching-14-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-14-negated.js"),
  );
  it(
    "loose-matching-14.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/loose-matching-14.js"),
  );
  it(
    "non-binary-property-without-value-General_Category-equals-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-General_Category-equals-negated.js",
    ),
  );
  it(
    "non-binary-property-without-value-General_Category-equals.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-General_Category-equals.js",
    ),
  );
  it(
    "non-binary-property-without-value-General_Category-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-General_Category-negated.js",
    ),
  );
  it(
    "non-binary-property-without-value-General_Category.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-General_Category.js",
    ),
  );
  it(
    "non-binary-property-without-value-Script-equals-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-Script-equals-negated.js",
    ),
  );
  it(
    "non-binary-property-without-value-Script-equals.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-Script-equals.js",
    ),
  );
  it(
    "non-binary-property-without-value-Script-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-Script-negated.js",
    ),
  );
  it(
    "non-binary-property-without-value-Script.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-Script.js",
    ),
  );
  it(
    "non-binary-property-without-value-Script_Extensions-equals-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-Script_Extensions-equals-negated.js",
    ),
  );
  it(
    "non-binary-property-without-value-Script_Extensions-equals.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-Script_Extensions-equals.js",
    ),
  );
  it(
    "non-binary-property-without-value-Script_Extensions-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-Script_Extensions-negated.js",
    ),
  );
  it(
    "non-binary-property-without-value-Script_Extensions.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-binary-property-without-value-Script_Extensions.js",
    ),
  );
  it(
    "non-existent-binary-property-negated.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/non-existent-binary-property-negated.js"),
  );
  it(
    "non-existent-binary-property.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/non-existent-binary-property.js"),
  );
  it(
    "non-existent-property-and-value-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-existent-property-and-value-negated.js",
    ),
  );
  it(
    "non-existent-property-and-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/non-existent-property-and-value.js"),
  );
  it(
    "non-existent-property-existing-value-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-existent-property-existing-value-negated.js",
    ),
  );
  it(
    "non-existent-property-existing-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/non-existent-property-existing-value.js"),
  );
  it(
    "non-existent-property-value-General_Category-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-existent-property-value-General_Category-negated.js",
    ),
  );
  it(
    "non-existent-property-value-Script-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-existent-property-value-Script-negated.js",
    ),
  );
  it(
    "non-existent-property-value-Script.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/non-existent-property-value-Script.js"),
  );
  it(
    "non-existent-property-value-Script_Extensions-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-existent-property-value-Script_Extensions-negated.js",
    ),
  );
  it(
    "non-existent-property-value-Script_Extensions.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-existent-property-value-Script_Extensions.js",
    ),
  );
  it(
    "non-existent-property-value-general-category.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/non-existent-property-value-general-category.js",
    ),
  );
  it(
    "special-property-value-Script_Extensions-Unknown.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/special-property-value-Script_Extensions-Unknown.js",
    ),
  );
  it(
    "unsupported-binary-property-Composition_Exclusion-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Composition_Exclusion-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Composition_Exclusion.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Composition_Exclusion.js",
    ),
  );
  it(
    "unsupported-binary-property-Expands_On_NFC-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Expands_On_NFC-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Expands_On_NFC.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Expands_On_NFC.js",
    ),
  );
  it(
    "unsupported-binary-property-Expands_On_NFD-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Expands_On_NFD-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Expands_On_NFD.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Expands_On_NFD.js",
    ),
  );
  it(
    "unsupported-binary-property-Expands_On_NFKC-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Expands_On_NFKC-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Expands_On_NFKC.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Expands_On_NFKC.js",
    ),
  );
  it(
    "unsupported-binary-property-Expands_On_NFKD-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Expands_On_NFKD-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Expands_On_NFKD.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Expands_On_NFKD.js",
    ),
  );
  it(
    "unsupported-binary-property-FC_NFKC_Closure-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-FC_NFKC_Closure-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-FC_NFKC_Closure.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-FC_NFKC_Closure.js",
    ),
  );
  it(
    "unsupported-binary-property-Full_Composition_Exclusion-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Full_Composition_Exclusion-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Full_Composition_Exclusion.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Full_Composition_Exclusion.js",
    ),
  );
  it(
    "unsupported-binary-property-Grapheme_Link-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Grapheme_Link-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Grapheme_Link.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Grapheme_Link.js",
    ),
  );
  it(
    "unsupported-binary-property-Hyphen-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Hyphen-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Hyphen.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/unsupported-binary-property-Hyphen.js"),
  );
  it(
    "unsupported-binary-property-Other_Alphabetic-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Alphabetic-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Alphabetic.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Alphabetic.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Default_Ignorable_Code_Point-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Default_Ignorable_Code_Point-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Default_Ignorable_Code_Point.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Default_Ignorable_Code_Point.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Grapheme_Extend-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Grapheme_Extend-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Grapheme_Extend.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Grapheme_Extend.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_ID_Continue-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_ID_Continue-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_ID_Continue.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_ID_Continue.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_ID_Start-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_ID_Start-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_ID_Start.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_ID_Start.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Lowercase-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Lowercase-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Lowercase.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Lowercase.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Math-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Math-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Math.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Math.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Uppercase-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Uppercase-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Other_Uppercase.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Other_Uppercase.js",
    ),
  );
  it(
    "unsupported-binary-property-Prepended_Concatenation_Mark-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Prepended_Concatenation_Mark-negated.js",
    ),
  );
  it(
    "unsupported-binary-property-Prepended_Concatenation_Mark.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-binary-property-Prepended_Concatenation_Mark.js",
    ),
  );
  it(
    "unsupported-property-Block-with-value-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-property-Block-with-value-negated.js",
    ),
  );
  it(
    "unsupported-property-Block-with-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/unsupported-property-Block-with-value.js"),
  );
  it(
    "unsupported-property-FC_NFKC_Closure-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-property-FC_NFKC_Closure-negated.js",
    ),
  );
  it(
    "unsupported-property-FC_NFKC_Closure.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/unsupported-property-FC_NFKC_Closure.js"),
  );
  it(
    "unsupported-property-Line_Break-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-property-Line_Break-negated.js",
    ),
  );
  it(
    "unsupported-property-Line_Break-with-value-negated.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-property-Line_Break-with-value-negated.js",
    ),
  );
  it(
    "unsupported-property-Line_Break-with-value.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/RegExp/property-escapes/unsupported-property-Line_Break-with-value.js",
    ),
  );
  it(
    "unsupported-property-Line_Break.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/RegExp/property-escapes/unsupported-property-Line_Break.js"),
  );
});
