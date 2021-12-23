import { Node } from "../Node";
import type { IdentifierNode } from "../IdentifierNode";
import type { TypeExpressionNode } from "../type-expressions";
import type { NodeVisitor } from "../NodeVisitor";

export class ArgumentDeclarationNode extends Node {
    public identifier: IdentifierNode;
    public typeExpression: TypeExpressionNode | null;

    override get children(): readonly Node[] {
        return [this.identifier, this.typeExpression]
            .filter(c => c) as Node[];
    }

    constructor(identifier: IdentifierNode, typeExpression: TypeExpressionNode | null) {
        super();
        this.identifier = identifier;
        this.typeExpression = typeExpression;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitArgumentDeclaration(this);
    }
}
