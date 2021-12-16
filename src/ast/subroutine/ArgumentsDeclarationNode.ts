import { Node } from "../Node";
import type { ArgumentDeclarationNode } from "./ArgumentDeclarationNode";

export class ArgumentsDeclarationNode extends Node {
    public arguments: ArgumentDeclarationNode[];

    constructor(argumentsDeclarations: ArgumentDeclarationNode[]) {
        super();
        this.arguments = argumentsDeclarations;
    }
}
