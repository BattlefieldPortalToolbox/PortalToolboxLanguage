import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";
import type { IdentifierNode } from "../IdentifierNode";

export class MemberAssignmentStatementNode extends StatementNode {
    public containerExpression: ExpressionNode;
    public identifier: IdentifierNode;
    public expression: ExpressionNode;

    constructor(containerExpression: ExpressionNode, identifier: IdentifierNode, expression: ExpressionNode) {
        super();
        this.containerExpression = containerExpression;
        this.identifier = identifier;
        this.expression = expression;
    }
}
