import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class IndexAssignmentStatementNode extends StatementNode {
    public containerExpression: ExpressionNode;
    public indexExpression: ExpressionNode;
    public expression: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.containerExpression, this.indexExpression, this.expression];
    }

    constructor(containerExpression: ExpressionNode, indexExpression: ExpressionNode, expression: ExpressionNode) {
        super();
        this.containerExpression = containerExpression;
        this.indexExpression = indexExpression;
        this.expression = expression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitIndexAssignmentStatement(this);
    }
}
