import { LiteralNode } from "./LiteralNode";
import type { ExpressionNode } from "../expressions";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class ArrayLiteralNode extends LiteralNode<ExpressionNode[]> {
    override get children(): readonly Node[] {
        return this.value;
    }

    constructor(expressions: ExpressionNode[]) {
        super(expressions);
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitArrayLiteral(this);
    }
}
