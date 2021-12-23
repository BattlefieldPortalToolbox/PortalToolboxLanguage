import { TypeExpressionNode } from "./TypeExpressionNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class ParenthesisTypeExpressionNode extends TypeExpressionNode {
    public typeExpression: TypeExpressionNode;

    override get children(): readonly Node[] {
        return [this.typeExpression];
    }

    constructor(typeExpression: TypeExpressionNode) {
        super();
        this.typeExpression = typeExpression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitParenthesisTypeExpression(this);
    }
}
