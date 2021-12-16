import { TypeExpressionNode } from "./TypeExpressionNode";
import type { IdentifierNode } from "../IdentifierNode";

export class IdentifierTypeExpressionNode extends TypeExpressionNode {
    public identifier: IdentifierNode;

    constructor(identifier: IdentifierNode) {
        super();
        this.identifier = identifier;
    }
}
