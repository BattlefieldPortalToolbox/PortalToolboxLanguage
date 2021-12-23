import { StatementNode } from "./StatementNode";
import type { ExpressionNode } from "../expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class IfStatementNode extends StatementNode {
    public condition: ExpressionNode;
    public ifTrue: StatementNode;
    public ifFalse: StatementNode | null;

    override get children(): readonly Node[] {
        return [this.condition, this.ifTrue, this.ifFalse]
            .filter(c => c) as Node[];
    }

    constructor(condition: ExpressionNode, ifTrue: StatementNode, ifFalse: StatementNode | null) {
        super();
        this.condition = condition;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitIfStatement(this);
    }
}
