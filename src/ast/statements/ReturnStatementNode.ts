import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";

export class ReturnStatementNode extends StatementNode {
    public expression: ExpressionNode | null;

    constructor(expression: ExpressionNode | null) {
        super();
        this.expression = expression;
    }
}
