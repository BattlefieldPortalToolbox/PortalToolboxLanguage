import { TypeExpressionNode } from "./TypeExpressionNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class UnionTypeExpressionNode extends TypeExpressionNode {
    public elements: TypeExpressionNode[];

    override get children(): readonly Node[] {
        return this.elements;
    }

    constructor(elements: TypeExpressionNode[]) {
        super();
        this.elements = elements;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitUnionTypeExpression(this);
    }
}
