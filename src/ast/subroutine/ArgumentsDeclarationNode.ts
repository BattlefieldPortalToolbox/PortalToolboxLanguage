import { Node } from "../Node";
import type { ArgumentDeclarationNode } from "./ArgumentDeclarationNode";
import type { NodeVisitor } from "../NodeVisitor";

export class ArgumentsDeclarationNode extends Node {
    public arguments: ArgumentDeclarationNode[];

    override get children(): readonly Node[] {
        return this.arguments;
    }

    constructor(argumentsDeclarations: ArgumentDeclarationNode[]) {
        super();
        this.arguments = argumentsDeclarations;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitArgumentsDeclaration(this);
    }
}
