import { Node } from "./Node";
import type { ExpressionNode } from "./expressions";

export class CallArgumentsNode extends Node {
    public expressions: ExpressionNode[];

    constructor(expressions: ExpressionNode[]) {
        super();
        this.expressions = expressions;
    }
}
