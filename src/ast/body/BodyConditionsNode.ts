import type { ExpressionNode } from "../expressions";
import { BodyBlockNode } from "./BodyBlockNode";

export class BodyConditionsNode extends BodyBlockNode {
    public conditions: ExpressionNode[];

    constructor(conditions: ExpressionNode[]) {
        super();
        this.conditions = conditions;
    }
}
