import { Node } from "../Node";
import type { IdentifierNode } from "../IdentifierNode";
import type { ArgumentsDeclarationNode } from "./ArgumentsDeclarationNode";
import type { TypeExpressionNode } from "../type-expressions";
import type { BodyNode } from "../body";
import type { NodeVisitor } from "../NodeVisitor";

export class SubroutineDefinitionNode extends Node {
    public isAsync: boolean;
    public identifier: IdentifierNode;
    public argumentsDeclaration: ArgumentsDeclarationNode | null;
    public returnTypeExpression: TypeExpressionNode | null;
    public body: BodyNode;

    override get children(): readonly Node[] {
        return [this.identifier, this.argumentsDeclaration, this.returnTypeExpression, this.body]
            .filter(c => c) as Node[];
    }

    constructor(isAsync: boolean, identifier: IdentifierNode, argumentsDeclaration: ArgumentsDeclarationNode | null, returnTypeExpression: TypeExpressionNode | null, body: BodyNode) {
        super();
        this.isAsync = isAsync;
        this.identifier = identifier;
        this.argumentsDeclaration = argumentsDeclaration;
        this.returnTypeExpression = returnTypeExpression;
        this.body = body;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitSubroutineDefinition(this);
    }
}
