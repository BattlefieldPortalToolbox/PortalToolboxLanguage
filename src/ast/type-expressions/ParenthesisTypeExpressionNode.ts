import { TypeExpressionNode } from "./TypeExpressionNode";

export class ParenthesisTypeExpressionNode extends TypeExpressionNode {
    public typeExpression: TypeExpressionNode;

    constructor(typeExpression: TypeExpressionNode) {
        super();
        this.typeExpression = typeExpression;
    }
}
