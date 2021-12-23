import type { ExpressionNode } from "../expressions";
import { BodyBlockNode } from "./BodyBlockNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class BodyConditionNode extends BodyBlockNode {
    public condition: ExpressionNode;

    override get children(): readonly Node[] {
        return [this.condition];
    }

    constructor(condition: ExpressionNode) {
        super();
        this.condition = condition;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBodyCondition(this);
    }
}
