import { readdirSync } from "node:fs";

import getTest262Path from "./utils/get-test262-path.js";
import defineTestFolder from "./define-test-folder.js";

const LanguageCategories = readdirSync(getTest262Path("test/language"));

for (const category of LanguageCategories) {
  defineTestFolder(getTest262Path("test/language", category));
}
