import type {
  StaticJsPropertyKey,
  StaticJsRealm as IStaticJsRealm,
  StaticJsValue,
} from "./src/index.js";

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
import { StaticJsRealm } from "./src/index.js";

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
  const holder: unknown[] = new Array(count).fill(null);

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
}

main();
