import { ExpressionNode } from "./ExpressionNode";
import type { TypeExpressionNode } from "../type-expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class CastExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public typeExpression: TypeExpressionNode;

    override get children(): readonly Node[] {
        return [this.expression, this.typeExpression];
    }

    constructor(expression: ExpressionNode, typeExpression: TypeExpressionNode) {
        super();
        this.expression = expression;
        this.typeExpression = typeExpression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitCastExpression(this);
    }
}
