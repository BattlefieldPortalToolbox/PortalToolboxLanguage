import { ExpressionNode } from "./ExpressionNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

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
    public operator: BinaryOperator;
    public right: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.left, this.right];
    }

    constructor(left: ExpressionNode, operator: BinaryOperator, right: ExpressionNode) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBinaryExpression(this);
    }
}
