import { ExpressionNode } from "./ExpressionNode";

export enum BinaryOperator {
    Multiply = "*",
    Divide = "/",

    Add = "+",
    Subtract = "-",

    LessThan = "<",
    LessThanOrEqual = "<=",
    GreaterThanOrEqual = ">=",
    GreaterThan = ">",

    Equal = "==",
    NotEqual = "!=",

    And = "&&",
    Or = "||",
}

export class BinaryExpressionNode extends ExpressionNode {
    public left: ExpressionNode;
    public right: ExpressionNode;
    public operator: BinaryOperator;

    constructor(left: ExpressionNode, right: ExpressionNode, operator: BinaryOperator) {
        super();
        this.left = left;
        this.right = right;
        this.operator = operator;
    }
}
