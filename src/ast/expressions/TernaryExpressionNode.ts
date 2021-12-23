import { ExpressionNode } from "./ExpressionNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class TernaryExpressionNode extends ExpressionNode {
    public condition: ExpressionNode;
    public ifTrue: ExpressionNode;
    public ifFalse: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.condition, this.ifTrue, this.ifFalse];
    }

    constructor(condition: ExpressionNode, ifTrue: ExpressionNode, ifFalse: ExpressionNode) {
        super();
        this.condition = condition;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitTernaryExpression(this);
    }
}
