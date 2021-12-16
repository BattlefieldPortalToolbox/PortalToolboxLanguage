import { LiteralNode } from "./LiteralNode";
import type { ExpressionNode } from "../expressions";

export class ArrayLiteralNode extends LiteralNode<ExpressionNode[]> {
    constructor(expressions: ExpressionNode[]) {
        super(expressions);
    }
}
