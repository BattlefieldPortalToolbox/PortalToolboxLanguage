import { Node } from "../Node";
import type { BodyBlockNode } from "./BodyBlockNode";
import type { StatementNode } from "../statements";

export class BodyNode extends Node {
    public blocks: BodyBlockNode[];
    public statements: StatementNode[];

    constructor(blocks: BodyBlockNode[], statements: StatementNode[]) {
        super();
        this.blocks = blocks;
        this.statements = statements;
    }
}
