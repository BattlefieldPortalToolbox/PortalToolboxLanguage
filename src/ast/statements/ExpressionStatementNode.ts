import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class ExpressionStatementNode extends StatementNode {
    public expression: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.expression];
    }

    constructor(expression: ExpressionNode) {
        super();
        this.expression = expression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitExpressionStatement(this);
    }
}
