import { StatementNode } from "./StatementNode";

export class BlockStatementNode extends StatementNode {
    public statements: StatementNode[];

    constructor(statements: StatementNode[]) {
        super();
        this.statements = statements;
    }
}
