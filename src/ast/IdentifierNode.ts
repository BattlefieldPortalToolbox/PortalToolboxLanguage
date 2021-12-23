import { Node } from "./Node";
import type { NodeVisitor } from "./NodeVisitor";

export class IdentifierNode extends Node {
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitIdentifier(this);
    }
}
