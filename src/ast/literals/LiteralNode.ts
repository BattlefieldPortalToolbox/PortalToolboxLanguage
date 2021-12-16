import { Node } from "../Node";

export abstract class LiteralNode<T = any> extends Node {
    public value: T;

    protected constructor(value: T) {
        super();
        this.value = value;
    }
}
