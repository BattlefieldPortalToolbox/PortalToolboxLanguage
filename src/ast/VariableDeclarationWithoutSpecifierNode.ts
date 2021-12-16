import { Node } from "./Node";
import type { IdentifierNode } from "./IdentifierNode";
import type { TypeExpressionNode } from "./type-expressions";
import type { ExpressionNode } from "./expressions";

export class VariableDeclarationWithoutSpecifierNode extends Node {
    public identifier: IdentifierNode;
    public typeExpression: TypeExpressionNode | null;
    public expression: ExpressionNode | null;

    constructor(identifier: IdentifierNode, typeExpression: TypeExpressionNode | null, expression: ExpressionNode | null) {
        super();
        this.identifier = identifier;
        this.typeExpression = typeExpression;
        this.expression = expression;
    }
}
