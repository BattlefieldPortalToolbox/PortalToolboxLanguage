import { ExpressionNode } from "./ExpressionNode";
import type { IdentifierNode } from "../IdentifierNode";

export class MemberExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public identifier: IdentifierNode;

    constructor(expression: ExpressionNode, identifier: IdentifierNode) {
        super();
        this.expression = expression;
        this.identifier = identifier;
    }
}
