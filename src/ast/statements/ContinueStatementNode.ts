import { StatementNode } from "./StatementNode";
import type { NodeVisitor } from "../NodeVisitor";

export class ContinueStatementNode extends StatementNode {
    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitContinueStatement(this);
    }
}
