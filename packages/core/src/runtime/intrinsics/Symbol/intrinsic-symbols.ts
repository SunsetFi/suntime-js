import typedEntries from "../../../internal/typed-entries.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsSymbolImpl from "../../types/implementation/StaticJsSymbolImpl.js";

import type { IntrinsicSymbols, Prototypes } from "../intrinsics.js";

const intrinsicSymbols: Record<keyof IntrinsicSymbols, symbol> = {
  // TODO: Implement in engine.
  asyncDispose: Symbol.asyncDispose,
  // TODO: Implement in engine.
  asyncIterator: Symbol.asyncIterator,
  // TODO: Implement in engine.
  dispose: Symbol.dispose,
  // TODO: Implement in engine.
  hasInstance: Symbol.hasInstance,
  // TODO: Implement in engine.
  isConcatSpreadable: Symbol.isConcatSpreadable,
  // TODO: Implement in engine.
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
  // TODO: Implement in engine.
  species: Symbol.species,
  // TODO: Implement in engine.
  split: Symbol.split,
  // TODO: Implement in engine.
  toPrimitive: Symbol.toPrimitive,
  // TODO: Implement in engine.
  toStringTag: Symbol.toStringTag,
  // TODO: Implement in engine.
  unscopables: Symbol.unscopables,
};

function createIntrinsicSymbols(
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

export default createIntrinsicSymbols;
