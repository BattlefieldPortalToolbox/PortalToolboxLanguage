import { ExpressionNode } from "./ExpressionNode";

export class TernaryExpressionNode extends ExpressionNode {
    public condition: ExpressionNode;
    public ifTrue: ExpressionNode;
    public ifFalse: ExpressionNode;

    constructor(condition: ExpressionNode, ifTrue: ExpressionNode, ifFalse: ExpressionNode) {
        super();
        this.condition = condition;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }
}
