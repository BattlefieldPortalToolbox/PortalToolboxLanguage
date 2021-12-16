import { Node } from "./Node";
import type { IdentifierNode } from "./IdentifierNode";
import type { RuleDefinitionNode } from "./RuleDefinitionNode";

export class ModDefinitionNode extends Node {
    public identifier: IdentifierNode | null;
    public rules: (IdentifierNode | RuleDefinitionNode)[];

    constructor(identifier: IdentifierNode | null, rules: (IdentifierNode | RuleDefinitionNode)[]) {
        super();
        this.identifier = identifier;
        this.rules = rules;
    }
}
