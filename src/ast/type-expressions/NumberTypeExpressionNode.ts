import { TypeExpressionNode } from "./TypeExpressionNode";
import type { NumberLiteralNode } from "../literals";

export class NumberTypeExpressionNode extends TypeExpressionNode {
    public literal: NumberLiteralNode;

    constructor(literal: NumberLiteralNode) {
        super();
        this.literal = literal;
    }
}
