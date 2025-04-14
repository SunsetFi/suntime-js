declare module "test262-parser" {
  export interface Test262File {
    file: string;
    contents: string;
    attrs: Test262FileAttrs;
    copyright: string;
    async: boolean;
    isATest: boolean;
  }
  export interface Test262FileAttrs {
    includes: string[];
    flags: Record<string, string>;
    author: string;
    negative?: Test262Negative;
  }
  export interface Test262Negative {
    phase: "parse" | "resolution" | "runtime";
    type: string;
  }

  export function parseFile(file: Test262File | string): Test262File;
}
