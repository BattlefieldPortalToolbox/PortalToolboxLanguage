import { TypeExpressionNode } from "./TypeExpressionNode";
import type { StringLiteralNode } from "../literals";
import type { NodeVisitor } from "../NodeVisitor";
import type { Node } from "../Node";

export class StringTypeExpressionNode extends TypeExpressionNode {
    public literal: StringLiteralNode;

    override get children(): readonly Node[] {
        return [this.literal];
    }

    constructor(literal: StringLiteralNode) {
        super();
        this.literal = literal;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitStringTypeExpression(this);
    }
}
