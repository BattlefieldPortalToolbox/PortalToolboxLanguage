import { ExpressionNode } from "./ExpressionNode";
import type { LiteralNode } from "../literals";

export class LiteralExpressionNode extends ExpressionNode {
    public literal: LiteralNode;

    constructor(literal: LiteralNode) {
        super();
        this.literal = literal;
    }
}
