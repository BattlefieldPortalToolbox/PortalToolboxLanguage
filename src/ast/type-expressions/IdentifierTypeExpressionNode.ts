import { TypeExpressionNode } from "./TypeExpressionNode";
import type { IdentifierNode } from "../IdentifierNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class IdentifierTypeExpressionNode extends TypeExpressionNode {
    public identifier: IdentifierNode;

    override get children(): readonly Node[] {
        return [this.identifier];
    }

    constructor(identifier: IdentifierNode) {
        super();
        this.identifier = identifier;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitIdentifierTypeExpression(this);
    }
}
