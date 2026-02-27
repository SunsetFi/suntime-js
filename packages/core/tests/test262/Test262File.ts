import { readFileSync } from "node:fs";
import { relative as relativePath } from "node:path";
import { parse as parseYaml } from "yaml";
import test262Path from "./utils/test262-path.js";

export interface Test262Negative {
  phase: "parse" | "early" | "runtime";
  type: string;
}

interface Test262Flags {
  raw?: boolean;
  module?: boolean;
  noStrict?: boolean;
  onlyStrict?: boolean;
  async?: boolean;
}

const rootTestsDir = test262Path("test");
export default class Test262File {
  static fromFile(path: string): Test262File {
    const nameParts = relativePath(rootTestsDir, path).split(/\/|\\/);
    const contents = readFileSync(path, "utf-8");
    return Test262File.fromContents(nameParts, contents);
  }

  static fromContents(nameParts: string[], contents: string): Test262File {
    // This is slooowwww
    // const frontmatterStr = contents.match(/\/\*\s*---([\s\S]*?)---\s*\*\//)?.[1];

    const frontMatterStart = contents.indexOf("/*---");
    const frontMatterEnd = contents.indexOf("---*/");
    if (frontMatterStart === -1 || frontMatterEnd === -1) {
      throw new Error("Test262 file is missing frontmatter");
    }
    const frontmatterStr = contents.slice(frontMatterStart + 5, frontMatterEnd);

    const attributes = parseYaml(frontmatterStr);

    return new Test262File(nameParts, attributes, contents);
  }

  constructor(
    private readonly nameParts: string[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    frontmatter: any,
    public readonly contents: string,
  ) {
    this.features = frontmatter.features || [];
    this.negative = frontmatter.negative;
    this.flags = (frontmatter.flags ?? []).reduce((acc: Test262Flags, flag: string) => {
      acc[flag as keyof Test262Flags] = true;
      return acc;
    }, {});
    this.includes = frontmatter.includes || [];
    this.locale = frontmatter.locale || [];
  }

  get testName() {
    return this.nameParts[this.nameParts.length - 1];
  }

  get testPath() {
    return this.nameParts.join("/");
  }

  get testPathParts() {
    return this.nameParts;
  }

  public readonly features: string[];
  public readonly negative: Test262Negative | undefined;
  public readonly flags: Test262Flags;
  public readonly includes: string[];
  public readonly locale: string[];
}
