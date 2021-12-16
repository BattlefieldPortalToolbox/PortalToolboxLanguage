import { Node } from "../Node";
import type { IdentifierNode } from "../IdentifierNode";
import type { ArgumentsDeclarationNode } from "./ArgumentsDeclarationNode";
import type { TypeExpressionNode } from "../type-expressions";
import type { BodyNode } from "../body";

export class SubroutineDefinitionNode extends Node {
    public isAsync: boolean;
    public identifier: IdentifierNode;
    public argumentsDeclaration: ArgumentsDeclarationNode | null;
    public returnTypeExpression: TypeExpressionNode | null;
    public body: BodyNode;

    constructor(isAsync: boolean, identifier: IdentifierNode, argumentsDeclaration: ArgumentsDeclarationNode | null, returnTypeExpression: TypeExpressionNode | null, body: BodyNode) {
        super();
        this.isAsync = isAsync;
        this.identifier = identifier;
        this.argumentsDeclaration = argumentsDeclaration;
        this.returnTypeExpression = returnTypeExpression;
        this.body = body;
    }
}
