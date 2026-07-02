/**
 * Estimate the retained heap weight (bytes) of a parsed babel AST subtree.
 *
 * Derived empirically (node v24, @babel/parser 7.29).
 * Constants are chosen on the *conservative* side: across a corpus spanning
 * pathological dense chains and realistic code, this never under-counts the
 * measured retained size (it over-counts by 0–14%, ~1% on real code).
 */

// Structural cost of any node: the node object + its SourceLocation (`loc`),
// two Position objects, and the `range` [start,end] array. Floor observed at
// ~265 B (deep chains); padded to 300 to cover in-object slack on richer nodes.
const NODE_BASE = 300;
// A sibling array (statement lists, params, arguments, elements, properties…).
const ARRAY_BASE = 64;
// Per array element — covers the pointer slot plus V8's doubling-growth slack.
const ARRAY_SLOT = 24;
// Per character of string-valued fields (identifier names, string values,
// operators, raw literal text). Source text itself is charged separately.
const STR_PER_CHAR = 2;
// Babel attaches an `extra: { raw, rawValue, … }` side object to literals.
const LITERAL_EXTRA = 100;

const STRUCTURAL = new Set(["loc", "range", "start", "end", "type"]);

export function weighAstNode(root: unknown): number {
  let total = 0;

  const visit = (node: unknown): void => {
    if (node == null || typeof node !== "object") {
      return;
    }
    if (Array.isArray(node)) {
      total += ARRAY_BASE + ARRAY_SLOT * node.length;
      for (const child of node) {
        visit(child);
      }
      return;
    }

    const obj = node as Record<string, unknown>;
    if (typeof obj["type"] === "string") {
      total += NODE_BASE;
    }

    for (const key in obj) {
      if (STRUCTURAL.has(key)) {
        continue;
      }
      const value = obj[key];
      if (key === "extra" && value && typeof value === "object") {
        total += LITERAL_EXTRA;
        const raw = (value as Record<string, unknown>)["raw"];
        if (typeof raw === "string") {
          total += STR_PER_CHAR * raw.length;
        }
        continue;
      }
      if (typeof value === "string") {
        total += STR_PER_CHAR * value.length;
      } else if (value && typeof value === "object") {
        visit(value);
      }
    }
  };

  visit(root);
  return total;
}
