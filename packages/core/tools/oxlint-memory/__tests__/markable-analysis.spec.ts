import { describe, expect, it } from "vitest";

import { analyze } from "./program-fixture.js";

const names = (vs: { bindingName: string }[]) => vs.map((v) => v.bindingName).sort();

describe("analyzeSourceFile", () => {
  it("flags a direct markable captured and not in mark", async () => {
    const vs = await analyze(`
      declare const stack: StaticJsValue;
      new StaticJsNativeFunctionImpl(realm, "", function* () { return stack; });
    `);
    expect(names(vs)).toEqual(["stack"]);
  });

  it("passes when the captured markable is listed directly in mark", async () => {
    const vs = await analyze(`
      declare const stack: StaticJsValue;
      new StaticJsNativeFunctionImpl(realm, "", function* () { return stack; }, { mark: [stack] });
    `);
    expect(vs).toHaveLength(0);
  });

  it("passes when laundered via a const containerMarkable listed in mark (setErrorStack shape)", async () => {
    const vs = await analyze(`
      declare const stack: StaticJsValue;
      const markable = containerMarkable(stack);
      new StaticJsNativeFunctionImpl(
        realm, "",
        function* () { return stack; },
        { mark: [markable] },
      );
    `);
    expect(vs).toHaveLength(0);
  });

  it("passes when laundered via an inline containerMarkable element", async () => {
    const vs = await analyze(`
      declare const stack: StaticJsValue;
      new StaticJsNativeFunctionImpl(realm, "", function* () { return stack; }, { mark: [containerMarkable(stack)] });
    `);
    expect(vs).toHaveLength(0);
  });

  it("flags a captured markable container not covered", async () => {
    const vs = await analyze(`
      declare const arr: StaticJsValue[];
      new StaticJsNativeFunctionImpl(realm, "", function* () { return arr[0]; });
    `);
    expect(names(vs)).toEqual(["arr"]);
  });

  it("passes when a container is laundered via compoundMarkable(arr) in mark", async () => {
    const vs = await analyze(`
      declare const arr: StaticJsValue[];
      new StaticJsNativeFunctionImpl(realm, "", function* () { return arr[0]; }, { mark: [compoundMarkable(arr)] });
    `);
    expect(vs).toHaveLength(0);
  });

  it("passes when a Map is laundered via compoundMarkable([...m.values()]) in mark", async () => {
    const vs = await analyze(`
      declare const m: Map<unknown, StaticJsValue>;
      new StaticJsNativeFunctionImpl(realm, "", function* () { return m.size; }, { mark: [compoundMarkable([...m.values()])] });
    `);
    expect(vs).toHaveLength(0);
  });

  it("analyzes the construct callback too", async () => {
    const vs = await analyze(`
      declare const stack: StaticJsValue;
      new StaticJsNativeFunctionImpl(realm, "", function* () {}, {
        construct: function* () { return stack; },
      });
    `);
    expect(names(vs)).toEqual(["stack"]);
  });

  it("skips a new-expression whose mark is not an array literal (opaque)", async () => {
    const vs = await analyze(`
      declare const stack: StaticJsValue;
      declare const opaque: readonly StaticJsAllocation[];
      new StaticJsNativeFunctionImpl(realm, "", function* () { return stack; }, { mark: opaque });
    `);
    expect(vs).toHaveLength(0);
  });

  it("does not flag the callback's own parameters", async () => {
    const vs = await analyze(`
      new StaticJsNativeFunctionImpl(realm, "", function* (thisArg, a) { return a ?? thisArg; });
    `);
    expect(vs).toHaveLength(0);
  });

  it("does not flag non-markable captures (plain strings)", async () => {
    const vs = await analyze(`
      declare const label: string;
      new StaticJsNativeFunctionImpl(realm, "", function* () { return label as any; });
    `);
    expect(vs).toHaveLength(0);
  });

  it("flags obj captured in a setter-like callback (uniform rule)", async () => {
    const vs = await analyze(`
      declare const obj: StaticJsValue;
      new StaticJsNativeFunctionImpl(realm, "", function* () { return obj; });
    `);
    expect(names(vs)).toEqual(["obj"]);
  });

  it("attributes captures of a nested construction to the inner one only (covered inner → no outer violation)", async () => {
    const vs = await analyze(`
      declare const x: StaticJsValue;
      new StaticJsNativeFunctionImpl(realm, "", function* () {
        return new StaticJsNativeFunctionImpl(realm, "", function* () { return x; }, { mark: [x] });
      });
    `);
    expect(vs).toHaveLength(0);
  });

  it("reports a nested-construction capture exactly once (uncovered inner)", async () => {
    const vs = await analyze(`
      declare const x: StaticJsValue;
      new StaticJsNativeFunctionImpl(realm, "", function* () {
        return new StaticJsNativeFunctionImpl(realm, "", function* () { return x; });
      });
    `);
    expect(names(vs)).toEqual(["x"]);
  });

  it("does not flag StaticJsValue used only as a type annotation in the callback signature", async () => {
    const vs = await analyze(`
      new StaticJsNativeFunctionImpl(realm, "", function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        return thisArg;
      });
    `);
    expect(vs).toHaveLength(0);
  });

  // Follow-up A: union-typed markable capture
  it("flags a captured union-typed markable not in mark", async () => {
    const vs = await analyze(`
      interface A extends StaticJsAllocation { a: 1 }
      interface B extends StaticJsAllocation { b: 1 }
      declare const u: A | B;
      new StaticJsNativeFunctionImpl(realm, "", function* () { return u as any; });
    `);
    expect(names(vs)).toEqual(["u"]);
  });

  it("passes when value is laundered via containerMarkable(compoundMarkable(values)) in mark", async () => {
    const vs = await analyze(`
      declare const values: StaticJsValue[];
      const markable = containerMarkable(compoundMarkable(values));
      new StaticJsNativeFunctionImpl(realm, "", function* () { return values[0]; }, { mark: [markable] });
    `);
    expect(vs).toHaveLength(0);
  });

  it("still flags a markable captured only inside an ordinary nested helper closure", async () => {
    const vs = await analyze(`
      declare const y: StaticJsValue;
      new StaticJsNativeFunctionImpl(realm, "", function* () {
        const helper = () => y;
        return helper();
      });
    `);
    expect(names(vs)).toEqual(["y"]);
  });
});
