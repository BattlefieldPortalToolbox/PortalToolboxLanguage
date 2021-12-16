import { TypeExpressionNode } from "./TypeExpressionNode";
import type { StringLiteralNode } from "../literals";

export class StringTypeExpressionNode extends TypeExpressionNode {
    public literal: StringLiteralNode;

    constructor(literal: StringLiteralNode) {
        super();
        this.literal = literal;
    }
}
