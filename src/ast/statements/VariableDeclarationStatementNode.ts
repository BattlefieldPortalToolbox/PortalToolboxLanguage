import { StatementNode } from "./StatementNode";
import type { VariableDeclarationNode } from "../VariableDeclarationNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class VariableDeclarationStatementNode extends StatementNode {
    public variableDeclaration: VariableDeclarationNode;

    override get children(): readonly Node[] {
        return [this.variableDeclaration];
    }

    constructor(variableDeclaration: VariableDeclarationNode) {
        super();
        this.variableDeclaration = variableDeclaration;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitVariableDeclarationStatement(this);
    }
}
