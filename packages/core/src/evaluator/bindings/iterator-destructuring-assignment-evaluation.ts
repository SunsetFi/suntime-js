import type { Node, PatternLike } from "@babel/types";

import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";

import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { StaticJsIteratorRecord } from "../../runtime/iterators/StaticJsIteratorRecord.js";
import iteratorStepValue from "../../runtime/iterators/iterator-step-value.js";

import createDataPropertyOrThrow from "../../runtime/algorithms/create-data-property-or-throw.js";
import putValue from "../../runtime/algorithms/put-value.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import destructuringAssignmentEvaluation from "./destructuring-assignment-evaluation.js";

export type IteratorDestructuringAssignmentType = PatternLike | null;
export default function* iteratorDestructuringAssignmentEvaluation(
  node: IteratorDestructuringAssignmentType | IteratorDestructuringAssignmentType[],
  iteratorRecord: StaticJsIteratorRecord,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  if (Array.isArray(node)) {
    for (const element of node) {
      yield* iteratorDestructuringAssignmentEvaluation(element, iteratorRecord, context);
    }

    return;
  }

  if (node === null) {
    if (!iteratorRecord.done) {
      yield* iteratorStepValue(iteratorRecord, context.realm);
    }
    return;
  }

  let initializer: Node | null = null;
  if (node.type === "AssignmentPattern") {
    initializer = node.right;
    node = node.left;
  }

  let lRef: StaticJsReferenceRecord | null = null;
  let assignmentTarget: IteratorDestructuringAssignmentType;
  let v: StaticJsValue;
  if (node.type === "RestElement") {
    assignmentTarget = node.argument;
    if (assignmentTarget.type !== "ObjectPattern" && assignmentTarget.type !== "ArrayPattern") {
      lRef = yield* Q.ref(EvaluateNodeCommand(assignmentTarget, context));
    }

    const A = context.realm.types.array();

    let n = 0;
    while (true) {
      let next: StaticJsValue | null = null;
      if (!iteratorRecord.done) {
        next = yield* iteratorStepValue(iteratorRecord, context.realm);
      }
      if (!next) {
        break;
      }

      yield* createDataPropertyOrThrow(A, String(n), next, context.realm);
      n += 1;
    }

    v = A;
  } else {
    assignmentTarget = node;
    if (assignmentTarget.type !== "ObjectPattern" && assignmentTarget.type !== "ArrayPattern") {
      lRef = yield* Q.ref(EvaluateNodeCommand(assignmentTarget, context));
    }

    let value: StaticJsValue = context.realm.types.undefined;
    if (!iteratorRecord.done) {
      const next = yield* iteratorStepValue(iteratorRecord, context.realm);
      if (next) {
        value = next;
      }
    }

    if (initializer && isStaticJsUndefined(value)) {
      let initializerContext = context;
      if (assignmentTarget.type === "Identifier") {
        initializerContext = context.create({
          evaluationParameters: {
            "NamedEvaluation::name": assignmentTarget.name,
          },
        });
      }

      const defaultValue = yield* Q.val(
        EvaluateNodeCommand(initializer, initializerContext),
        context.realm,
      );

      v = defaultValue;
    } else {
      v = value;
    }
  }

  if (lRef) {
    yield* putValue(lRef, v, context.realm);
  } else {
    yield* destructuringAssignmentEvaluation(assignmentTarget, v, context);
  }
}
