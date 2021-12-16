import { ExpressionNode } from "./ExpressionNode";

export class AwaitExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;

    constructor(expression: ExpressionNode) {
        super();
        this.expression = expression;
    }
}
