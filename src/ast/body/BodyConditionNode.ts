import type { ExpressionNode } from "../expressions";
import { BodyBlockNode } from "./BodyBlockNode";

export class BodyConditionNode extends BodyBlockNode {
    public condition: ExpressionNode;

    constructor(condition: ExpressionNode) {
        super();
        this.condition = condition;
    }
}
