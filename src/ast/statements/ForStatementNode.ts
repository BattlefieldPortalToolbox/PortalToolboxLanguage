import { StatementNode } from "./StatementNode";
import type { IdentifierNode } from "../IdentifierNode";
import type { ExpressionNode } from "../expressions";

export class ForStatementNode extends StatementNode {
    public isVar: boolean;
    public identifier: IdentifierNode;
    public fromExpression: ExpressionNode | null;
    public toExpression: ExpressionNode;
    public byExpression: ExpressionNode | null;
    public statement: StatementNode;

    constructor(isVar: boolean, identifier: IdentifierNode, fromExpression: ExpressionNode | null, toExpression: ExpressionNode, byExpression: ExpressionNode | null, statement: StatementNode) {
        super();
        this.isVar = isVar;
        this.identifier = identifier;
        this.fromExpression = fromExpression;
        this.toExpression = toExpression;
        this.byExpression = byExpression;
        this.statement = statement;
    }
}
