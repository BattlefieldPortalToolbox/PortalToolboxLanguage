import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";
import type { IdentifierNode } from "../IdentifierNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class MemberAssignmentStatementNode extends StatementNode {
    public containerExpression: ExpressionNode;
    public identifier: IdentifierNode;
    public expression: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.containerExpression, this.identifier, this.expression];
    }

    constructor(containerExpression: ExpressionNode, identifier: IdentifierNode, expression: ExpressionNode) {
        super();
        this.containerExpression = containerExpression;
        this.identifier = identifier;
        this.expression = expression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitMemberAssignmentStatement(this);
    }
}
