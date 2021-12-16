import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";

export class ExpressionStatementNode extends StatementNode {
    public expression: ExpressionNode;

    constructor(expression: ExpressionNode) {
        super();
        this.expression = expression;
    }
}
