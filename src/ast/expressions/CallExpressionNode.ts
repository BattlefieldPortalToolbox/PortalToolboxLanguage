import { ExpressionNode } from "./ExpressionNode";
import type { CallArgumentsNode } from "../CallArgumentsNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class CallExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public arguments: CallArgumentsNode;

    override get children(): readonly Node[] {
        return [this.expression, this.arguments];
    }

    constructor(expression: ExpressionNode, callArguments: CallArgumentsNode) {
        super();
        this.expression = expression;
        this.arguments = callArguments;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitCallExpression(this);
    }
}
