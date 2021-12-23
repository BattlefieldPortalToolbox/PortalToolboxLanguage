import { Node } from "./Node";
import type { ExpressionNode } from "./expressions";
import type { NodeVisitor } from "./NodeVisitor";

export class CallArgumentsNode extends Node {
    public expressions: ExpressionNode[];

    override get children(): readonly Node[] {
        return this.expressions;
    }

    constructor(expressions: ExpressionNode[]) {
        super();
        this.expressions = expressions;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitCallArguments(this);
    }
}
