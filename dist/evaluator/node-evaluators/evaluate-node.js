import variableDeclarationNodeEvaluator from "./VariableDeclaration.js";
import numericLiteralNodeEvaluator from "./NumericLiteral.js";
import stringLiteralNodeEvaluator from "./StringLiteral.js";
import nullLiteralNodeEvaluator from "./NullLiteral.js";
import booleanLiteralNodeEvaluator from "./BooleanLiteral.js";
import expressionStatementNodeEvaluator from "./ExpressionStatement.js";
import identifierNodeEvaluator from "./Identifier.js";
import unaryExpressionNodeEvaluator from "./UnaryExpression.js";
const nodeEvaluators = {
    VariableDeclaration: variableDeclarationNodeEvaluator,
    NumericLiteral: numericLiteralNodeEvaluator,
    StringLiteral: stringLiteralNodeEvaluator,
    NullLiteral: nullLiteralNodeEvaluator,
    BooleanLiteral: booleanLiteralNodeEvaluator,
    ExpressionStatement: expressionStatementNodeEvaluator,
    Identifier: identifierNodeEvaluator,
    UnaryExpression: unaryExpressionNodeEvaluator,
};
export function evaluateNode(node, scope) {
    const evaluator = nodeEvaluators[node.type];
    if (evaluator == null) {
        throw new Error(`Unexpected AST node type: ${node.type}`);
    }
    return evaluator(node, scope);
}
