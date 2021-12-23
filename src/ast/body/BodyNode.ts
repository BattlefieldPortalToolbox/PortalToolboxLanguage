import { Node } from "../Node";
import type { BodyBlockNode } from "./BodyBlockNode";
import type { StatementNode } from "../statements";
import type { NodeVisitor } from "../NodeVisitor";

export class BodyNode extends Node {
    public blocks: BodyBlockNode[];
    public statements: StatementNode[];

    override get children(): readonly Node[] {
        return [...this.blocks, ...this.statements];
    }

    constructor(blocks: BodyBlockNode[], statements: StatementNode[]) {
        super();
        this.blocks = blocks;
        this.statements = statements;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBody(this);
    }
}
