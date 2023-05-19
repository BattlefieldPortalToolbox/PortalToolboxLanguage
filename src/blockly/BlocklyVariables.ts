import { BlocklyNode } from "./BlocklyNode";
import type { BlocklyNodeVisitor } from "./BlocklyNodeVisitor";
import type { BlocklyVariable } from "./BlocklyVariable";

export class BlocklyVariables extends BlocklyNode {
    variables: BlocklyVariable[] = [];

    override get children(): readonly BlocklyNode[] {
        return this.variables;
    }

    accept<T>(visitor: BlocklyNodeVisitor<T>): T {
        return visitor.visitVariables(this);
    }
}
