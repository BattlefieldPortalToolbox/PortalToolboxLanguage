import { ExpressionNode } from "./ExpressionNode";
import type { TypeExpressionNode } from "../type-expressions";

export class CastExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public typeExpression: TypeExpressionNode;

    constructor(expression: ExpressionNode, typeExpression: TypeExpressionNode) {
        super();
        this.expression = expression;
        this.typeExpression = typeExpression;
    }
}
