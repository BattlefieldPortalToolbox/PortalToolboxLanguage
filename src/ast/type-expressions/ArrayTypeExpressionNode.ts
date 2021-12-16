import { TypeExpressionNode } from "./TypeExpressionNode";

export class ArrayTypeExpressionNode extends TypeExpressionNode {
    public element: TypeExpressionNode;

    constructor(element: TypeExpressionNode) {
        super();
        this.element = element;
    }
}
