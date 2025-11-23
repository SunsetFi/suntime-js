import typedEntries from "../../internal/typed-entries.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsSymbolImpl from "../types/implementation/StaticJsSymbolImpl.js";

import type { IntrinsicSymbols, Prototypes } from "./intrinsics.js";

const intrinsicSymbols: Record<keyof IntrinsicSymbols, symbol> = {
  // TODO: Implement in engine.
  asyncDispose: Symbol.asyncDispose,

  // TODO: Implement in engine.
  asyncIterator: Symbol.asyncIterator,

  // TODO: Implement in engine.
  dispose: Symbol.dispose,

  hasInstance: Symbol.hasInstance,

  isConcatSpreadable: Symbol.isConcatSpreadable,

  iterator: Symbol.iterator,

  // TODO: Implement in engine.
  match: Symbol.match,

  // TODO: Implement in engine.
  matchAll: Symbol.matchAll,

  // TODO: Implement in engine.
  observable: Symbol.observable,

  // TODO: Implement in engine.
  replace: Symbol.replace,

  // TODO: Implement in engine.
  search: Symbol.search,

  species: Symbol.species,

  // TODO: Implement in engine.
  split: Symbol.split,

  toPrimitive: Symbol.toPrimitive,

  // TODO: Implement in engine.
  toStringTag: Symbol.toStringTag,

  // TODO: Implement in engine.
  unscopables: Symbol.unscopables,
};

export function createIntrinsicSymbols(
  realm: StaticJsRealm,
  prototypes: Prototypes,
): IntrinsicSymbols {
  const symbols: Partial<IntrinsicSymbols> = {};
  for (const [name, symbol] of typedEntries(intrinsicSymbols)) {
    const realmSymbol = new StaticJsSymbolImpl(
      realm,
      symbol,
      prototypes.symbolProto,
    );
    symbols[name] = realmSymbol;
  }
  return symbols as IntrinsicSymbols;
}
