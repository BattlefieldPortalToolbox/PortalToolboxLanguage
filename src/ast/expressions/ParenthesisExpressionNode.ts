import { ExpressionNode } from "./ExpressionNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class ParenthesisExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.expression];
    }

    constructor(expression: ExpressionNode) {
        super();
        this.expression = expression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitParenthesisExpression(this);
    }
}
