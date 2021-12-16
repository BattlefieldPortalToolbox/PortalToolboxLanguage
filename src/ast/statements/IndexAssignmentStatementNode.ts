import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";

export class IndexAssignmentStatementNode extends StatementNode {
    public containerExpression: ExpressionNode;
    public indexExpression: ExpressionNode;
    public expression: ExpressionNode;

    constructor(containerExpression: ExpressionNode, indexExpression: ExpressionNode, expression: ExpressionNode) {
        super();
        this.containerExpression = containerExpression;
        this.indexExpression = indexExpression;
        this.expression = expression;
    }
}
