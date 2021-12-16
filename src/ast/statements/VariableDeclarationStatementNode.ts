import { StatementNode } from "./StatementNode";
import type { VariableDeclarationNode } from "../VariableDeclarationNode";

export class VariableDeclarationStatementNode extends StatementNode {
    public variableDeclaration: VariableDeclarationNode;

    constructor(variableDeclaration: VariableDeclarationNode) {
        super();
        this.variableDeclaration = variableDeclaration;
    }
}
