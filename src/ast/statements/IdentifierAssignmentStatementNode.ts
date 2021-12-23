import { StatementNode } from "./StatementNode";
import type { IdentifierNode } from "../IdentifierNode";
import type { ExpressionNode } from "../expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class IdentifierAssignmentStatementNode extends StatementNode {
    public identifier: IdentifierNode;
    public expression: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.identifier, this.expression];
    }

    constructor(identifier: IdentifierNode, expression: ExpressionNode) {
        super();
        this.identifier = identifier;
        this.expression = expression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitIdentifierAssignmentStatement(this);
    }
}
