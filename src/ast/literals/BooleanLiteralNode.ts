import { LiteralNode } from "./LiteralNode";
import type { NodeVisitor } from "../NodeVisitor";

export class BooleanLiteralNode extends LiteralNode<boolean> {
    constructor(value: boolean) {
        super(value);
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBooleanLiteral(this);
    }
}
