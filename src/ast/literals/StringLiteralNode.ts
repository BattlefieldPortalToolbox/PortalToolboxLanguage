import { LiteralNode } from "./LiteralNode";

export class StringLiteralNode extends LiteralNode<string> {
    constructor(value: string) {
        super(value);
    }
}
