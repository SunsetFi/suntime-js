import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import type { Intrinsics, IntrinsicSymbols } from "../../runtime/intrinsics/intrinsics.js";
import type { StaticJsSymbol } from "../StaticJsSymbol.js";

const wellKnownSymbols = new Map<symbol, keyof IntrinsicSymbols>([
  // [Symbol.asyncDispose, "asyncDispose"],
  [Symbol.asyncIterator, "asyncIterator"],
  // [Symbol.dispose, "dispose"],
  [Symbol.hasInstance, "hasInstance"],
  [Symbol.isConcatSpreadable, "isConcatSpreadable"],
  [Symbol.iterator, "iterator"],
  [Symbol.match, "match"],
  [Symbol.matchAll, "matchAll"],
  [Symbol.replace, "replace"],
  [Symbol.search, "search"],
  [Symbol.species, "species"],
  [Symbol.split, "split"],
  [Symbol.toPrimitive, "toPrimitive"],
  [Symbol.toStringTag, "toStringTag"],
  [Symbol.unscopables, "unscopables"],
]);

// if (Symbol.observable) {
//   wellKnownSymbols.set(Symbol.observable, "observable");
// }
// if (Symbol.dispose) {
//   wellKnownSymbols.set(Symbol.dispose, "dispose");
// }
// if (Symbol.asyncDispose) {
//   wellKnownSymbols.set(Symbol.asyncDispose, "asyncDispose");
// }
// if (Symbol.metadata) {
//   wellKnownSymbols.set(Symbol.metadata, "metadata");
// }

export function isWellKnownSymbol(symbol: symbol): boolean {
  return wellKnownSymbols.has(symbol);
}

export function getWellKnownSymbol(symbol: symbol, intrinsics: Intrinsics): StaticJsSymbol | null {
  const name = wellKnownSymbols.get(symbol);
  if (!name) return null;
  return intrinsics[`Symbol.${name}`];
}

export function getWellKnownSymbols(): [symbol, keyof IntrinsicSymbols][] {
  return Array.from(wellKnownSymbols.entries());
}

export function buildIntrinsicSymbolRecord(intrinsics: Intrinsics): IntrinsicSymbols {
  const result = {} as IntrinsicSymbols;

  // We need to make getters, as this gets both populated and accessed during the
  // intrinsic initialization.

  for (const key of wellKnownSymbols.values()) {
    Object.defineProperty(result, key, {
      get() {
        const value = intrinsics[`Symbol.${key}`];
        if (!value) {
          throw new StaticJsEngineError(
            `Intrinsic for well-known symbol ${key} was not populated when accessed.`,
          );
        }

        // Should probably set up so we redefine this to a data property here.
        // But that means making the original configurable.

        return value;
      },
      enumerable: true,
      configurable: false,
    });
  }
  return result;
}
