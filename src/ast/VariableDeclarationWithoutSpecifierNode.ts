import { Node } from "./Node";
import type { IdentifierNode } from "./IdentifierNode";
import type { TypeExpressionNode } from "./type-expressions";
import type { ExpressionNode } from "./expressions";
import type { NodeVisitor } from "./NodeVisitor";

export class VariableDeclarationWithoutSpecifierNode extends Node {
    public identifier: IdentifierNode;
    public typeExpression: TypeExpressionNode | null;
    public expression: ExpressionNode | null;

    override get children(): readonly Node[] {
        return [this.identifier, this.typeExpression, this.expression]
            .filter(c => c) as Node[];
    }

    constructor(identifier: IdentifierNode, typeExpression: TypeExpressionNode | null, expression: ExpressionNode | null) {
        super();
        this.identifier = identifier;
        this.typeExpression = typeExpression;
        this.expression = expression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitVariableDeclarationWithoutSpecifier(this);
    }
}
