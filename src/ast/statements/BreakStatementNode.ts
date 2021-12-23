import { StatementNode } from "./StatementNode";
import type { NodeVisitor } from "../NodeVisitor";

export class BreakStatementNode extends StatementNode {
    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBreakStatement(this);
    }
}
