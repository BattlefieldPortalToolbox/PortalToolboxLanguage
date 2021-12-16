import { ExpressionNode } from "./ExpressionNode";

export enum UnaryOperator {
    Negative = "-",
    Not = "!"
}

export class UnaryExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public operator: UnaryOperator;

    constructor(expression: ExpressionNode, operator: UnaryOperator) {
        super();
        this.expression = expression;
        this.operator = operator;
    }
}
