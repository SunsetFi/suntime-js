import type { ParserOptions } from "@babel/parser";

const babelParserOptions: ParserOptions = {
  attachComment: false,
  createImportExpressions: true,
};
export default babelParserOptions;
