import { ExpressionNode } from "./ExpressionNode";
import type { IdentifierNode } from "../IdentifierNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class MemberExpressionNode extends ExpressionNode {
    public expression: ExpressionNode;
    public identifier: IdentifierNode;

    override get children(): readonly Node[] {
        return [this.expression, this.identifier];
    }

    constructor(expression: ExpressionNode, identifier: IdentifierNode) {
        super();
        this.expression = expression;
        this.identifier = identifier;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitMemberExpression(this);
    }
}
