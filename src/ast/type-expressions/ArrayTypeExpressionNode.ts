import { TypeExpressionNode } from "./TypeExpressionNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class ArrayTypeExpressionNode extends TypeExpressionNode {
    public element: TypeExpressionNode;

    override get children(): readonly Node[] {
        return [this.element];
    }

    constructor(element: TypeExpressionNode) {
        super();
        this.element = element;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitArrayTypeExpression(this);
    }
}
