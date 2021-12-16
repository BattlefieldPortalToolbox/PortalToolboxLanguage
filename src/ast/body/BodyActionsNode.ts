import type { StatementNode } from "../statements";
import { BodyBlockNode } from "./BodyBlockNode";

export class BodyActionsNode extends BodyBlockNode {
    public statements: StatementNode[];

    constructor(statements: StatementNode[]) {
        super();
        this.statements = statements;
    }
}
