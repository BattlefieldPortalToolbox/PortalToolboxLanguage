import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class ReturnStatementNode extends StatementNode {
    public expression: ExpressionNode | null;

    override get children(): readonly Node[] {
        return this.expression ? [this.expression] : [];
    }

    constructor(expression: ExpressionNode | null) {
        super();
        this.expression = expression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitReturnStatement(this);
    }
}
