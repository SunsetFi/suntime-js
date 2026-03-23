import type { ParserOptions } from "@babel/parser";

export const babelParserOptions: ParserOptions = {
  attachComment: false,
  createImportExpressions: true,
};
