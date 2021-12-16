import { ExpressionNode } from "./ExpressionNode";
import type { CallArgumentsNode } from "../CallArgumentsNode";

export class CallExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public arguments: CallArgumentsNode;

    constructor(expression: ExpressionNode, callArguments: CallArgumentsNode) {
        super();
        this.expression = expression;
        this.arguments = callArguments;
    }
}
