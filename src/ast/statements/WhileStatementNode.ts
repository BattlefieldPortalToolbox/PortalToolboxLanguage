import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";

export class WhileStatementNode extends StatementNode {
    public condition: ExpressionNode;
    public statement: StatementNode;

    constructor(condition: ExpressionNode, statement: StatementNode) {
        super();
        this.condition = condition;
        this.statement = statement;
    }
}
