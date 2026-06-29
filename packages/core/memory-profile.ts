/**
 * General-purpose memory profiler for the StaticJs interpreter.
 *
 * Estimates the retained heap cost (in bytes) of the various runtime value
 * types produced by a {@link StaticJsRealm}'s type factory. It works by
 * allocating a large number of instances of a given type, holding them all
 * live across a forced garbage collection, and dividing the observed heap
 * growth by the instance count.
 *
 * Run with the V8 GC exposed and the package's `development` condition (so the
 * raw TypeScript sources resolve):
 *
 *   NODE_OPTIONS="--expose-gc --conditions=development --max-old-space-size=8192" \
 *     ./node_modules/.bin/tsx ./memory-profile.ts
 *
 * The numbers are estimates: V8 allocates in pages and rounds object sizes up
 * to alignment boundaries, so small per-item costs carry a few bytes of noise.
 * Increase `COUNT` / `TRIALS` for tighter results at the cost of runtime.
 *
 * --- Earlier hand-collected reference figures (for sanity-checking) ---
 *   Empty object  ~260 bytes; +64 bytes per ~5-char property key.
 *   String         ~52 bytes empty, ~84 @ 10 chars, ~228 @ 32 chars.
 *   Number         ~52 bytes each.
 */

import type { Node } from "@babel/types";

import { parse as parseAst } from "@babel/parser";

import type { StaticJsRealm as IStaticJsRealm } from "./src/realm/StaticJsRealm.js";
import type { StaticJsPropertyKey } from "./src/types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "./src/types/StaticJsValue.js";

import { babelParserOptions } from "./src/parser/babel-parser-options.js";
import { StaticJsRealm } from "./src/realm/factories/StaticJsRealm.js";
import {
  StaticJsAstFunction,
  type StaticJsAstFunctionNode,
} from "./src/types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsPromiseImpl } from "./src/types/implementation/objects/StaticJsPromiseImpl.js";

// --------------------------------------------------------------------------
// Measurement core
// --------------------------------------------------------------------------

/** Number of instances to allocate per measurement (override with COUNT env). */
const COUNT = Number(process.env.COUNT) || 1_000_000;
/** Trials per measurement; the median is reported (override with TRIALS env). */
const TRIALS = Number(process.env.TRIALS) || 3;
/**
 * Reduced count for types backed by a full object (symbols), which cost
 * hundreds of bytes each and would otherwise exhaust the heap at COUNT scale.
 */
const HEAVY_COUNT = Math.min(COUNT, 200_000);

function forceGc(): void {
  if (typeof global.gc !== "function") {
    throw new Error("global.gc is not available. Run node with --expose-gc (see the file header).");
  }
  // Several passes flush the young generation, promote survivors, and run any
  // pending finalizers so the heapUsed reading stabilizes.
  for (let i = 0; i < 6; i++) {
    global.gc();
  }
}

function heapUsed(): number {
  return process.memoryUsage().heapUsed;
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

/**
 * A sink that defeats dead-code elimination by forcing the JIT to treat the
 * retained values as observably used after measurement.
 */
let sink = 0;

/**
 * Measure the retained heap cost, in bytes, of a single value produced by
 * `factory`. All `count` values are held live in a pre-sized array across the
 * post-allocation GC, so only genuinely retained memory is counted. The holder
 * array's own backing store is allocated and charged to the baseline reading,
 * so it does not pollute the per-item result.
 */
function measureBytesPerItem(factory: (i: number) => unknown, count: number): number {
  const holder: unknown[] = Array.from({ length: count }).fill(null);

  forceGc();
  const before = heapUsed();

  for (let i = 0; i < count; i++) {
    holder[i] = factory(i);
  }

  forceGc();
  const after = heapUsed();

  // Touch the holder so it cannot be optimized away before `after` is read.
  for (let i = 0; i < count; i += Math.max(1, (count / 32) | 0)) {
    if (holder[i] != null) sink++;
  }

  holder.length = 0;
  forceGc();

  return (after - before) / count;
}

/** Run `measureBytesPerItem` across several trials and report the median. */
function bytesPerItem(factory: (i: number) => unknown, count = COUNT, trials = TRIALS): number {
  const samples: number[] = [];
  for (let t = 0; t < trials; t++) {
    samples.push(measureBytesPerItem(factory, count));
  }
  return median(samples);
}

// --------------------------------------------------------------------------
// Linear (size-dependent) measurement
// --------------------------------------------------------------------------

interface LinearFit {
  /** Fixed overhead independent of size (bytes). */
  base: number;
  /** Marginal cost per unit of size (bytes per char / per property). */
  perUnit: number;
  /** Raw (size -> bytes) samples used for the fit. */
  samples: { size: number; bytes: number }[];
}

/** Least-squares fit `bytes = base + perUnit * size` over (size -> bytes) samples. */
function fitLinear(samples: { size: number; bytes: number }[]): LinearFit {
  const n = samples.length;
  const sumX = samples.reduce((s, p) => s + p.size, 0);
  const sumY = samples.reduce((s, p) => s + p.bytes, 0);
  const sumXY = samples.reduce((s, p) => s + p.size * p.bytes, 0);
  const sumXX = samples.reduce((s, p) => s + p.size * p.size, 0);
  const denom = n * sumXX - sumX * sumX;
  const perUnit = denom === 0 ? 0 : (n * sumXY - sumX * sumY) / denom;
  const base = (sumY - perUnit * sumX) / n;

  return { base, perUnit, samples };
}

/**
 * Measure the marginal cost of adding one property to an object, including the
 * key's own storage. Properties are added to a single retained object so the
 * internal property map's growth is folded into the per-property figure.
 */
function bytesPerProperty(
  realm: IStaticJsRealm,
  makeKey: (i: number) => StaticJsPropertyKey,
  count = COUNT,
  trials = TRIALS,
): number {
  const samples: number[] = [];
  const value: StaticJsValue = realm.types.null; // shared singleton: no per-prop value cost

  for (let t = 0; t < trials; t++) {
    const obj = realm.types.object();

    forceGc();
    const before = heapUsed();

    for (let i = 0; i < count; i++) {
      obj.defineOwnPropertySync(makeKey(i), {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    forceGc();
    const after = heapUsed();

    // Keep the object (and thus its property map) alive past the reading.
    if (obj.ownPropertyKeysSync().length !== count) {
      throw new Error("property count mismatch — keys were deduplicated");
    }

    samples.push((after - before) / count);
  }

  return median(samples);
}

/**
 * Counts smaller than COUNT for composite/interpreted types, which are
 * expensive per item and built through the (slow) tree-walking evaluator.
 */
const SCRIPT_COUNT = Math.min(COUNT, 50_000);

/**
 * Count for per-entry collection measurements. Entries are cheap (~30 bytes),
 * so a larger count gives a cleaner signal; the loop runs inside the evaluator
 * (one host call) so it stays fast.
 */
const ENTRY_COUNT = Math.min(COUNT, 200_000);

/**
 * Measure the retained cost of a value produced by an interpreted expression.
 *
 * Runs `for (var i = 0; i < count; i++) collect(<expr>);` and stashes each
 * produced value in a pre-sized host array via a native `collect` binding, so
 * only retained heap is counted. `setup` runs once *before* the baseline, so
 * anything shared by every item (e.g. a common proxy target/handler, the
 * enclosing scope, the parsed AST) is charged to the baseline rather than to
 * the per-item figure. The result is therefore the marginal cost of one
 * instance, sharing everything the setup created.
 */
function bytesPerScriptItem(setup: string, expr: string, count = SCRIPT_COUNT): number {
  const realm = StaticJsRealm();
  const holder: unknown[] = Array.from({ length: count }).fill(null);
  let idx = 0;
  realm.global.defineOwnPropertySync("collect", {
    value: realm.types.function("collect", function* (v) {
      holder[idx++] = v;
      return realm.types.undefined;
    }),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  if (setup) {
    realm.evaluateScriptSync(setup);
  }
  forceGc();
  const before = heapUsed();

  realm.evaluateScriptSync(`for (var __i = 0; __i < ${count}; __i++) { collect(${expr}); }`);

  forceGc();
  const after = heapUsed();
  if (idx !== count) {
    throw new Error(`collect filled ${idx}/${count}`);
  }
  const per = (after - before) / count;
  holder.length = 0;
  return per;
}

/**
 * Measure the marginal cost of one Map/Set entry by filling a single container
 * inside an interpreted loop. Entries are added *inside* the script (one host
 * call) rather than via N host `setValueSync`/`addValueSync` calls — the latter
 * retains ~96 bytes of per-call evaluator state per call, which would swamp the
 * ~30-byte entry. Keys are distinct SMI numbers and the Map value is a shared
 * `null`, so the figure is the bare native hash-table slot, independent of key
 * or value content (those are accounted separately).
 */
function bytesPerCollectionEntry(kind: "map" | "set", count = COUNT, trials = TRIALS): number {
  const samples: number[] = [];
  const ctor = kind === "map" ? "Map" : "Set";
  const add = kind === "map" ? "globalThis.c.set(i, null);" : "globalThis.c.add(i);";

  for (let t = 0; t < trials; t++) {
    const realm = StaticJsRealm();
    realm.evaluateScriptSync(`globalThis.c = new ${ctor}();`);
    forceGc();
    const before = heapUsed();
    realm.evaluateScriptSync(`for (var i = 0; i < ${count}; i++) { ${add} }`);
    forceGc();
    const after = heapUsed();
    samples.push((after - before) / count);
  }

  return median(samples);
}

// --------------------------------------------------------------------------
// AST retention measurement (StaticJsAstFunction)
// --------------------------------------------------------------------------

/**
 * Count of retained function ASTs per measurement. Each parse produces an
 * independent (unshared) tree, so this is kept small — a single dense tree can
 * run to hundreds of KB.
 */
const AST_COUNT = Math.min(COUNT, 1_500);
const AST_TRIALS = Math.min(TRIALS, 2);

/**
 * Parse `source` with the *exact* options the interpreter uses (see
 * `babelParserOptions` — notably `ranges: true`, which adds a `[start,end]`
 * array to every node on top of the default `loc`/`start`/`end`) and return the
 * top-level function node.
 *
 * This is the node a {@link StaticJsAstFunction} stows in `this._node` and
 * retains for its whole lifetime. We measure the babel tree directly rather than
 * constructing a StaticJsAstFunction so the figure is the pure AST cost, free of
 * the wrapper object / own-property overhead already profiled above.
 */
function parseFunctionNode(source: string): Node {
  const file = parseAst(source, { ...babelParserOptions, sourceType: "script" });
  const node = file.program.body[0];
  if (node == null || node.type !== "FunctionDeclaration") {
    throw new Error(`Expected a FunctionDeclaration, got ${node?.type}`);
  }
  // Drop the reference to the enclosing File/Program so only the function
  // subtree (what StaticJsAstFunction actually holds) is retained.
  return node;
}

/**
 * Builders for *worst-case-dense* function bodies: source that packs the maximum
 * number of AST nodes per source character (~1 node/char is the ceiling, since
 * every node needs at least one token). Each builder returns source whose total
 * length is approximately `target` chars. The body is what dominates; the
 * `function f(){…}` wrapper is a fixed ~14-char tax folded into the fit's base.
 *
 * The dominant per-node cost is the fixed `loc`/`range`/Position overhead that
 * every node carries regardless of type, so the densest-in-nodes pattern wins
 * even when its node *type* is the lightest (empty statements).
 */
const astBodyBuilders: Record<string, (target: number) => string> = {
  // `;;;…` — one EmptyStatement per char; the densest pattern by node count.
  "empty statements": (target) => `function f(){${";".repeat(Math.max(1, target - 14))}}`,
  // `!!!…x` — one UnaryExpression per char.
  "unary chain": (target) => `function f(){${"!".repeat(Math.max(1, target - 15))}x}`,
  // `x.a.a.a…` — a MemberExpression + Identifier per two chars (heavier nodes).
  "member chain": (target) => `function f(){x${".a".repeat(Math.max(1, (target - 15) >> 1))}}`,
  // `x+x+x…` — a BinaryExpression + Identifier per two chars.
  "binary chain": (target) => `function f(){x${"+x".repeat(Math.max(1, (target - 15) >> 1))}}`,
};

/** Source lengths sampled for the linear fit of AST bytes vs. source chars. */
const AST_SIZES = [128, 512, 2048];

/**
 * Fit `retained AST bytes = base + perChar * sourceChars` for one dense pattern.
 * The x-axis is the function node's own source span (`end - start`), which is
 * exactly the `sourceText.length` the interpreter charges for — so `perChar` is
 * directly comparable to the current per-char source-text weight.
 */
function fitAstPattern(build: (target: number) => string): LinearFit {
  return fitLinear(
    AST_SIZES.map((target) => {
      const source = build(target);
      const sourceChars = source.length;
      return {
        size: sourceChars,
        bytes: bytesPerItem(() => parseFunctionNode(source), AST_COUNT, AST_TRIALS),
      };
    }),
  );
}

// --------------------------------------------------------------------------
// Helpers for building distinct keys / strings of a fixed length
// --------------------------------------------------------------------------

/**
 * Build a FLAT, one-byte (latin1) string of exactly `length` chars that is
 * distinct per `i`, so V8 never deduplicates it and property keys never collide.
 *
 * Flatness matters: builders that use `+`, `repeat`, or `padEnd` to reach the
 * target length produce V8 ConsString ropes, whose char data is shared/undercounted
 * and so badly skew per-char measurements. Going through a Buffer guarantees a
 * single contiguous SeqOneByteString (16-byte header + 1 byte/char), which is the
 * representation the interpreter actually holds for source-literal strings.
 *
 * Each `i` is written as `length` base-90 digits (least significant first), giving
 * a unique fixed-length encoding as long as `i < 90 ** length`.
 */
function flatString(length: number, i: number): string {
  if (length === 0) {
    return "";
  }
  const buf = Buffer.allocUnsafe(length);
  let n = i;
  for (let p = 0; p < length; p++) {
    buf[p] = 33 + (n % 90); // printable ASCII '!'..'z'
    n = Math.floor(n / 90);
  }
  if (n > 0) {
    throw new Error(
      `Cannot encode index ${i} distinctly in ${length} chars; use a larger length or smaller COUNT.`,
    );
  }
  return buf.toString("latin1");
}

// --------------------------------------------------------------------------
// Reporting
// --------------------------------------------------------------------------

function fmtBytes(n: number): string {
  return `${n.toFixed(1).padStart(9)} bytes`;
}

function reportFixed(label: string, bytes: number): void {
  console.log(`  ${label.padEnd(28)} ${fmtBytes(bytes)}`);
}

function reportLinear(label: string, unit: string, fit: LinearFit): void {
  console.log(
    `  ${label.padEnd(28)} ${fmtBytes(fit.base)} base + ${fit.perUnit.toFixed(2)} bytes/${unit}`,
  );
  for (const { size, bytes } of fit.samples) {
    console.log(`      ${`@ ${size}`.padEnd(12)} ${fmtBytes(bytes)}`);
  }
}

// --------------------------------------------------------------------------
// Profile
// --------------------------------------------------------------------------

function main(): void {
  const realm = StaticJsRealm();
  const { types } = realm;

  console.log(`StaticJs memory profile (count=${COUNT.toLocaleString()}, trials=${TRIALS})\n`);

  console.log("Scalars (singletons are shared; ~0 marginal cost is expected):");
  reportFixed(
    "null",
    bytesPerItem(() => types.null),
  );
  reportFixed(
    "undefined",
    bytesPerItem(() => types.undefined),
  );
  reportFixed(
    "boolean",
    bytesPerItem((i) => types.boolean(i % 2 === 0)),
  );
  reportFixed(
    "number",
    bytesPerItem((i) => types.number(i)),
  );
  reportFixed(
    "symbol",
    bytesPerItem((i) => types.symbol(`s${i}`), HEAVY_COUNT),
  );
  console.log();

  console.log("Strings (cost scales with length):");
  reportLinear(
    "string",
    "char",
    fitLinear(
      [0, 8, 32, 128, 512].map((len) => ({
        size: len,
        bytes: bytesPerItem((i) => types.string(flatString(len, i))),
      })),
    ),
  );
  console.log();

  console.log("Objects:");
  reportFixed(
    "empty object",
    bytesPerItem(() => types.object()),
  );
  console.log();

  console.log("Property keys (marginal cost of one own property, key storage included):");
  reportLinear(
    "string-key property",
    "key-char",
    fitLinear(
      [4, 8, 16, 32].map((len) => ({
        size: len,
        bytes: bytesPerProperty(realm, (i) => flatString(len, i)),
      })),
    ),
  );
  reportFixed(
    "symbol-key property",
    bytesPerProperty(realm, (i) => types.symbol(`k${i}`), HEAVY_COUNT),
  );
  console.log();

  console.log(
    `Composite types (built via the interpreter, count=${SCRIPT_COUNT.toLocaleString()}):`,
  );
  // Proxy: target & handler are shared by setup, so this is the wrapper only.
  // (StaticJsProxyImpl is not an ordinary object; it does NOT carry the ~655 base.)
  reportFixed(
    "proxy (wrapper only)",
    bytesPerScriptItem("var t = {}; var h = {};", "new Proxy(t, h)"),
  );
  // Functions share the parsed AST and enclosing scope via setup; the figure is
  // the function object + its name/length(/prototype) own properties. A declaration
  // is a constructor, so it also owns a fresh .prototype object; an arrow is not.
  // Neither retains a per-call StaticJsFunctionEnvironmentRecord — that is allocated
  // per invocation, not per function instance.
  reportFixed("ast function (constructable)", bytesPerScriptItem("", "function () {}"));
  reportFixed("ast arrow (non-constructable)", bytesPerScriptItem("", "() => {}"));
  console.log();

  console.log("Collections (ordinary object base + native backing store):");
  // Empty container total; subtract the ~655 object base for the native overhead.
  // Map keeps TWO native backing maps (a value store keyed by the StaticJsValue
  // wrapper plus an identity map), so its empty cost is ~2x a Set's native overhead.
  reportFixed("empty Map (total)", bytesPerScriptItem("", "new Map()"));
  reportFixed("empty Set (total)", bytesPerScriptItem("", "new Set()"));
  // Map entry = TWO native hash-table slots (~82) PLUS the retained key wrapper —
  // the Map now keeps the passed StaticJsValue key alive instead of unwrapping it,
  // so a number-keyed entry also retains a ~40-byte StaticJsNumber (~122 total).
  // The key wrapper and value are charged separately via key.mark()/value.mark(),
  // so the per-entry *overhead* constant is the ~82 structural part only.
  // Set still unwraps to a single native slot (SMI key, shared value).
  reportFixed("Map entry (number key, null value)", bytesPerCollectionEntry("map", ENTRY_COUNT));
  reportFixed("Set entry", bytesPerCollectionEntry("set", ENTRY_COUNT));
  console.log();

  console.log(
    `Retained AST cost (worst-case dense source, count=${AST_COUNT.toLocaleString()}):\n` +
      `  StaticJsAstFunction charges only its source text (~1 byte/char + 16 base), but it\n` +
      `  also retains the parsed babel node tree. These are the AST bytes on TOP of that.`,
  );
  let worstName = "";
  let worstFit: LinearFit | null = null;
  for (const [name, build] of Object.entries(astBodyBuilders)) {
    const fit = fitAstPattern(build);
    reportLinear(name, "src-char", fit);
    if (worstFit === null || fit.perUnit > worstFit.perUnit) {
      worstFit = fit;
      worstName = name;
    }
  }
  if (worstFit) {
    console.log(
      `\n  => worst case: "${worstName}" at ~${worstFit.perUnit.toFixed(0)} bytes per source-char\n` +
        `     (the current accounting under-counts a function's AST by this much per char;\n` +
        `      add it as an AST-node weight scaled by sourceText.length).`,
    );
  }
  console.log();

  console.log(
    "Ambient wrapper costs (bare instance, isolated from AST / source / own properties):\n" +
      "  Total retained cost of the wrapper object itself — what a per-type weight tag would\n" +
      "  charge in place of the ~655 ordinary-object base (cf. Map/Set/Proxy). Built directly\n" +
      "  rather than through the interpreter so no properties, AST, or source text are counted.",
  );
  // Reference point: a plain ordinary object (should track the StaticJsObject weight).
  const ordinaryBase = bytesPerItem(() => types.object());
  reportFixed("ordinary object (reference)", ordinaryBase);

  // Pending promise: ordinary object + state/result fields + two (empty) reaction
  // arrays. The result value, when settled, is a separate StaticJsValue charged on
  // its own, so a pending promise is the ambient cost in isolation.
  const promiseAmbient = bytesPerItem(() => new StaticJsPromiseImpl(realm));
  reportFixed("promise (pending)", promiseAmbient);

  // AST function: ordinary object + the instance's env/node/params/flags fields. The
  // node is shared across all instances and sourceText is empty, so neither the AST
  // (StaticJsAstFunctionNode weight) nor the source text (RawStringCharacter) is counted.
  const fnNode = parseFunctionNode("function f(){}") as StaticJsAstFunctionNode;
  const astFnAmbient = bytesPerItem(
    () =>
      new StaticJsAstFunction(realm, fnNode, "", {
        thisMode: "non-lexical-this",
        strict: false,
        env: realm.globalEnv,
        scriptOrModule: null,
      }),
  );
  reportFixed("ast function (no props)", astFnAmbient);

  // A pending promise accumulates ReactionRecords ({ capability, handler, type }) as
  // `.then()` is called. The capability's promise/resolve/reject and the handler are
  // each markable on their own; this is the bare record + array-slot overhead, measured
  // with shared capability/handler refs. One `.then()` pushes a fulfill + reject pair.
  const sharedCapability = { promise: {}, resolve: {}, reject: {} };
  const sharedHandler = {};
  const reactionRecord = bytesPerItem(() => ({
    capability: sharedCapability,
    handler: sharedHandler,
    type: "fulfill",
  }));
  reportFixed("promise reaction record", reactionRecord);

  console.log(
    `\n  => promise wrapper:  ~${promiseAmbient.toFixed(0)} bytes ` +
      `(~${(promiseAmbient - ordinaryBase).toFixed(0)} over a plain object)\n` +
      `     ast function:     ~${astFnAmbient.toFixed(0)} bytes ` +
      `(~${(astFnAmbient - ordinaryBase).toFixed(0)} over a plain object)\n` +
      `     reaction record:  ~${reactionRecord.toFixed(0)} bytes/record ` +
      `(~${(reactionRecord * 2).toFixed(0)} per .then()).`,
  );
}

main();
