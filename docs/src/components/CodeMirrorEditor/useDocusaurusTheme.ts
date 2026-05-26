import type { Extension } from "@codemirror/state";

import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import { useColorMode } from "@docusaurus/theme-common";

export function useDocusaurusTheme(): Extension {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? oneDark : EditorView.baseTheme({}); // light: rely on CM6 defaults
}
