import { isNode, Node } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";
import { SuspendCommand, SuspendContext } from "../../../../evaluator/commands/SuspendCommand.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { createIteratorResultObject } from "../../../iterators/create-iterator-result-object.js";
import { iteratorComplete } from "../../../iterators/iterator-complete.js";
import { iteratorValue } from "../../../iterators/iterator-value.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsGenerator } from "../../StaticJsGenerator.js";
import { StaticJsIteratorResult } from "../../StaticJsIterator.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

export type GeneratorState = "suspended-start" | "suspended-yield" | "executing" | "completed";

export class StaticJsGeneratorImpl extends StaticJsOrdinaryObjectImpl implements StaticJsGenerator {
  private _generatorState: GeneratorState = "suspended-start";
  private _generatorContext: SuspendContext<StaticJsObject>;

  constructor(
    generatorBody: Node | EvaluationGenerator<Completion>,
    private readonly _generatorBrand: string | null,
    realm: StaticJsRealm,
    prototype?: StaticJsObject,
  ) {
    super(realm, prototype ?? realm.intrinsics["GeneratorPrototype"]);

    const genContext = EvaluationContext.current;
    genContext.generator = this;

    function* closure(): EvaluationGenerator<StaticJsObject> {
      const acGenContext = EvaluationContext.current;
      const { realm } = acGenContext;

      const acGenerator = acGenContext.generator;
      if (acGenerator instanceof StaticJsGeneratorImpl === false) {
        throw new StaticJsEngineError("Generator context does not have a valid generator.");
      }

      let result: Completion;
      if (isNode(generatorBody)) {
        result = yield* EvaluateNodeCommand(generatorBody);
      } else {
        result = yield* captureThrownCompletion(generatorBody);
      }

      EvaluationContext.pop();
      acGenerator._generatorState = "completed";

      let resultValue: StaticJsValue;
      if (Completion.Normal.is(result)) {
        resultValue = realm.types.undefined;
      } else if (Completion.Return.is(result)) {
        resultValue = Completion.value(result);
      } else {
        if (!Completion.Throw.is(result)) {
          throw new StaticJsEngineError("Expected a ThrowCompletion from generator body.");
        }

        throw result;
      }

      return yield* createIteratorResultObject(resultValue, true, realm);
    }

    this._generatorContext = SuspendCommand.createSuspendedContext<StaticJsObject>(
      closure(),
      genContext,
    );
  }

  get runtimeTypeOf() {
    return "generator" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Generator;
  }

  get generatorBrand() {
    return this._generatorBrand;
  }

  get generatorState() {
    return this._generatorState;
  }

  *nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult> {
    const result = yield* this.generatorResume(
      value ?? this.realm.types.undefined,
      this._generatorBrand,
    );
    const resultValue = yield* iteratorValue(result);
    const resultDone = yield* iteratorComplete(result);
    return {
      value: resultValue,
      done: resultDone,
    };
  }

  *returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult> {
    const result = yield* this.generatorResumeAbrupt(
      Completion.Return(value ?? this.realm.types.undefined),
      this._generatorBrand,
    );
    const resultValue = yield* iteratorValue(result);
    const resultDone = yield* iteratorComplete(result);
    return {
      value: resultValue,
      done: resultDone,
    };
  }

  *throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult> {
    const result = yield* this.generatorResumeAbrupt(Completion.Throw(value), this._generatorBrand);
    const resultValue = yield* iteratorValue(result);
    const resultDone = yield* iteratorComplete(result);
    return {
      value: resultValue,
      done: resultDone,
    };
  }

  *generatorYield(iteratorResult: StaticJsObject): EvaluationGenerator<Completion> {
    const context = EvaluationContext.current;
    if (context.generator !== this) {
      throw new StaticJsEngineError("Generator yield called with wrong generator context.");
    }

    this._generatorState = "suspended-yield";

    this._generatorContext = SuspendCommand.createContext<StaticJsObject>();
    const resumptionValue = yield* SuspendCommand(this._generatorContext, iteratorResult);
    return resumptionValue;
  }

  *generatorResume(
    value: StaticJsValue,
    generatorBrand: string | null,
  ): EvaluationGenerator<StaticJsObject> {
    yield* Q(this._generatorValidate("next", generatorBrand));

    if (this._generatorState === "completed") {
      return yield* createIteratorResultObject(this.realm.types.undefined, true, this.realm);
    }

    this._generatorState = "executing";
    const context = this._generatorContext;
    return yield* EvaluationContext.withRealm(this.realm, function* () {
      return yield* Q(SuspendCommand.runSuspendedContext(context, Completion.Normal(value)));
    });
  }

  *generatorResumeAbrupt(
    completion: Completion.Abrupt,
    generatorBrand: string | null,
  ): EvaluationGenerator<StaticJsObject> {
    yield* Q(
      this._generatorValidate(
        Completion.Return.is(completion) ? "return" : "throw",
        generatorBrand,
      ),
    );

    let state = this._generatorState;
    if (state === "suspended-start") {
      this._generatorState = "completed";
      state = "completed";
    }

    if (state === "completed") {
      if (Completion.Return.is(completion)) {
        return yield* createIteratorResultObject(Completion.value(completion), true, this.realm);
      }

      throw completion;
    }

    if (state !== "suspended-yield") {
      throw new StaticJsEngineError(
        "Generator can only be resumed if it is in suspended-start or suspended-yield state.",
      );
    }

    this._generatorState = "executing";
    const context = this._generatorContext;
    return yield* EvaluationContext.withRealm(this.realm, function* () {
      return yield* Q(SuspendCommand.runSuspendedContext(context, completion));
    });
  }

  private *_generatorValidate(
    func: string,
    generatorBrand: string | null,
  ): EvaluationGenerator<void> {
    if (generatorBrand !== undefined && generatorBrand !== this._generatorBrand) {
      throw Completion.Throw("TypeError", `${func} called on incompatible receiver`);
    }

    if (this._generatorState === "executing") {
      throw Completion.Throw("TypeError", "Generator is already running");
    }
  }
}
