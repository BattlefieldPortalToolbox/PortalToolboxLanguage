import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";

export class IfStatementNode extends StatementNode {
    public condition: ExpressionNode;
    public ifTrue: StatementNode;
    public ifFalse: StatementNode | null;

    constructor(condition: ExpressionNode, ifTrue: StatementNode, ifFalse: StatementNode | null) {
        super();
        this.condition = condition;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }
}
