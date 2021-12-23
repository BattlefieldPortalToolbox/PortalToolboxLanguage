import { Node } from "./Node";
import type { VariableDeclarationWithoutSpecifierNode } from "./VariableDeclarationWithoutSpecifierNode";
import type { NodeVisitor } from "./NodeVisitor";

export enum VariableScopeSpecifier {
    Var = "var",
    Global = "global",
    Team = "team",
    Player = "player"
}

export class VariableDeclarationNode extends Node {
    public specifier: VariableScopeSpecifier;
    public variables: VariableDeclarationWithoutSpecifierNode[];

    override get children(): readonly Node[] {
        return this.variables;
    }

    constructor(specifier: VariableScopeSpecifier, variables: VariableDeclarationWithoutSpecifierNode[]) {
        super();
        this.specifier = specifier;
        this.variables = variables;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitVariableDeclaration(this);
    }
}
