import { TypeExpressionNode } from "./TypeExpressionNode";

export class UnionTypeExpressionNode extends TypeExpressionNode {
    public elements: TypeExpressionNode[];

    constructor(elements: TypeExpressionNode[]) {
        super();
        this.elements = elements;
    }
}
