import { Node } from "./Node";
import type { VariableDeclarationNode } from "./VariableDeclarationNode";
import type { SubroutineDefinitionNode } from "./subroutine";
import type { RuleDefinitionNode } from "./RuleDefinitionNode";
import type { ModDefinitionNode } from "./ModDefinitionNode";
import type { NodeVisitor } from "./NodeVisitor";

export class CodeNode extends Node {
    public definitions: (VariableDeclarationNode | SubroutineDefinitionNode | RuleDefinitionNode | ModDefinitionNode)[];

    override get children(): readonly Node[] {
        return this.definitions;
    }

    constructor(definitions: (VariableDeclarationNode | SubroutineDefinitionNode | RuleDefinitionNode | ModDefinitionNode)[]) {
        super();
        this.definitions = definitions;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitCode(this);
    }
}
