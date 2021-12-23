import { TypeExpressionNode } from "./TypeExpressionNode";
import type { NumberLiteralNode } from "../literals";
import type { NodeVisitor } from "../NodeVisitor";
import type { Node } from "../Node";

export class NumberTypeExpressionNode extends TypeExpressionNode {
    public literal: NumberLiteralNode;

    override get children(): readonly Node[] {
        return [this.literal];
    }

    constructor(literal: NumberLiteralNode) {
        super();
        this.literal = literal;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitNumberTypeExpression(this);
    }
}
