import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../StaticJsObject.js";

export type HostBuiltinMap = ReadonlyMap<object, StaticJsObject>;

export function buildHostBuiltinMap(realm: StaticJsRealm): HostBuiltinMap {
  const i = realm.intrinsics;
  const map = new Map<object, StaticJsObject>();

  // Derived constructor references (not directly reachable as globals)
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor as Function;
  const GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor as Function;
  const AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {})
    .constructor as Function;

  // Prototype instances for deriving iterator/generator prototypes
  const generatorInstance = (function* () {})();
  const asyncGeneratorInstance = (async function* () {})();
  const arrayIterator = [][Symbol.iterator]();
  const stringIterator = ""[Symbol.iterator]();
  const setIterator = new Set()[Symbol.iterator]();
  const mapIterator = new Map()[Symbol.iterator]();

  // Constructors
  map.set(AggregateError, i["AggregateError"]);
  map.set(Array, i["Array"]);
  map.set(AsyncFunction, i["AsyncFunction"]);
  map.set(AsyncGeneratorFunction, i["AsyncGeneratorFunction"]);
  map.set(Boolean, i["Boolean"]);
  map.set(Error, i["Error"]);
  map.set(EvalError, i["EvalError"]);
  map.set(Function, i["Function"]);
  map.set(GeneratorFunction, i["GeneratorFunction"]);
  map.set(Iterator, i["Iterator"]);
  map.set(Map, i["Map"]);
  map.set(Number, i["Number"]);
  map.set(Object, i["Object"]);
  map.set(Promise, i["Promise"]);
  map.set(Proxy, i["Proxy"]);
  map.set(RangeError, i["RangeError"]);
  map.set(ReferenceError, i["ReferenceError"]);
  map.set(Set, i["Set"]);
  map.set(String, i["String"]);
  map.set(Symbol, i["Symbol"]);
  map.set(SyntaxError, i["SyntaxError"]);
  map.set(TypeError, i["TypeError"]);
  map.set(URIError, i["URIError"]);

  // Non-constructor function globals
  map.set(eval, i["eval"]);
  map.set(isFinite, i["isFinite"]);
  map.set(isNaN, i["isNaN"]);
  map.set(parseFloat, i["parseFloat"]);
  map.set(parseInt, i["parseInt"]);

  // Plain-object globals
  map.set(Math, i["Math"]);
  map.set(Reflect, i["Reflect"]);

  // Prototypes — error hierarchy
  map.set(Error.prototype, i["Error.prototype"]);
  map.set(EvalError.prototype, i["EvalError.prototype"]);
  map.set(RangeError.prototype, i["RangeError.prototype"]);
  map.set(ReferenceError.prototype, i["ReferenceError.prototype"]);
  map.set(SyntaxError.prototype, i["SyntaxError.prototype"]);
  map.set(TypeError.prototype, i["TypeError.prototype"]);
  map.set(URIError.prototype, i["URIError.prototype"]);

  // Prototypes — standard constructors
  map.set(Array.prototype, i["Array.prototype"]);
  map.set(Boolean.prototype, i["Boolean.prototype"]);
  map.set(Function.prototype, i["Function.prototype"]);
  map.set(Map.prototype, i["Map.prototype"]);
  map.set(Number.prototype, i["Number.prototype"]);
  map.set(Object.prototype, i["Object.prototype"]);
  map.set(Promise.prototype, i["Promise.prototype"]);
  map.set(Set.prototype, i["Set.prototype"]);
  map.set(String.prototype, i["String.prototype"]);
  map.set(Symbol.prototype, i["Symbol.prototype"]);

  // Prototypes — async/generator families
  map.set(Object.getPrototypeOf(AsyncFunction), i["AsyncFunction.prototype"]);
  map.set(Object.getPrototypeOf(AsyncGeneratorFunction), i["AsyncGeneratorFunction.prototype"]);
  map.set(Object.getPrototypeOf(asyncGeneratorInstance), i["AsyncGeneratorPrototype"]);
  map.set(
    Object.getPrototypeOf(Object.getPrototypeOf(asyncGeneratorInstance)),
    i["AsyncIteratorPrototype"],
  );
  map.set(Object.getPrototypeOf(GeneratorFunction), i["GeneratorFunction.prototype"]);
  map.set(Object.getPrototypeOf(generatorInstance), i["GeneratorPrototype"]);

  // Prototypes — Iterator and helpers
  map.set(Iterator.prototype, i["Iterator.prototype"]);
  map.set(Object.getPrototypeOf([].values().map((x) => x)), i["IteratorHelperPrototype"]);

  // Prototypes — iterator instances
  map.set(Object.getPrototypeOf(arrayIterator), i["ArrayIteratorPrototype"]);
  map.set(Object.getPrototypeOf(mapIterator), i["MapIteratorPrototype"]);
  map.set(Object.getPrototypeOf(setIterator), i["SetIteratorPrototype"]);
  map.set(Object.getPrototypeOf(stringIterator), i["StringIteratorPrototype"]);

  return map;
}
