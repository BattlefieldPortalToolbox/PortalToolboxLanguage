import { LiteralNode } from "./LiteralNode";

export class BooleanLiteralNode extends LiteralNode<boolean> {
    constructor(value: boolean) {
        super(value);
    }
}
