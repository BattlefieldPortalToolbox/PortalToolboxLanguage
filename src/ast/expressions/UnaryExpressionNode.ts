import { ExpressionNode } from "./ExpressionNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export enum UnaryOperator {
    Negative = "-",
    Not = "!"
}

export class UnaryExpressionNode extends ExpressionNode {
    public operator: UnaryOperator;
    public expression: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.expression];
    }

    constructor(operator: UnaryOperator, expression: ExpressionNode) {
        super();
        this.operator = operator;
        this.expression = expression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitUnaryExpression(this);
    }
}
