import type { ExpressionNode } from "../expressions";
import { BodyBlockNode } from "./BodyBlockNode";
import type { Node } from "../Node";
import type { NodeVisitor } from "../NodeVisitor";

export class BodyConditionsNode extends BodyBlockNode {
    public conditions: ExpressionNode[];

    override get children(): readonly Node[] {
        return this.conditions;
    }

    constructor(conditions: ExpressionNode[]) {
        super();
        this.conditions = conditions;
    }

    override accept<T>(visitor: NodeVisitor<T>): T {
        return visitor.visitBodyConditions(this);
    }
}
