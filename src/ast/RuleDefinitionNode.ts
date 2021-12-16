import { Node } from "./Node";
import type { IdentifierNode } from "./IdentifierNode";
import type { BodyNode } from "./body";

export class RuleDefinitionNode extends Node {
    public isMod: boolean;
    public isAsync: boolean;
    public identifier: IdentifierNode | null;
    public event: IdentifierNode;
    public eventArgument: IdentifierNode | null;
    public body: BodyNode;

    constructor(isMod: boolean, isAsync: boolean, identifier: IdentifierNode | null, event: IdentifierNode, eventArgument: IdentifierNode | null, body: BodyNode) {
        super();
        this.isMod = isMod;
        this.isAsync = isAsync;
        this.identifier = identifier;
        this.event = event;
        this.eventArgument = eventArgument;
        this.body = body;
    }
}
