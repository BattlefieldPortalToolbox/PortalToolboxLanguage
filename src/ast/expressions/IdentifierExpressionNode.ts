import { ExpressionNode } from "./ExpressionNode";
import type { IdentifierNode } from "../IdentifierNode";

export class IdentifierExpressionNode extends ExpressionNode {
    public identifier: IdentifierNode;

    constructor(identifier: IdentifierNode) {
        super();
        this.identifier = identifier;
    }
}
