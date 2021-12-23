import { StatementNode } from "./StatementNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class BlockStatementNode extends StatementNode {
    public statements: StatementNode[];

    override get children(): readonly Node[] {
        return this.statements;
    }

    constructor(statements: StatementNode[]) {
        super();
        this.statements = statements;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBlockStatement(this);
    }
}
