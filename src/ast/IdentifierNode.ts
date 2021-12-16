import { Node } from "./Node";

export class IdentifierNode extends Node {
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}
