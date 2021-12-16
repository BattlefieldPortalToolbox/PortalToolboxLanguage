import { TypeExpressionNode } from "./TypeExpressionNode";
import type { BooleanLiteralNode } from "../literals";

export class BooleanTypeExpressionNode extends TypeExpressionNode {
    public literal: BooleanLiteralNode;

    constructor(literal: BooleanLiteralNode) {
        super();
        this.literal = literal;
    }
}
