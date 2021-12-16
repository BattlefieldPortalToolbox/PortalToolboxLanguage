import { ExpressionNode } from "./ExpressionNode";

export class IndexExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public indexExpression: ExpressionNode;

    constructor(expression: ExpressionNode, indexExpression: ExpressionNode) {
        super();
        this.expression = expression;
        this.indexExpression = indexExpression;
    }
}
