import { TypeExpressionNode } from "./TypeExpressionNode";

export class TupleTypeExpressionNode extends TypeExpressionNode {
    public elements: TypeExpressionNode[];

    constructor(elements: TypeExpressionNode[]) {
        super();
        this.elements = elements;
    }
}
