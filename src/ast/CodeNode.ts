import { Node } from "./Node";
import type { VariableDeclarationNode } from "./VariableDeclarationNode";
import type { SubroutineDefinitionNode } from "./subroutine";
import type { RuleDefinitionNode } from "./RuleDefinitionNode";
import type { ModDefinitionNode } from "./ModDefinitionNode";

export class CodeNode extends Node {
    public definitions: (VariableDeclarationNode | SubroutineDefinitionNode | RuleDefinitionNode | ModDefinitionNode)[];

    constructor(definitions: (VariableDeclarationNode | SubroutineDefinitionNode | RuleDefinitionNode | ModDefinitionNode)[]) {
        super();
        this.definitions = definitions;
    }
}
