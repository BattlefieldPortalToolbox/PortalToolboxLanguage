import { Node } from "./Node";
import type { IdentifierNode } from "./IdentifierNode";
import type { RuleDefinitionNode } from "./RuleDefinitionNode";
import type { NodeVisitor } from "./NodeVisitor";

export class ModDefinitionNode extends Node {
    public identifier: IdentifierNode | null;
    public rules: (IdentifierNode | RuleDefinitionNode)[];

    override get children(): readonly Node[] {
        return [this.identifier, ...this.rules]
            .filter(c => c) as Node[];
    }

    constructor(identifier: IdentifierNode | null, rules: (IdentifierNode | RuleDefinitionNode)[]) {
        super();
        this.identifier = identifier;
        this.rules = rules;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitModDefinition(this);
    }
}
