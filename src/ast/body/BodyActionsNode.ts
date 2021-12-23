import type { StatementNode } from "../statements";
import { BodyBlockNode } from "./BodyBlockNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class BodyActionsNode extends BodyBlockNode {
    public statements: StatementNode[];

    override get children(): readonly Node[] {
        return this.statements;
    }

    constructor(statements: StatementNode[]) {
        super();
        this.statements = statements;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBodyActions(this);
    }
}
