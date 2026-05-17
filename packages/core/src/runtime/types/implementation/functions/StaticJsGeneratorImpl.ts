import { isNode, Node } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";
import { SuspendCommand, SuspendContext } from "../../../../evaluator/commands/SuspendCommand.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
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
  private _generatorContext: SuspendContext<StaticJsIteratorResult>;

  constructor(
    generatorBody: Node | EvaluationGenerator,
    private readonly _generatorBrand: string | null,
    realm: StaticJsRealm,
    prototype?: StaticJsObject,
  ) {
    super(realm, prototype ?? realm.intrinsics["GeneratorPrototype"]);

    EvaluationContext.current.generator = this;

    function* closure(): EvaluationGenerator<StaticJsIteratorResult> {
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

      return {
        value: resultValue,
        done: true,
      };
    }

    this._generatorContext =
      SuspendCommand.createSuspendedContext<StaticJsIteratorResult>(closure());
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

  nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult> {
    return this._generatorResume(value ?? this.realm.types.undefined);
  }

  throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult> {
    return this._generatorResumeAbrupt(Completion.Throw(value));
  }

  returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult> {
    return this._generatorResumeAbrupt(Completion.Return(value ?? this.realm.types.undefined));
  }

  *generatorYield(iteratorResult: StaticJsIteratorResult): EvaluationGenerator<Completion> {
    const context = EvaluationContext.current;
    if (context.generator !== this) {
      throw new StaticJsEngineError("Generator yield called with wrong generator context.");
    }

    this._generatorState = "suspended-yield";

    this._generatorContext = SuspendCommand.createContext<StaticJsIteratorResult>();
    const resumptionValue = yield* SuspendCommand(this._generatorContext, iteratorResult);
    return resumptionValue;
  }

  private *_generatorResume(value: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult> {
    if (this._generatorState === "completed") {
      return {
        value: this.realm.types.undefined,
        done: true,
      };
    }

    this._generatorState = "executing";

    return yield* Q(
      SuspendCommand.runSuspendedContext(this._generatorContext, Completion.Normal(value)),
    );
  }

  private *_generatorResumeAbrupt(
    value: Completion.Abrupt,
  ): EvaluationGenerator<StaticJsIteratorResult> {
    let state = this._generatorState;
    if (state === "suspended-start") {
      this._generatorState = "completed";
      state = "completed";
    }

    if (state === "completed") {
      if (Completion.Return.is(value)) {
        return {
          value: Completion.value(value),
          done: true,
        };
      }

      throw value;
    }

    if (state !== "suspended-yield") {
      throw new StaticJsEngineError(
        "Generator can only be resumed if it is in suspended-start or suspended-yield state.",
      );
    }

    this._generatorState = "executing";

    return yield* Q(SuspendCommand.runSuspendedContext(this._generatorContext, value));
  }
}
