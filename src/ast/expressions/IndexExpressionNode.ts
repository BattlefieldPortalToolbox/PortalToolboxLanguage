import { ExpressionNode } from "./ExpressionNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class IndexExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public indexExpression: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.expression, this.indexExpression];
    }

    constructor(expression: ExpressionNode, indexExpression: ExpressionNode) {
        super();
        this.expression = expression;
        this.indexExpression = indexExpression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitIndexExpression(this);
    }
}
