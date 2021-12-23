import { StatementNode } from "./StatementNode";
import type { IdentifierNode } from "../IdentifierNode";
import type { ExpressionNode } from "../expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class ForStatementNode extends StatementNode {
    public isVar: boolean;
    public identifier: IdentifierNode;
    public fromExpression: ExpressionNode | null;
    public toExpression: ExpressionNode;
    public byExpression: ExpressionNode | null;
    public statement: StatementNode;

    override get children(): readonly Node[] {
        return [this.identifier, this.fromExpression, this.toExpression, this.byExpression, this.statement]
            .filter(c => c) as Node[];
    }

    constructor(isVar: boolean, identifier: IdentifierNode, fromExpression: ExpressionNode | null, toExpression: ExpressionNode, byExpression: ExpressionNode | null, statement: StatementNode) {
        super();
        this.isVar = isVar;
        this.identifier = identifier;
        this.fromExpression = fromExpression;
        this.toExpression = toExpression;
        this.byExpression = byExpression;
        this.statement = statement;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitForStatement(this);
    }
}
