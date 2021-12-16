import { Node } from "./Node";
import type { VariableDeclarationWithoutSpecifierNode } from "./VariableDeclarationWithoutSpecifierNode";

export enum VariableScopeSpecifier {
    Var = "var",
    Global = "global",
    Team = "team",
    Player = "player"
}

export class VariableDeclarationNode extends Node {
    public specifier: VariableScopeSpecifier;
    public variables: VariableDeclarationWithoutSpecifierNode[];

    constructor(specifier: VariableScopeSpecifier, variables: VariableDeclarationWithoutSpecifierNode[]) {
        super();
        this.specifier = specifier;
        this.variables = variables;
    }
}
