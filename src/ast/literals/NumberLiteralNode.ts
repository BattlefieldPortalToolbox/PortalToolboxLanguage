import { LiteralNode } from "./LiteralNode";
import type { NodeVisitor } from "../NodeVisitor";

export class NumberLiteralNode extends LiteralNode<string> {
    constructor(value: string) {
        super(value);
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitNumberLiteral(this);
    }
}
