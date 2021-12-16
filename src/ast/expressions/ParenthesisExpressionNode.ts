import { ExpressionNode } from "./ExpressionNode";

export class ParenthesisExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;

    constructor(expression: ExpressionNode) {
        super();
        this.expression = expression;
    }
}
