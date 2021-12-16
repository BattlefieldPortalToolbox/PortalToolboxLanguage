import { StatementNode } from "./StatementNode";
import type { IdentifierNode } from "../IdentifierNode";
import type { ExpressionNode } from "../expressions";

export class IdentifierAssignmentStatementNode extends StatementNode {
    public identifier: IdentifierNode;
    public expression: ExpressionNode;

    constructor(identifier: IdentifierNode, expression: ExpressionNode) {
        super();
        this.identifier = identifier;
        this.expression = expression;
    }
}
