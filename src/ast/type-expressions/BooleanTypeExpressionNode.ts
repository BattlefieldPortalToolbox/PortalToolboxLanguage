import { TypeExpressionNode } from "./TypeExpressionNode";
import type { BooleanLiteralNode } from "../literals";
import type { NodeVisitor } from "../NodeVisitor";
import type { Node } from "../Node";

export class BooleanTypeExpressionNode extends TypeExpressionNode {
    public literal: BooleanLiteralNode;

    override get children(): readonly Node[] {
        return [this.literal];
    }

    constructor(literal: BooleanLiteralNode) {
        super();
        this.literal = literal;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBooleanTypeExpression(this);
    }
}
