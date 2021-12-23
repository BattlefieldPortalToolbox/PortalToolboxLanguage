import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class WhileStatementNode extends StatementNode {
    public condition: ExpressionNode;
    public statement: StatementNode;

    override get children(): readonly Node[] {
        return [this.condition, this.statement];
    }

    constructor(condition: ExpressionNode, statement: StatementNode) {
        super();
        this.condition = condition;
        this.statement = statement;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitWhileStatement(this);
    }
}
