import { LiteralNode } from "./LiteralNode";

export class NumberLiteralNode extends LiteralNode<string> {
    constructor(value: string) {
        super(value);
    }
}
