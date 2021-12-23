import { ExpressionNode } from "./ExpressionNode";
import type { LiteralNode } from "../literals";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class LiteralExpressionNode extends ExpressionNode {
    public literal: LiteralNode;

    override get children(): readonly Node[] {
        return [this.literal];
    }

    constructor(literal: LiteralNode) {
        super();
        this.literal = literal;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitLiteralExpression(this);
    }
}
