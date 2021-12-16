import { Node } from "../Node";
import type { IdentifierNode } from "../IdentifierNode";
import type { TypeExpressionNode } from "../type-expressions";

export class ArgumentDeclarationNode extends Node {
    public identifier: IdentifierNode;
    public typeExpression: TypeExpressionNode | null;

    constructor(identifier: IdentifierNode, typeExpression: TypeExpressionNode | null) {
        super();
        this.identifier = identifier;
        this.typeExpression = typeExpression;
    }
}
